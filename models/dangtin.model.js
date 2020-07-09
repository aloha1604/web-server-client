const con = require("./db");
const moment = require('../lib/moment.lib');
// 17 muc can them
exports.add = (tinDang, result) => {
    // const data = tinDang.push(moment.mysqlTimestamp);
    // data = tinDang.push(moment.mysqlTimestamp);?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?:,tindang_gia,tindang_tukhoa,tindang_tinhthanh,tindang_quanhuyen,tindang_phuongxa,tindang_noidung,tindang_linkyoutube,tindang_hoten,tindang_phone,tindang_email,tindang_diachi,tindang_thoigianlienhe,tindang_active,tindang_vipham,create_at,update_at
    const sql = "INSERT INTO tbl_tindang (nhom_id,tindang_tieude) VALUES (?,?)"
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