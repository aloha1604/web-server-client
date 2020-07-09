//require model

const danhMucModel = require('../models/danhMuc.model');

exports.getAllDanhMuc = (req, res) => {

    danhMucModel.getAllDanhMuc((err, data) => {
        if (err) {
            return res.status(200).json({ error: 'Không thể get all data danh mục!!' })
        } else {
            return res.json({ dataDanhMuc: data });
        }
    })

}
//http://localhost:5000/api.../addDanhMuc/ body:danhmuc_ten
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

//http://localhost:5000/api.../updateDanhMuc/:danhmuc_id/:danhmuc_ten
exports.updateDanhMuc = async (req, res) => {
    let danhMuc_ten = req.params.danhmuc_ten;
    let danhMuc_id = req.params.danhmuc_id;

    console.log(req.body.danhmuc_ten);
    console.log(req.body.danhmuc_id);

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

//http://localhost:5000/api.../deleteDanhMuc/:danhmuc_id/
exports.deleteDanhMuc = async (req, res) => {
    let danhMuc_id = req.params.danhmuc_id;
    console.log(req.params.danhmuc_id);

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