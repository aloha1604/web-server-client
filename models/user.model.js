const con = require("./db");
const moment = require('../lib/moment.lib');

// module to do 
// insert User

exports.insert = (email, password, result) => {
    const sql = "INSERT INTO user (email, password) VALUES (?,?)";
    con.query(sql, [email, password], (err, res) => {
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
    const sql = "SELECT dongrao from user WHERE user_id =?";
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
