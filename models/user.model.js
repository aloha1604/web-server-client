const con = require("./db");

// module to do 
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

exports.getEmail = (email, result) => {
    const sql = "SELECT email FROM user WHERE email = ?";
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