//require model

const danhMucModel = require('../models/danhMuc.model');

exports.getAllDanhMuc = (req, res) => {

    danhMucModel.getAllDanhMuc((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "lỗi get all danh mục"
            });
        } else {
            res.json({ dataDanhMuc: data });
        }
    })

}

exports.addDanhMuc = async (req, res) => {
    let danhMuc_ten = req.body.danhmuc_ten;
    console.log(req.body.danhmuc_ten);
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