const con = require("./db");

// module to do 
// insert User
exports.insert = (mail, password, result) => {
    const sql = "INSERT INTO user (email,password) VALUES (?,?)"
    con.query(sql, [mail, password], (err, res) => {
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
//  lấy ra get aLL usser điều kiện là email để xác nhận có tồn tại hay chưa
exports.getEmail = (email, result) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    con.query(sql, [email], (err, res) => {
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

//update accesstoken and refreshtoken
exports.updateRefreshTokenUser = (refreshtoken, user_id, result) => {
    const sql = "UPDATE user SET refreshtoken = ? WHERE user_id = ?";
    con.query(sql, [refreshtoken, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log('update RefreshToken success');
            result(null, res);
        }
    })
}

exports.updateAccessTokenUser = (accesstoken, user_id, result) => {
    const sql = "UPDATE user SET accesstoken = ? WHERE user_id = ?";
    con.query(sql, [accesstoken, user_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log('update AccessToken success');
            result(null, res);
        }
    })
}

