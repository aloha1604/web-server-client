//require model

const nhomModel = require('../models/nhom.model');

//http://localhost:5000/api.../getAllNhomByIdDanhMuc/:danhmuc_id/
exports.getAllNhomByIdDanhMuc = (req, res) => {
    let danhMuc_id = req.params.danhmuc_id;
    if (!danhMuc_id) {
        return res.status(200).json({ error: 'Không tìm thấy danhmuc_id' })
    }

    nhomModel.getAllNhomByIdDanhMuc(danhMuc_id, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Lấy nhóm theo id danh mục không thành công!!"
            });
        } else {
            res.json({ dataDanhMuc: data });
        }
    })

}

exports.addDanhMuc = async (req, res) => {
    let danhMuc_ten = req.body.danhmuc_ten;
    // console.log(req.body.danhmuc_ten);
    if (!danhMuc_ten) {
        return res.status(200).json({ error: 'Không tìm thấy danhmuc_ten' })
    }

    try {
        const flagAdd = (danhMuc_ten) => {
            return new Promise((resolve, reject) => {
                danhMucModel.add(danhMuc_ten, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataDanhMuc = await flagAdd(danhMuc_ten);
        // console.log(dataDanhMuc)
        if (dataDanhMuc.affectedRows > 0) {
            return res.status(200).json({ message: 'Thêm danh mục thành công !!' })
        } else {
            return res.status(200).json({ error: 'Thêm danh vào mục vào dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

//http://localhost:5000/api.../updateDanhMuc/:id/:danhmuc_ten
exports.updateDanhMuc = async (req, res) => {
    let danhMuc_ten = req.params.danhmuc_ten;
    let danhMuc_id = req.params.id;

    console.log(req.body.danhmuc_ten);
    console.log(req.body.id);

    if (!danhMuc_ten && !danhMuc_id) {
        return res.status(200).json({ error: 'Không tìm thấy danhmuc_ten hoặc id' })
    }

    try {
        const flagUpdate = (danhMuc_id, danhMuc_ten) => {
            return new Promise((resolve, reject) => {
                danhMucModel.update(danhMuc_id, danhMuc_ten, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataDanhMuc = await flagUpdate(danhMuc_id, danhMuc_ten);
        // console.log(dataDanhMuc)
        if (dataDanhMuc.affectedRows > 0) {
            return res.status(200).json({ message: 'Sữa danh mục thành công !!' })
        } else {
            return res.status(200).json({ error: 'Sữa danh vào mục vào dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

//http://localhost:5000/api.../deleteDanhMuc/:id/
exports.deleteDanhMuc = async (req, res) => {
    let danhMuc_id = req.params.id;
    console.log(req.body.id);

    if (!danhMuc_id) {
        return res.status(200).json({ error: 'Không tìm thấy id' })
    }

    try {
        const flagUpdate = (danhMuc_id) => {
            return new Promise((resolve, reject) => {
                danhMucModel.delete(danhMuc_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataDanhMuc = await flagUpdate(danhMuc_id);
        // console.log(dataDanhMuc)
        if (dataDanhMuc.affectedRows > 0) {
            return res.status(200).json({ message: 'Xóa danh mục thành công !!' })
        } else {
            return res.status(200).json({ error: 'Xóa danh mục trong  dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}