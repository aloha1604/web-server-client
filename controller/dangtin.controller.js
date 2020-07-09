const hinhAnhModel = require('../models/hinhAnh.model');
const dangTinModel = require('../models/dangtin.model');

// dang tin
exports.insertHinhAnh = (req, res, next) => {
    const reqFiles = [];
    // console.log(req.files);
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push([url + '/public/' + req.files[i].filename])
    }
    // console.log('da vao toi inserhinhanh')
    // console.log(reqFiles)

    hinhAnhModel.insertHinhAnh(reqFiles, (err, data) => {
        if (err)
            return res.status(200).json({
                error: 'khong the luu'
            })
        else res.send('da luu thanh cong');

    })

}

//gethinhanh
exports.getHinhAnh = (req, res, next) => {
    hinhAnhModel.getHinhAnh((err, data) => {
        if (err)
            return res.status(200).json({
                error: 'khong the lay ra danh sach iamge'
            })
        else res.send(data);

    })
};

// post : dangtin body: tindang_
exports.dangTin = async (req, res) => {
    //get du lieu
    const nhom_id = req.body.nhom_id;
    const dangTin_tieuDe = req.body.dangtin_tieude;
    const dangtin_gia = req.body.dangtin_gia;
    const tindang_tukhoa = req.body.tindang_tukhoa;
    const tindang_tinhthanh = req.body.tindang_tinhthanh;
    const tindang_quanhuyen = req.body.tindang_quanhuyen;
    const tindang_phuongxa = req.body.tindang_phuongxa;
    const tindang_noidung = req.body.tindang_noidung;
    const tindang_linkyoutube = req.body.tindang_linkyoutube;
    const tindang_hoten = req.body.tindang_hoten;
    const tindang_email = req.body.tindang_email;
    const tindang_phone = req.body.tindang_phone;
    const tindang_diachi = req.body.tindang_diachi;
    const tindang_thoigianlienhe = req.body.tindang_thoigianlienhe;
    const tindang_active = 0;
    const tindang_vipham = 0;

    const dataTinDang1 = [];
    dataTinDang1.push(nhom_id)
    dataTinDang1.push(dangTin_tieuDe)
    dataTinDang1.push(dangtin_gia)
    dataTinDang1.push(tindang_tukhoa)
    dataTinDang1.push(tindang_tinhthanh)
    dataTinDang1.push(tindang_quanhuyen)
    dataTinDang1.push(tindang_phuongxa)
    dataTinDang1.push(tindang_noidung)
    dataTinDang1.push(tindang_linkyoutube)
    dataTinDang1.push(tindang_hoten)
    dataTinDang1.push(tindang_email)
    dataTinDang1.push(tindang_phone)
    dataTinDang1.push(tindang_diachi)
    dataTinDang1.push(tindang_thoigianlienhe)
    dataTinDang1.push(tindang_active)
    dataTinDang1.push(tindang_vipham)


    try {
        const flagInsert = (data) => {
            return new Promise((resolve, reject) => {
                dangTinModel.add(data, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataDangTin = await flagInsert(dataTinDang1);

        console.log(dataDangTin.insertId);
        // xử lý hình ảnh
        const reqFiles = [];
        const url = req.protocol + '://' + req.get('host')
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push([dataDangTin.insertId, url + '/public/' + req.files[i].filename])
        }


        const flagInsertHinhAnhByIdTin = (data) => {
            return new Promise((resolve, reject) => {
                hinhAnhModel.insertHinhAnhByIdTin(data, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }


        var dataHinhAnh = await flagInsertHinhAnhByIdTin(reqFiles);


        if (dataDangTin.affectedRows > 0 && dataHinhAnh.affectedRows > 0) {
            return res.status(200).json({ message: 'Đăng tin thành công !!', data: dataDangTin.insertId })
        } else {
            return res.status(200).json({ error: 'thêm tin vào dtb thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }

    // insert vao database

}


exports.getAllTinChoDuyet = (req, res) => {
    dangTinModel.getAllTinChoDuyet((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {
            res.json({ dataTin: data });
        }
    })
}

exports.getAllTinViPham = (req, res) => {
    dangTinModel.getAllTinViPham((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {
            res.json({ dataTin: data });
        }
    })
}

exports.getAllTinDaDuyet = (req, res) => {
    dangTinModel.getAllTinDaDuyet((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {
            res.json({ dataTin: data });
        }
    })
}

exports.updateTinDangActive = async (req, res) => {
    let tinDang_id = req.params.tindang_id;

    if (!tinDang_id) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id' })
    }

    try {
        const flagUpdate = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.updateTinDangActive(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataTinDang = await flagUpdate(tinDang_id);
        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0) {
            return res.status(200).json({ message: 'Duyệt tin chờ đăng thành công !!' })
        } else {
            return res.status(200).json({ error: 'Duyệt tin chờ đăng thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updateTinDangViPham = async (req, res) => {
    let tinDang_id = req.params.tindang_id;

    if (!tinDang_id) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id' })
    }

    try {
        const flagUpdate = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.updateTinDangViPham(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataTinDang = await flagUpdate(tinDang_id);
        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0) {
            return res.status(200).json({ message: 'Đã đưa tin vào tin vi phạm  !!' })
        } else {
            return res.status(200).json({ error: 'Không thể đưa vào tin vi phạm!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}
exports.updateTinDangActive = async (req, res) => {
    let tinDang_id = req.params.tindang_id;

    if (!tinDang_id) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id' })
    }

    try {
        const flagUpdate = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.updateTinDangActive(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataTinDang = await flagUpdate(tinDang_id);
        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0) {
            return res.status(200).json({ message: 'Duyệt tin chờ đăng thành công !!' })
        } else {
            return res.status(200).json({ error: 'Duyệt tin chờ đăng thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deleteTinDang = async (req, res) => {
    let tinDang_id = req.params.tindang_id;

    if (!tinDang_id) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id' })
    }

    try {
        const flagdelete = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.deleteTinDang(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataTinDang = await flagdelete(tinDang_id);
        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0) {
            return res.status(200).json({ message: 'Xóa tin thành công !!' })
        } else {
            return res.status(200).json({ error: 'Xóa tin thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}