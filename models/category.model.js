//declare con (conection database to do something)
const con = require("./db");
const moment = require('../lib/moment.lib');

exports.getAll = (result) => {
    sql = "SELECT * FROM category";
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

exports.insert = (categoryName, result) => {
    sql = "INSERT INTO category(category_name,create_at,update_at) VALUES (?,?,?)";
    con.query(sql, [categoryName, moment.mysqlTimestamp, moment.mysqlTimestamp], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, true)
        }
    })
}

exports.update = (category, result) => {
    sql = "UPDATE category SET category_name=?,update_at =? WHERE category_id = ?";
    con.query(sql, [category.categoryName, moment.mysqlTimestamp, category.categoryId,], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            if (res.changedRows > 0) {
                result(null, true);
            } else {
                result(null, false);
            }

        }
    })
}

exports.delete = (categoryId, result) => {
    sql = "DELETE FROM category where category_id = ?";
    con.query(sql, [categoryId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            if (res.affectedRows > 0) {
                result(null, true)
            } else {
                result(null, false)
            }

        }
    })
}

exports.findOneById = (categoryId, result) => {
    sql = "SELECT * FROM category where category_id = ?";
    con.query(sql, [categoryId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            result(null, res);

        }
    })
}