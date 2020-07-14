//declare con (conection database to do something)
const con = require("./db");

// module to do 
exports.getAdminById = (adminId, result) => {
    const sql = `SELECT * FROM admin where admin_id=${adminId}`;
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

exports.getByAdminUserNameAndPassWord = (userAdmin, result) => {
    const sql = "SELECT * FROM admin WHERE username=? ";
    con.query(sql, [userAdmin.username], (err, res) => {
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

exports.getRefreshTokenById = (admin_id, result) => {
    const sql = "SELECT refreshtoken FROM admin WHERE admin_id=?";
    con.query(sql, [admin_id], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {

            result(null, res);
        }
    })
}

exports.updateRefreshTokenAdmin = (refreshtoken, admin_id, result) => {
    const sql = "UPDATE admin SET refreshtoken = ? WHERE admin_id = ?";
    con.query(sql, [refreshtoken, admin_id], (err, res) => {
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

exports.updateAccessTokenAdmin = (accesstoken, admin_id, result) => {
    const sql = "UPDATE admin SET accesstoken = ? WHERE admin_id = ?";
    con.query(sql, [accesstoken, admin_id], (err, res) => {
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



exports.getAdmin = (result) => {
    const sql = "SELECT * FROM admin";
    con.query(sql, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        // console.log("admin :", res);
        result(null, res);
    })
    // const users = await db.query(sql);
}