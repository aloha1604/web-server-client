const con = require("./db");
const moment = require('../lib/moment.lib');

exports.insertHinhAnh = (file, result) => {
    const values = file;
    const sql = "INSERT INTO tbl_hinhanh (hinhanh_ten) VALUES ?"
    console.log(values)
    con.query(sql, [values], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log(result.affectedRows);
            console.log('insert user');
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
            console.log('insert user');
            result(null, res);
        }
    })
}