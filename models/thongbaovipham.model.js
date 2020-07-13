const con = require("./db");
const moment = require('../lib/moment.lib');

exports.add = (tindang_id, thongbaovipham_id, thongbaovipham_noidung, result) => {
    // tinDang.push(moment.mysqlTimestamp);
    // tinDang.push(moment.mysqlTimestamp);

    const sql = "INSERT INTO tbl_thongbaovipham set tindang_id =? , thongbaovipham_noidung=? WHERE thongbaovipham_id = ?"
    con.query(sql, [tindang_id, thongbaovipham_noidung, thongbaovipham_id], (err, res) => {
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

exports.delete = (tindang_id, result) => {
    // tinDang.push(moment.mysqlTimestamp);
    // tinDang.push(moment.mysqlTimestamp);

    const sql = "DELETE FROM tbl_thongbaovipham WHERE tingdang_id =?"
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