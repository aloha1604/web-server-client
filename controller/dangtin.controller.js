const hinhAnhModel = require('../models/hinhAnh.model');
const dangTinModel = require('../models/dangtin.model');
const ThongBaoViPhamModel = require('../models/thongbaovipham.model');

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
    const user_id = req.body.user_id
    const dangTin_tieuDe = req.body.tieude;
    const dangtin_gia = req.body.gia;
    const tindang_tukhoa = req.body.tuKhoa;
    const tindang_tinhthanh = req.body.tinhThanh;
    const tindang_quanhuyen = req.body.quanHuyen;
    const tindang_phuongxa = req.body.phuongXa;
    const tindang_noidung = req.body.noiDung;
    const tindang_linkyoutube = req.body.linkYoutube ? req.body.linkYoutube : 'Không có link youtube';
    const tindang_hoten = req.body.hoTen;
    const tindang_email = req.body.email;
    const tindang_phone = req.body.phone;
    const tindang_diachi = req.body.diachi;
    const tindang_thoigianlienhe = req.body.thoiGianLienHe;
    const tindang_active = 0;
    const tindang_vipham = 0;

    const dataTinDang1 = [];
    dataTinDang1.push(nhom_id)
    dataTinDang1.push(user_id)
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

    console.log(dataTinDang1);

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

        console.log(req.files);
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

        console.log(dataHinhAnh);

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

            // res.json({ dataTin: data });
            let dataTin = [...data];
            hinhAnhModel.getHinhAnh((err, dataa) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {
                    let dataHinhAnh = [...dataa];
                    var hinhAnh = [];

                    let datanew = dataTin.map(tin => {
                        let copytin = { ...tin }
                        hinhAnh = [];
                        copytin.hinhanh = [];
                        copytin.hinhanh.length = 0;
                        hinhAnh.length = 0;
                        for (let i = 0; i < dataHinhAnh.length; i++) {
                            if (copytin.tindang_id === dataHinhAnh[i].tindang_id) {
                                hinhAnh.push(dataHinhAnh[i].hinhanh_ten)
                            }
                        }

                        copytin.hinhanh = [...hinhAnh];
                        return { ...copytin };
                    })

                    res.json({ dataTin: datanew });

                }
            })
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

            // res.json({ dataTin: data });
            let dataTin = [...data];
            hinhAnhModel.getHinhAnh((err, dataa) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {
                    let dataHinhAnh = [...dataa];
                    var hinhAnh = [];

                    let datanew = dataTin.map(tin => {
                        let copytin = { ...tin }
                        hinhAnh = [];
                        copytin.hinhanh = [];
                        copytin.hinhanh.length = 0;
                        hinhAnh.length = 0;
                        for (let i = 0; i < dataHinhAnh.length; i++) {
                            if (copytin.tindang_id === dataHinhAnh[i].tindang_id) {
                                hinhAnh.push(dataHinhAnh[i].hinhanh_ten)
                            }
                        }

                        copytin.hinhanh = [...hinhAnh];
                        return { ...copytin };
                    })

                    res.json({ dataTin: datanew });

                }
            })
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

            // res.json({ dataTin: data });
            let dataTin = [...data];
            hinhAnhModel.getHinhAnh((err, dataa) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {
                    let dataHinhAnh = [...dataa];
                    var hinhAnh = [];

                    let datanew = dataTin.map(tin => {
                        let copytin = { ...tin }
                        hinhAnh = [];
                        copytin.hinhanh = [];
                        copytin.hinhanh.length = 0;
                        hinhAnh.length = 0;
                        for (let i = 0; i < dataHinhAnh.length; i++) {
                            if (copytin.tindang_id === dataHinhAnh[i].tindang_id) {
                                hinhAnh.push(dataHinhAnh[i].hinhanh_ten)
                            }
                        }

                        copytin.hinhanh = [...hinhAnh];
                        return { ...copytin };
                    })

                    res.json({ dataTin: datanew });

                }
            })
        }
    })
}

exports.getOneTinByIdTinDang = (req, res) => {
    dangTinModel.getOneTinByIdTinDang((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            // res.json({ dataTin: data });
            let dataTin = [...data];
            hinhAnhModel.getHinhAnh((err, dataa) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {
                    let dataHinhAnh = [...dataa];
                    var hinhAnh = [];

                    let datanew = dataTin.map(tin => {
                        let copytin = { ...tin }
                        hinhAnh = [];
                        copytin.hinhanh = [];
                        copytin.hinhanh.length = 0;
                        hinhAnh.length = 0;
                        for (let i = 0; i < dataHinhAnh.length; i++) {
                            if (copytin.tindang_id === dataHinhAnh[i].tindang_id) {
                                hinhAnh.push(dataHinhAnh[i].hinhanh_ten)
                            }
                        }

                        copytin.hinhanh = [...hinhAnh];
                        return { ...copytin };
                    })

                    res.json({ dataTin: datanew });

                }
            })
        }
    })
}

exports.getTinMoi = (req, res) => {
    dangTinModel.getTinMoi((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            // res.json({ dataTin: data });
            let dataTin = [...data];
            hinhAnhModel.getHinhAnh((err, dataa) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {
                    let dataHinhAnh = [...dataa];
                    var hinhAnh = [];

                    let datanew = dataTin.map(tin => {
                        let copytin = { ...tin }
                        hinhAnh = [];
                        copytin.hinhanh = [];
                        copytin.hinhanh.length = 0;
                        hinhAnh.length = 0;
                        for (let i = 0; i < dataHinhAnh.length; i++) {
                            if (copytin.tindang_id === dataHinhAnh[i].tindang_id) {
                                hinhAnh.push(dataHinhAnh[i].hinhanh_ten)
                            }
                        }

                        copytin.hinhanh = [...hinhAnh];
                        return { ...copytin };
                    })

                    res.json({ dataTin: datanew });

                }
            })
        }
    })
}

exports.getTinByIdNhom = async (req, res) => {

    let currentPage = req.params.page ? req.params.page : 1;
    let nhom_id = req.params.nhom_id;

    let limit = 10;

    const getCountTinByIdNhom = (nhom_id) => {
        return new Promise((resolve, reject) => {
            dangTinModel.getCountTinByIdNhom(nhom_id, (err, data) => {
                if (err)
                    reject(err);
                else {
                    resolve(data);
                }
            })
        })
    }

    let total = await getCountTinByIdNhom(nhom_id);
    let totalPage = Math.ceil(total / limit);
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    else if (currentPage < 1) {
        currentPage = 1;
    }
    let start = (currentPage - 1) * limit;

    dangTinModel.getTinByIdNhom(nhom_id, start, limit, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            // res.json({ dataTin: data });
            let dataTin = [...data];
            hinhAnhModel.getHinhAnh((err, dataa) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {
                    let dataHinhAnh = [...dataa];
                    var hinhAnh = [];

                    let datanew = dataTin.map(tin => {
                        let copytin = { ...tin }
                        hinhAnh = [];
                        copytin.hinhanh = [];
                        copytin.hinhanh.length = 0;
                        hinhAnh.length = 0;
                        for (let i = 0; i < dataHinhAnh.length; i++) {
                            if (copytin.tindang_id === dataHinhAnh[i].tindang_id) {
                                hinhAnh.push(dataHinhAnh[i].hinhanh_ten)
                            }
                        }

                        copytin.hinhanh = [...hinhAnh];
                        return { ...copytin };
                    })

                    res.json({ dataTin: datanew });

                }
            })
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
    let thongBaoViPham_noidung = req.params.thongbaotinvipham_noidung;
    let tinDang_id = req.params.tindang_id;

    console.log(req.params.thongbaotinvipham_noidung);
    console.log(req.params.tindang_id);
    if (!tinDang_id && !thongBaoViPham_noidung) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id, noi dung' })
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

        const flagInsert = (tindang_id, thongBaoViPham_noidung) => {
            return new Promise((resolve, reject) => {
                ThongBaoViPhamModel.add(tindang_id, thongBaoViPham_noidung, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataThongBaoViPham = await flagInsert(tinDang_id, thongBaoViPham_noidung);
        var dataTinDang = await flagUpdate(tinDang_id);

        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0 && dataThongBaoViPham.affectedRows > 0) {
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
    console.log(req.params.tindang_id)

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

exports.deleteTinDangViPham = async (req, res) => {
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

        const flagdelete1 = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                ThongBaoViPhamModel.delete(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataThongBao = await flagdelete1(tinDang_id)

        var dataTinDang = await flagdelete(tinDang_id);

        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0 && dataThongBao.affectedRows > 0) {
            return res.status(200).json({ message: 'Xóa tin thành công !!' })
        } else {
            return res.status(200).json({ error: 'Xóa tin thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}