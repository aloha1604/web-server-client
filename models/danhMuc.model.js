const con = require("./db");
const moment = require('../lib/moment.lib');

exports.getAllDanhMuc = (result) => {
    const sql = "SELECT * FROM tbl_danhmuc "
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
exports.getAllDanhMucByIdDanhMuc = (danhmuc_id, result) => {
    const sql = "SELECT * FROM tbl_danhmuc where danhmuc_id = ? "
    con.query(sql, [danhmuc_id], (err, res) => {
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

exports.add = (danhmuc_ten, result) => {
    const sql = "INSERT INTO tbl_danhmuc (danhmuc_ten,create_at,update_at) VALUES (?,?,?)"
    con.query(sql, [danhmuc_ten, moment.mysqlTimestamp, moment.mysqlTimestamp], (err, res) => {
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

exports.delete = (danhmuc_id, result) => {
    const sql = "DELETE FROM tbl_danhmuc WHERE danhmuc_id = ?";
    const sql1 = "DELETE FROM tbl_nhom WHERE danhmuc_id = ?";
    con.query(sql1, [danhmuc_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            return;
        } else {
            // console.log(res);
            return;
        }
    })
    con.query(sql, [danhmuc_id], (err, res) => {
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

exports.update = (danhmuc_id, danhmuc_ten, result) => {
    const sql = "UPDATE tbl_danhmuc set danhmuc_ten = ? WHERE danhmuc_id = ?"
    con.query(sql, [danhmuc_ten, danhmuc_id], (err, res) => {
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