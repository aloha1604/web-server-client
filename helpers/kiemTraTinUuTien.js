const moment = require('moment')
const tinDangModel = require('../models/dangtin.model');
exports.kiemTraTinUutien = async (tidang_id, thoiGianTinUuTIen) => {
    // var thoiGianSuDungTinUuTien = moment(thoiGianTinUuTIen).valueOf() + 18000000;
    // var result = parseInt(thoiGianSuDungTinUuTien) < parseInt(now.valueOf()) ? 'true' : 'false'
    // console.log(now)
    // console.log(thoiGianSuDungTinUuTien)
    // console.log(result)
    try {
        if (thoiGianTinUuTIen) {
            var now = moment(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')).valueOf();
            var thoiGianSuDungTinUuTien = moment(thoiGianTinUuTIen).valueOf() + 18000000;
            if (thoiGianSuDungTinUuTien < now) {
                // call model tindang cập nhật lại tin theo tindang_id cập nhật thời gian sử dụng là null và tinuutien = 0
                const flagUpdateTinDangUuTienHetHan = (tinDang_id) => {
                    return new Promise((resolve, reject) => {
                        tinDangModel.updateTinDangUuTienHetHan(tinDang_id, (err, data) => {
                            if (err)
                                reject(err);
                            else {
                                resolve(data);
                            }
                        })
                    })
                }

                const dataFlagGetOneTinByIdTinDang = await flagUpdateTinDangUuTienHetHan(tidang_id);
                if (dataFlagGetOneTinByIdTinDang.affectedRows > 0) {
                    console.log(`kiem tra tin thanh cong :${tidang_id}`)
                }

            }
        }
    } catch (error) {
        console.log('Lỗi kiểm tra tin thoi gian uu tien' + error)
    }


}