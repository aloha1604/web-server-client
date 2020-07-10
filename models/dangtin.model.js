const con = require("./db");
const moment = require('../lib/moment.lib');
// 17 muc can them
exports.add = (tinDang, result) => {
    tinDang.push(moment.mysqlTimestamp);
    tinDang.push(moment.mysqlTimestamp);
    // console.log(tinDang);
    //;?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?:,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_phone,tindang_email,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,create_at,update_at
    const sql = "INSERT INTO tbl_tindang (nhom_id,user_id,tindang_tieude,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_email,tindang_phone,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,create_at,update_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
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

    const sql = "SELECT * FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ?"
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

    const sql = "SELECT * FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ?"
    con.query(sql, [1, 1], (err, res) => {
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

    const sql = "SELECT * FROM tbl_tindang JOIN tbl_nhom on tbl_tindang.nhom_id = tbl_nhom.nhom_id JOIN tbl_danhmuc on tbl_nhom.danhmuc_id = tbl_danhmuc.danhmuc_id WHERE tbl_tindang.tindang_active = ? AND tbl_tindang.tindang_vipham = ?"
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


exports.updateTinDangActive = (tindang_id, result) => {

    const sql = "UPDATE tbl_tindang SET dangtin_active=? WHERE dangtin_id = ? "
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

exports.updateTinDangViPham = (tindang_id, result) => {

    const sql = "UPDATE tbl_tindang SET dangtin_vipham= ? WHERE dangtin_id = ? "
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
