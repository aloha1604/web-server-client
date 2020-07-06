const con = require("./db");
const moment = require('../lib/moment.lib');

exports.getAllNhomByIdDanhMuc = (danhmuc_id, result) => {
    const sql = "SELECT * FROM tbl_nhom where danhmuc_id=? "
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

exports.addNhomByIdDanhMuc = (danhmuc_id, nhom_ten, result) => {
    const sql = "INSERT INTO tbl_nhom (danhmuc_id,nhom_ten,create_at,update_at) VALUES (?,?,?,?)"
    con.query(sql, [danhmuc_id, nhom_ten, moment.mysqlTimestamp, moment.mysqlTimestamp], (err, res) => {
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

exports.remove = (nhom_id, result) => {
    const sql = "DELETE FROM tbl_nhom WHERE nhom_id = ?"
    con.query(sql, [nhom_id], (err, res) => {
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

exports.updateNhomByIdNhom = (nhom_id, nhom_ten, result) => {
    const sql = "UPDATE tbl_nhom set nhom_ten = ? WHERE nhom_id = ?"
    con.query(sql, [nhom_ten, nhom_id], (err, res) => {
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