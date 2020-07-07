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
            return res.status(200).json({ error: 'Không thể get all data nhom by danh muc id !!' })
        } else {
            res.json({ dataNhom: data });
        }
    })

}

// GET :http://localhost:5000/api.../getAllNhom
exports.getAllNhom = (req, res) => {


    nhomModel.getAllNhom((err, data) => {
        if (err) {
            return res.status(200).json({ error: 'Không thể get all data nhom  !!' })
        } else {
            // let data1 = data.map(function (item) {
            //     var arr = [];
            //     arr.push({ danhmuc_id: item.danhmuc_ten });
            //     arr.push({ nhom_id: item.nhom_id });
            //     arr.push({ nhom_ten: item.nhom_ten });
            //     return arr;
            // })

            res.json({ dataNhom: data });
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

//http://localhost:5000/api.../deleteNhomByIdNhom/:id/
exports.deleteNhomByIdNhom = async (req, res) => {
    let nhom_id = req.params.id;
    // console.log(req.params.id);

    if (!nhom_id) {
        return res.status(200).json({ error: 'Không tìm thấy id' })
    }

    try {
        const flagdelete = (nhom_id) => {
            return new Promise((resolve, reject) => {
                nhomModel.deleteNhomByIdNhom(nhom_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataNhom = await flagdelete(nhom_id);
        // console.log(dataDanhMuc)
        if (dataNhom.affectedRows > 0) {
            return res.status(200).json({ message: 'Xóa danh nhóm thành công !!' })
        } else {
            return res.status(200).json({ error: 'Xóa danh nhóm trong  dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}