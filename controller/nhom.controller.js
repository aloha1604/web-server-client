//require model

const nhomModel = require('../models/nhom.model');

// GET :http://localhost:5000/api.../getAllNhomByIdDanhMuc/:danhmuc_id/
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
//POST : http://localhost:5000/api.../addNhomByIdDanhMuc {body:danhmuc_id ,nhom_ten}
exports.addNhomByIdDanhMuc = async (req, res) => {
    let nhom_ten = req.body.nhom_ten;
    let danhMuc_id = req.body.danhmuc_id;

    // console.log(req.body.danhmuc_ten);
    if (!nhom_ten && !danhMuc_id) {
        return res.status(200).json({ error: 'Không tìm thấy nhom_ten hoặc danhmuc_id' })
    }

    try {
        const flagAdd = (danhMuc_id, nhom_ten) => {
            return new Promise((resolve, reject) => {
                nhomModel.addNhomByIdDanhMuc(danhMuc_id, nhom_ten, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataNhom = await flagAdd(danhMuc_id, nhom_ten);
        // console.log(dataDanhMuc)
        if (dataNhom.affectedRows > 0) {
            return res.status(200).json({ message: 'Thêm nhóm theo danh mục id thành công !!' })
        } else {
            return res.status(200).json({ error: 'Thêm nhóm theo danh muc id vào mục vào dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

//http://localhost:5000/api.../updateNhomByIdNhom/:id/:nhom_ten
exports.updateNhomByIdNhom = async (req, res) => {
    let nhom_ten = req.params.nhom_ten;
    let nhom_id = req.params.id;

    // console.log(req.params.nhom_ten);
    // console.log(req.params.id);

    if (!nhom_ten && !nhom_id) {
        return res.status(200).json({ error: 'Không tìm thấy nhom_ten hoặc id' })
    }

    try {
        const flagUpdate = (nhom_id, nhom_ten) => {
            return new Promise((resolve, reject) => {
                nhomModel.updateNhomByIdNhom(nhom_id, nhom_ten, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataNhom = await flagUpdate(nhom_id, nhom_ten);
        // console.log(dataDanhMuc)
        if (dataNhom.affectedRows > 0) {
            return res.status(200).json({ message: 'Sữa nhóm thành công !!' })
        } else {
            return res.status(200).json({ error: 'Sữa nhóm vào mục vào dtb thất bại!!' })
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