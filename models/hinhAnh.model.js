const con = require("./db");
const moment = require('../lib/moment.lib');

exports.insertHinhAnh = (file, result) => {
    const values = file;
    const sql = "INSERT INTO tbl_hinhanh (hinhanh_ten) VALUES ?"

    con.query(sql, [values], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {

            result(null, res);
        }
    })
}

exports.insertHinhAnhByIdTin = (file, result) => {
    const values = file;
    const sql = "INSERT INTO tbl_hinhanh (tindang_id,hinhanh_ten) VALUES ?"

    con.query(sql, [values], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
      
            result(null, res);
        }
    })
}


exports.getHinhAnh = (result) => {
    const sql = "SELECT * FROM tbl_hinhanh"
    con.query(sql, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}