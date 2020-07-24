const userModel = require('../models/user.model');
const giaoDichModel = require('../models/giaodich.model');
const nodeMail = require('../helpers/nodeMail');


//xử lý đồng rao
// params user_id,dataGI...
// tuy chon : 0 là sẽ cộng thêm , 1 sẽ là trừ đi
exports.xuLyDongRao = async (user_idd, dataGiaDongRao0, noiDungGiaoDichh, tuychon) => {
    //get data
    const user_id = user_idd;
    const dataGiaDongRao = dataGiaDongRao0;
    const noiDungGiaoDich = noiDungGiaoDichh;
    let HTML;

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
    let dongRao = dataDongRao[0].dongrao ? dataDongRao[0].dongrao : 0;
    let newDongRao
    // tinh toan dong rao hien tai  + dong rao moi
    if (parseInt(tuychon) === 0) {
        newDongRao = parseInt(dongRao) + parseInt(dataGiaDongRao);
        HTML = `<p>Cảm ơn bạn đã ${noiDungGiaoDich} web Raovat.vn của chúng tôi !!! số Đồng Rao (Dr) được cộng : ${dataGiaDongRao} Dr</p> <br> <h3>Tổng đồng rao :</h3> ${newDongRao} Dr`
    } else if (parseInt(tuychon) === 1) {
        newDongRao = parseInt(dongRao) - parseInt(dataGiaDongRao);
        HTML = `<p>Cảm ơn bạn đã ${noiDungGiaoDich} web Raovat.vn của chúng tôi !!! số Đồng Rao (DR) bị trừ : ${dataGiaDongRao} Dr</p> <br> <h3>Tổng đồng rao :</h3> ${newDongRao} Dr`
    }


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
        let subject = 'Thư gửi để xác nhận Đồng Rao'; // Tiêu đề mail
        let text = "Nhấp vào link để xác nhận tài khoản, cảm ơn bạn đã tham gia sàn thương mại của chúng tôi !!!";// Nội dung mail dạng text
        let html = HTML; // Nội dung mail dạng html

        const createMail = nodeMail.createMail(from, to, subject, text, html);

        const sendMailer = nodeMail.sendMailer(createMail, createTransportMail);
    }

}