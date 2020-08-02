//declare model
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//controller module
// GET :http://localhost:5000/api.../getAllUser
exports.getAllUser = (req, res) => {
    userModel.getAllUser((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lỗi get all user active!!"
            });
        } else {
            res.json({ dataUser: data });
        }
    })
}

//controller module
// GET :http://localhost:5000/api.../getAllUserChuaActive
exports.getAllUserChuaActive = (req, res) => {
    userModel.getAllUserChuaActive((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lỗi get all user chưa active!!"
            });
        } else {
            res.json({ dataUser: data });
        }
    })
}

// GET :http://localhost:5000/api.../getAllUserViPham
exports.getAllUserViPham = (req, res) => {
    userModel.getAllUserViPham((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lỗi get all user Vi phạm!!"
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

// getCountTinMienPhiAndDongRao
exports.getCountTinMienPhiAndDongRao = async (req, res) => {
    const user_id = req.params.user_id;

    userModel.getCountTinMienPhiAndDongRao(user_id, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lỗi get all user active!!"
            });
        } else {
            res.json({ data: data });
        }
    })
}

// get Thong tin user
exports.getThongTinUserByIdUser = (req, res) => {
    const user_id = req.params.user_id;

    if (!user_id) {
        return res.status(200).json({ error: 'Không tìm thấy id user' })
    }

    userModel.getThongTinUserByIdUser(user_id, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lỗi get thông tin user!!"
            });
        } else {
            res.json({ dataUser: data });
        }
    })
}

//update Thong tin user
exports.updateThongTinUserByIdUser = async (req, res) => {

    const user_id = req.body.user_id
    const hoten = req.body.hoTen;
    const phone = req.body.phone;
    const diachi = req.body.diachi;
    const ngaysinh = req.body.ngaysinh;
    const gioitinh = req.body.gioitinh;
    const cmnd = req.body.cmnd;
    const ngaycap = req.body.ngaycap;
    const noicap = req.body.noicap;

    // console.log(req.params.id);
    if (!user_id) {
        return res.status(200).json({ error: 'Không tìm thấy id user' })
    }

    try {
        const flagUpdate = (user_id, hoten, phone, diachi, ngaysinh, gioitinh, cmnd, ngaycap, noicap) => {
            return new Promise((resolve, reject) => {
                userModel.updateThongTinUserByIdUser(user_id, hoten, phone, diachi, ngaysinh, gioitinh, cmnd, ngaycap, noicap, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataUser = await flagUpdate(user_id, hoten, phone, diachi, ngaysinh, gioitinh, cmnd, ngaycap, noicap);
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

exports.doiMatKhauUser = async (req, res) => {
    // get data
    const user_id = req.body.user_id
    const matkhaucu = req.body.matkhaucu;
    const matkhaumoi = req.body.matkhaumoi;
    console.log(user_id)
    console.log(matkhaucu)
    console.log(matkhaumoi)

    if (!user_id) {
        return res.status(200).json({ error: 'Không tìm thấy id user' })
    }
    if (!matkhaucu) {
        return res.status(200).json({ error: 'Không tìm thấy matkhaucu' })
    }
    if (!matkhaumoi) {
        return res.status(200).json({ error: 'Không tìm thấy matkhaumoi' })
    }
    // get data user để so sánh mật khẩu
    try {
        const getPassword = (user_id) => {
            return new Promise((resolve, reject) => {
                userModel.getPassword(user_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        var dataUser = await getPassword(user_id);
        console.log(dataUser)
        if (dataUser.length > 0) {
            const flagHash = bcrypt.compareSync(matkhaucu, dataUser[0].password);
            if (flagHash) {
                // mã hóa mk mới
                const hash = bcrypt.hashSync(matkhaumoi, saltRounds);
                // promise update
                const flagUpdate = (user_id, hash) => {
                    return new Promise((resolve, reject) => {
                        userModel.userResetPasswordByid(user_id, hash, (err, data) => {
                            if (err)
                                reject(err);
                            else {
                                resolve(data);
                            }
                        })
                    })
                }
                var dataUpdateUser = await flagUpdate(user_id, hash);
                // console.log(dataDanhMuc)
                if (dataUpdateUser.affectedRows > 0) {
                    return res.status(200).json({ message: ' đổi mật khẩu thành công !!' })
                } else {
                    return res.status(200).json({ error: 'Đổi mật khẩu thất bại!!' })
                }
            }
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

//module test
exports.test = (req, res) => {
    res.send(process.env.VIETNAM);
}