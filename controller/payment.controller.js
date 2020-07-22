const stripe = require('../helpers/stripe');
const userModel = require('../models/user.model');
const giaoDichModel = require('../models/giaodich.model');
const nodeMail = require('../helpers/nodeMail');


const postStripeCharge = (req, res) => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        getDongRao(req, res)
        res.status(200).send({ success: stripeRes });
    }
}

// get xu ly tao giao dich moi, them dongrao
getDongRao = async (req) => {
    //get data
    const user_id = req.body.user_id;
    const dataGiaDongRao = req.body.dataGiaDongRao;
    const noiDungGiaoDich = req.body.noiDungGiaoDich;
    // get dong rao hien tai
    const getFlagDongRao = (user_id) => {
        return new Promise((resolve, reject) => {
            userModel.getDongRaoByIdUser(user_id, (err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }

    const dataDongRao = await getFlagDongRao(user_id);

    // tinh toan dong rao hien tai  + dong rao moi
    let dongRao = dataDongRao[0].dongrao ? dataDongRao[0].dongrao : 0;
    let newDongRao = parseInt(dongRao) + parseInt(dataGiaDongRao);

    //update dong rao
    const updateFlagDongRao = (user_id, newDongRao) => {
        return new Promise((resolve, reject) => {
            userModel.updateDongRaoByIdUser(user_id, newDongRao, (err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }

    const dataUpdateDongRao = await updateFlagDongRao(user_id, newDongRao)

    // tạo thông tin giao dịch
    const insertGiaoDich = (user_id, noiDungGiaoDich) => {
        return new Promise((resolve, reject) => {
            giaoDichModel.insert(user_id, noiDungGiaoDich, (err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataInsertGiaoDich = await insertGiaoDich(user_id, noiDungGiaoDich);

    if (dataInsertGiaoDich.affectedRows && dataUpdateDongRao.affectedRows) {
        const option = nodeMail.createOption();
        const createTransportMail = nodeMail.createTransportMail(option);

        let from = 'webdoan20192019@gmail.com';// Địa chỉ email của người gửi
        let to = dataDongRao[0].email; // Địa chỉ email của người gửi
        let subject = 'Thư gửi để xác nhận tài khoản'; // Tiêu đề mail
        let text = "Nhấp vào link để xác nhận tài khoản, cảm ơn bạn đã tham gia sàn thương mại của chúng tôi !!!";// Nội dung mail dạng text
        let html = `<p>Cảm ơn bạn đã nạp thêm Đồng rao vào web Raovat.vn của chúng tôi !!! số tiền nạp : ${dataGiaDongRao} Dr</p> <br> <h3>Tổng đồng rao :</h3> ${newDongRao} Dr`; // Nội dung mail dạng html

        const createMail = nodeMail.createMail(from, to, subject, text, html);

        const sendMailer = nodeMail.sendMailer(createMail, createTransportMail);
    }

}



exports.getPaymentApi = (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
}

exports.postPaymentApi = (req, res) => {
    // console.log(req.body)
    const body = {
        source: req.body.source,
        amount: req.body.amount,
        currency: req.body.currency
    };

    stripe.charges.create(body, postStripeCharge(req, res));
}

// module.exports = paymentApi;