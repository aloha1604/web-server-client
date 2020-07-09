const con = require("./db");
const moment = require('../lib/moment.lib');
// 17 muc can them
exports.add = (tinDang, result) => {
    tinDang.push(moment.mysqlTimestamp);
    tinDang.push(moment.mysqlTimestamp);
    console.log(tinDang);
    //;?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?:,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_phone,tindang_email,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,create_at,update_at
    const sql = "INSERT INTO tbl_tindang (nhom_id,tindang_tieude,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_email,tindang_phone,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,create_at,update_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
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

    const sql = "SELECT * FROM tbl_tinDang WHERE tindang_active = ? AND tindang_vipham = ?"
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

    const sql = "SELECT * FROM tbl_tinDang WHERE tindang_active = ? AND tindang_vipham = ?"
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

    const sql = "SELECT * FROM tbl_tinDang WHERE tindang_active = ? AND tindang_vipham = ?"
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