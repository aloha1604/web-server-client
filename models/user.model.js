const con = require("./db");
const moment = require('../lib/moment.lib');

// module to do 
// insert User

exports.insert = (email, password, result) => {
    const sql = "INSERT INTO user (email, password,create_at) VALUES (?,?,?)";
    con.query(sql, [email, password, moment.mysqlTimestamp], (err, res) => {
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

//  lấy ra get aLL usser điều kiện là email để xác nhận có tồn tại hay chưa
exports.getEmail = (email, result) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    con.query(sql, [email], (err, res) => {
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
// update active tài khoản
exports.updateActiveUser = (user_id, result) => {
    const sql = "UPDATE user SET active=?,update_at=? WHERE user_id = ?";
    con.query(sql, [1, moment.mysqlTimestamp, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log('update active tài khoản');
            result(null, res);
        }
    })
}
// reset Password
exports.userResetPassword = (email, new_password, result) => {
    const sql = "UPDATE user SET password=?,update_at=? WHERE email = ?";
    con.query(sql, [new_password, moment.mysqlTimestamp, email], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log('reset password tài khoản');
            result(null, res);
        }
    })
}

//update accesstoken and refreshtoken
exports.updateRefreshTokenUser = (refreshtoken, user_id, result) => {
    const sql = "UPDATE user SET refreshtoken = ? ,update_at=? WHERE user_id = ?";
    con.query(sql, [refreshtoken, moment.mysqlTimestamp, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log('update RefreshToken success');
            result(null, res);
        }
    })
}

exports.updateAccessTokenUser = (accesstoken, user_id, result) => {
    const sql = "UPDATE user SET accesstoken = ?,update_at=? WHERE user_id = ?";
    con.query(sql, [accesstoken, moment.mysqlTimestamp, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            // console.log('update AccessToken success');
            result(null, res);
        }
    })
}

// get user_id,email,active,vipham,create_at,update_at,hinhanh,hoten,phone,diachi,ngaysinh,tinhthanh,quanhuyen,phuongxa,gioitinh,cmnd,ngaycap,noicap
exports.getAllUser = (result) => {
    const sql = "SELECT user_id,email,active,vipham,create_at,update_at,hinhanh,hoten,phone,diachi,ngaysinh,tinhthanh,quanhuyen,phuongxa,gioitinh,cmnd,ngaycap,noicap FROM user WHERE active=? AND vipham=?"
    con.query(sql, [1, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {

            result(null, res);
        }
    })
}

// get user_id,email,active,vipham,create_at,update_at,hinhanh,hoten,phone,diachi,ngaysinh,tinhthanh,quanhuyen,phuongxa,gioitinh,cmnd,ngaycap,noicap
exports.getAllUserChuaActive = (result) => {
    const sql = "SELECT user_id,email,active,vipham,create_at,update_at,hinhanh,hoten,phone,diachi,ngaysinh,tinhthanh,quanhuyen,phuongxa,gioitinh,cmnd,ngaycap,noicap FROM user WHERE active=? AND vipham=?"
    con.query(sql, [0, 0], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {

            result(null, res);
        }
    })
}

// get user_id,email,active,vipham,create_at,update_at,hinhanh,hoten,phone,diachi,ngaysinh,tinhthanh,quanhuyen,phuongxa,gioitinh,cmnd,ngaycap,noicap
exports.getAllUserViPham = (result) => {
    const sql = "SELECT user_id,email,active,vipham,create_at,update_at,hinhanh,hoten,phone,diachi,ngaysinh,tinhthanh,quanhuyen,phuongxa,gioitinh,cmnd,ngaycap,noicap FROM user WHERE active=? AND vipham=?"
    con.query(sql, [1, 1], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log('get All user');
            result(null, res);
        }
    })
}

exports.baoCaoViPhamUser = (user_id, result) => {
    const sql = "UPDATE user set vipham = ? WHERE user_id = ?"
    con.query(sql, [1, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {

            result(null, res);
        }
    })
}

exports.baoCaoHetViPhamUser = (user_id, result) => {
    const sql = "UPDATE user set vipham = ? WHERE user_id = ?"
    con.query(sql, [0, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {

            result(null, res);
        }
    })
}

// dong rao
exports.getDongRaoByIdUser = (user_id, result) => {
    const sql = "SELECT dongrao,email from user WHERE user_id =?";
    con.query(sql, [user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}

// dong rao
exports.updateDongRaoByIdUser = (user_id, newDongRao, result) => {
    const sql = "UPDATE user set dongrao =? WHERE user_id =?";
    con.query(sql, [newDongRao, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}
// get dong rao and tin co phi
exports.getCountTinMienPhiAndDongRao = (user_id, result) => {
    const sql = "SELECT tinmienphi,dongrao FROM user WHERE user_id = ?";
    con.query(sql, [user_id], (err, res) => {
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

// update count tinmienphi
exports.updateCountTinMienPhiByIdUser = (user_id, newtinmienphi, result) => {
    const sql = "UPDATE user set tinmienphi =? WHERE user_id =?";
    con.query(sql, [newtinmienphi, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}

// get thông tin user 
exports.getThongTinUserByIdUser = (user_id, result) => {
    const sql = "SELECT email,active,tinmienphi,dongrao,create_at,hoten,phone,diachi,ngaysinh,gioitinh,ngaycap,cmnd,noicap FROM user WHERE user_id = ? ";
    con.query(sql, [user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}

// update thông tin user 
exports.updateThongTinUserByIdUser = (user_id, hoten, phone, diachi, ngaysinh, gioitinh, cmnd, ngaycap, noicap, result) => {
    let sql = "UPDATE user set ";
    if (hoten) {
        sql = sql + ' ' + `hoten = '${hoten}'`
    }
    if (phone) {
        sql = sql + ' ,' + `phone = '${phone}'`
    }
    if (diachi) {
        sql = sql + ', ' + `diachi = '${diachi}'`
    }
    if (ngaysinh) {
        sql = sql + ' ,' + `ngaysinh = '${ngaysinh}'`
    }
    if (gioitinh) {
        sql = sql + ', ' + `gioitinh = ${gioitinh}`
    }
    if (cmnd) {
        sql = sql + ', ' + `cmnd = '${cmnd}'`
    }
    if (ngaycap) {
        sql = sql + ', ' + `ngaycap = '${ngaycap}'`
    }
    if (noicap) {
        sql = sql + ', ' + `noicap = '${noicap}'`
    }
    if (user_id) {
        sql = sql + ' ' + `WHERE user_id = ${user_id}`
    }
    // let sql1 = "UPDATE user set hoten =?,phone=?,diachi=?,ngaysinh=?,gioitinh=?,cmnd=?,ngaycap=?,noicap=? WHERE user_id =? ";
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
