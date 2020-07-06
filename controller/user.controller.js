//declare model
const userModel = require('../models/user.model');

//controller module
// GET :http://localhost:5000/api.../getAllUser
exports.getAllUser = (req, res) => {
    userModel.getAllUser((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lỗi get all user"
            });
        } else {
            res.json({ dataUser: data });
        }
    })
}

// baoCaoViPhamUser
// PUT :http://localhost:5000/api.../baoCaoViPhamUser/:id
exports.baoCaoViPhamUser = async (req, res) => {

    let user_id = req.params.id;

    // console.log(req.params.id);

    if (!user_id) {
        return res.status(200).json({ error: 'Không tìm thấy id user' })
    }

    try {
        const flagUpdate = (user_id) => {
            return new Promise((resolve, reject) => {
                userModel.baoCaoViPhamUser(user_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataUser = await flagUpdate(user_id);
        // console.log(dataDanhMuc)
        if (dataUser.affectedRows > 0) {
            return res.status(200).json({ message: ' Đưa user vào danh sách vi phạm thành công !!' })
        } else {
            return res.status(200).json({ error: 'Đưa user vào danh sách vi phạm thành công dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}
// baoCaoHetViPhamUser
// PUT :http://localhost:5000/api.../baoCaoHetViPhamUser/:id
exports.baoCaoHetViPhamUser = async (req, res) => {
    let user_id = req.params.id;

    // console.log(req.params.id);

    if (!user_id) {
        return res.status(200).json({ error: 'Không tìm thấy id user' })
    }

    try {
        const flagUpdate = (user_id) => {
            return new Promise((resolve, reject) => {
                userModel.baoCaoHetViPhamUser(user_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataUser = await flagUpdate(user_id);
        // console.log(dataDanhMuc)
        if (dataUser.affectedRows > 0) {
            return res.status(200).json({ message: ' Đưa user ra khỏi danh sách vi phạm thành công !!' })
        } else {
            return res.status(200).json({ error: 'Đưa user ra khỏi danh sách vi phạm thành công dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}


//module test
exports.test = (req, res) => {
    res.send(process.env.VIETNAM);
}