const dangTinModel = require('../models/dangtin.model');
const userModel = require('../models/user.model');

exports.thongKeAdmin = async (req, res) => {
    let thongKe = {
        soLuongTinChoDuyet: 0,
        soLuongTinDaDuyet: 0,
        soLuongTinBiLoi: 0,
        soLanUuTien: 0,
        soLuongUserActive: 0,
        soLuongUserChuaActive: 0,
        tongDongRao: 0,
        tongTienDangTin: 0,
        tongTienUuTien: 0,
        doanhThu: 0
    }
    // get số lượng tin chờ duyệt
    const getCountTinChuaDuyet = () => {
        return new Promise((resolve, reject) => {
            dangTinModel.getCountTinChuaDuyet((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetCountTinChuaDuyet = await getCountTinChuaDuyet();
    if (dataGetCountTinChuaDuyet.length > 0) {
        thongKe.soLuongTinChoDuyet = dataGetCountTinChuaDuyet[0].CountTinChuaDuyet;
    } else {
        return res.status(500).json(error);
    }

    // get số lượng tin đã đăng
    const getCountTinDaDuyet = () => {
        return new Promise((resolve, reject) => {
            dangTinModel.getCountTinDaDuyet((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetCountTinDaDuyet = await getCountTinDaDuyet();
    if (dataGetCountTinDaDuyet.length > 0) {
        thongKe.soLuongTinDaDuyet = dataGetCountTinDaDuyet[0].CountTinDaDuyet;
    } else {
        return res.status(500).json(error);
    }

    // get số lượng tin bị lỗi
    const getCountTinViPham = () => {
        return new Promise((resolve, reject) => {
            dangTinModel.getCountTinViPham((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetCountTinViPham = await getCountTinViPham();
    if (dataGetCountTinViPham.length > 0) {
        thongKe.soLuongTinBiLoi = dataGetCountTinViPham[0].CountTinViPham;
    } else {
        return res.status(500).json(error);
    }

    // get sô lượng user đã active
    const getCountUserDaActive = () => {
        return new Promise((resolve, reject) => {
            userModel.getCountUserDaActive((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetCountUserDaActive = await getCountUserDaActive();
    if (dataGetCountUserDaActive.length > 0) {
        thongKe.soLuongUserActive = dataGetCountUserDaActive[0].CountUserDaActive;
    } else {
        return res.status(500).json(error);
    }

    // get số lượng user chưa active
    const getCountUserChuaActive = () => {
        return new Promise((resolve, reject) => {
            userModel.getCountUserChuaActive((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetCountUserChuaActive = await getCountUserChuaActive();
    if (dataGetCountUserChuaActive.length > 0) {
        thongKe.soLuongUserChuaActive = dataGetCountUserChuaActive[0].CountUserChuaActive;
    } else {
        return res.status(500).json(error);
    }


    // get số lượng tổng đồng rao
    const getSumDongRaoUserDaActive = () => {
        return new Promise((resolve, reject) => {
            userModel.getSumDongRaoUserDaActive((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetSumDongRaoUserDaActive = await getSumDongRaoUserDaActive();
    if (dataGetSumDongRaoUserDaActive.length > 0) {
        thongKe.tongDongRao = dataGetSumDongRaoUserDaActive[0].SumDongRaoUserDaActive;
    } else {
        return res.status(500).json(error);
    }

    // get tổng tiền ưu tiên
    const getSumTienUutienUserDaActive = () => {
        return new Promise((resolve, reject) => {
            userModel.getSumTienUutienUserDaActive((err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }
    const dataGetSumTienUutienUserDaActive = await getSumTienUutienUserDaActive();
    if (dataGetSumTienUutienUserDaActive.length > 0) {
        thongKe.tongTienUuTien = dataGetSumTienUutienUserDaActive[0].SumTienUutienUserDaActive;
    } else {
        return res.status(500).json(error);
    }

    // get tổng tiền đăng tin
    let donViTinDang = 5000;
    let tongTienDangTin = parseInt(donViTinDang) * parseInt(thongKe.soLuongTinDaDuyet);
    thongKe.tongTienDangTin = tongTienDangTin;

    // get số lần ưu tiên
    let donViUuTien = 10000;
    let soLanUuTien = parseInt(thongKe.tongTienUuTien) / parseInt(donViUuTien);
    thongKe.soLanUuTien = soLanUuTien;

    // doanh thu
    let doanhThu = parseInt(thongKe.tongTienUuTien) + parseInt(thongKe.tongTienDangTin);
    thongKe.doanhThu = doanhThu;


    return res.status(200).json({ thongKe: thongKe })

}