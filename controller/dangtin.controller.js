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
    const dangTin_tieuDe = req.body.dangtin_tieude;
    const nhom_id = req.body.nhom_id;
    const dataTinDang1 = [];
    dataTinDang1.push(nhom_id)
    dataTinDang1.push(dangTin_tieuDe)

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

        var dataDangTin = await flagInsert(dataTinDang1);
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
