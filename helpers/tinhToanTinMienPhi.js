const userModel = require('../models/user.model')

//  params user_id, tuychon
// tuy chon neu la 0 sẽ la cong them tin, neu là 1 sẽ trừ đi 1 tin
exports.tinhToanTinMienPhi = async (user_id, tuychon) => {
    // get dong rao hien tai
    try {
        const getCountTinMienPhiAndDongRao = (user_id) => {
            return new Promise((resolve, reject) => {
                userModel.getCountTinMienPhiAndDongRao(user_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        const dataCountTinMienPhiAndDongRao = await getCountTinMienPhiAndDongRao(user_id);
        console.log(dataCountTinMienPhiAndDongRao)
        console.log(dataCountTinMienPhiAndDongRao[0].tinmienphi)
        if (dataCountTinMienPhiAndDongRao.length > 0) {
            let countTinCoPhi = dataCountTinMienPhiAndDongRao[0].tinmienphi ? dataCountTinMienPhiAndDongRao[0].tinmienphi : 0;
            let newCountNewTinCoPhi;
            if (parseInt(tuychon) === 0) {
                newCountNewTinCoPhi = countTinCoPhi + 1;

            } else if (parseInt(tuychon) === 1) {
                newCountNewTinCoPhi = countTinCoPhi - 1;

            }

            const updateCountTinMienPhiAndDongRao = (user_id, newCountNewTinCoPhi) => {
                return new Promise((resolve, reject) => {
                    userModel.updateCountTinMienPhiByIdUser(user_id, newCountNewTinCoPhi, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }
                    })
                })
            }
            console.log(newCountNewTinCoPhi)

            const dataUpdateCountTinMienPhiAndDongRao = await updateCountTinMienPhiAndDongRao(user_id, newCountNewTinCoPhi);

            if (dataUpdateCountTinMienPhiAndDongRao.affectedRows > 0) {
                console.log('update data count ở file tính toan tin thành công');
            } else {
                console.log('update data count ở file tính toan tin thất bại');
            }
        } else {
            console.log('Get data count ở file tính toán tin miễn phí thất bại')
        }

    } catch (error) {
        console.log('lỗi xử lý tính toan tin miễn phí' + error)
    }

}