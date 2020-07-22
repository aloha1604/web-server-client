const con = require("./db");
const moment = require('../lib/moment.lib');

exports.insert = (user_id, noidung, result) => {
    const sql = "INSERT INTO tbl_giaodich (user_id, giaodich_noidung,create_at) VALUES (?,?,?)";
    con.query(sql, [user_id, noidung, moment.mysqlTimestamp], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log('lấy ra all user get all user');
            result(null, res);
        }
    })
}