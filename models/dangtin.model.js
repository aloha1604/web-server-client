const con = require("./db");
const moment = require('../lib/moment.lib');
// 17 muc can them
exports.add = (tinDang, result) => {
    let getTime = moment.mysqlTimestamp1();
    tinDang.push(getTime);
    tinDang.push(getTime);
    // console.log(tinDang);
    //;?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?:,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_phone,tindang_email,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,create_at,update_at
    const sql = "INSERT INTO tbl_tindang (nhom_id,user_id,tindang_tieude,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_email,tindang_phone,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,tindang_mienphi,create_at,update_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    con.query(sql, tinDang, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getAllTinChoDuyet = (result) => {

    // const sql = "SELECT * FROM tbl_tindang LEFT JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id LEFT JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC"
    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [0, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getAllTinViPham = (result) => {

    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id JOIN tbl_thongbaovipham on tbl_tindang.tindang_id = tbl_thongbaovipham.tindang_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [0, 1], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getAllTinDaDuyet = (result) => {

    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ?  ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [1, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getAllTinChoDuyetByIdUser = (user_id, result) => {

    const sql = "SELECT * FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.user_id = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [0, 0, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getAllTinViPhamByIdUser = (user_id, result) => {

    const sql = "SELECT * FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id JOIN tbl_thongbaovipham on tbl_tindang.tindang_id = tbl_thongbaovipham.tindang_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.user_id = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [0, 1, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}
exports.getAllTinDaDuyetByIdUser = (user_id, result) => {

    const sql = "SELECT * FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.user_id = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [1, 0, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getTinMoi = (result) => {

    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC LIMIT 5"
    con.query(sql, [1, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getOneTinByIdTinDang = (tindang_id, result) => {

    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_id = ? ORDER BY tbl_tindang.tindang_id"
    con.query(sql, [tindang_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.getTinByIdNhom = (nhom_id, start, limit, result) => {

    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.nhom_id = ? ORDER BY tbl_tindang.tindang_id DESC LIMIT ?,?"
    con.query(sql, [1, 0, nhom_id, start, limit], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

// lay so tien theo Id tin
exports.getCountTinByIdNhom = (nhom_id, result) => {

    const sql = "SELECT count(tindang_id) FROM tbl_tindang  WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.nhom_id = ? "
    con.query(sql, [1, 0, nhom_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}


// update active tin
exports.updateTinDangActive = (tindang_id, result) => {

    const sql = "UPDATE tbl_tindang SET tindang_active=? WHERE tindang_id = ? "
    con.query(sql, [1, tindang_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

// update tin vi pham
exports.updateTinDangViPham = (tindang_id, result) => {

    const sql = "UPDATE tbl_tindang SET tindang_vipham= ? WHERE tindang_id = ? "
    con.query(sql, [1, tindang_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}
// xoa tin
exports.deleteTinDang = (tindang_id, result) => {

    const sql = "DELETE FROM tbl_tindang WHERE tindang_id =? "
    con.query(sql, tindang_id, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

// get tin uu tien
// get tin uu tien by user_id
exports.getAllTinUuTienById = (user_id, result) => {

    const sql = "SELECT * FROM tbl_tindang WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.user_id = ? AND tbl_tindang.tindang_uutien = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [1, 0, user_id, 1], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}
// get tin uu tien by nhom_id
exports.getAllTinUuTienByIdNhom = (nhom_id, result) => {

    const sql = "SELECT tbl_tindang.tindang_id, tbl_tindang.nhom_id,tbl_tindang.user_id, tbl_tindang.tindang_tieude, tbl_tindang.tindang_gia, tbl_tindang.tindang_tukhoa, tbl_tindang.tindang_tinhthanh,tbl_tindang.tindang_quanhuyen,tbl_tindang.tindang_phuongxa,tbl_tindang.tindang_noidung,tbl_tindang.tindang_linkyoutube,tbl_tindang.tindang_hoten,tbl_tindang.tindang_phone, tbl_tindang.tindang_email,tbl_tindang.tindang_diachi,tbl_tindang.tindang_thoigianlienhe,tbl_tindang.tindang_active,tbl_tindang.tindang_vipham,tbl_tindang.tindang_mienphi,tbl_tindang.tindang_uutien,tbl_tindang.tindang_thoigianuutien,tbl_tindang.create_at,tbl_tindang.update_at,tbl_danhmuc.danhmuc_id,tbl_danhmuc.danhmuc_ten,tbl_nhom.nhom_ten FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? AND tbl_tindang.nhom_id = ? AND tbl_tindang.tindang_uutien = ? ORDER BY tbl_tindang.tindang_id DESC"
    con.query(sql, [1, 0, nhom_id, 1], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

//update tin uu tien -> 1
exports.updateTinDangUuTien = (tindang_id, result) => {
    let getTime = moment.mysqlTimestamp1();
    console.log(getTime);
    const sql = "UPDATE tbl_tindang SET tindang_uutien = ?, tindang_thoigianuutien= ? WHERE tindang_id = ? "
    con.query(sql, [1, getTime, tindang_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

//  cập nhật tin đăng -> thoigianuutien và tắt tin ưu tiên
//update tin uu tien het han -> 0
exports.updateTinDangUuTienHetHan = (tindang_id, result) => {

    const sql = "UPDATE tbl_tindang SET tindang_uutien = ? , tindang_thoigianuutien= ? WHERE tindang_id = ? "
    con.query(sql, [0, null, tindang_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

exports.searchTinDang = (sql, result) => {
    con.query(sql, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

// láy số lượng tin chưa duyệt
exports.getCountTinChuaDuyet = (result) => {

    const sql = "SELECT count(tbl_tindang.tindang_id) as CountTinChuaDuyet FROM tbl_tindang LEFT JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id LEFT JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC"

    con.query(sql, [0, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}

// lấy số lượng tin đã duyệt
exports.getCountTinDaDuyet = (result) => {

    const sql = "SELECT count(tbl_tindang.tindang_id) as CountTinDaDuyet FROM tbl_tindang LEFT JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id LEFT JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC"

    con.query(sql, [1, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}


// lây số lượng tin bị lỗi
exports.getCountTinViPham = (result) => {

    const sql = "SELECT count(tbl_tindang.tindang_id) as CountTinViPham FROM tbl_tindang LEFT JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id LEFT JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ? ORDER BY tbl_tindang.tindang_id DESC"

    con.query(sql, [0, 1], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log(res);
            result(null, res);
        }
    })
}






