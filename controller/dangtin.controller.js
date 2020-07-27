const hinhAnhModel = require('../models/hinhAnh.model');
const dangTinModel = require('../models/dangtin.model');
const ThongBaoViPhamModel = require('../models/thongbaovipham.model');
const tinhToanDongRao = require('../helpers/tinhToanDongRao');
const tinhToanTinMienPhi = require('../helpers/tinhToanTinMienPhi');
const userModel = require('../models/user.model')
const kiemTraTinUuTien = require('../helpers/kiemTraTinUuTien');


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
    const tinhPhiTin = req.body.tinhPhiTin;

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
    parseInt(tinhPhiTin) === 0 ? dataTinDang1.push(0) : dataTinDang1.push(1);


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
        // update tinh phi tin
        // user_idd, dataGiaDongRao0, noiDungGiaoDichh, tuychon
        let noiDungGiaoDichh = tinhPhiTin === parseInt(0) ? 'Đăng tinh miễn phí!!' : 'Dăng tin có tính phí!!!';
        tinhToanDongRao.xuLyDongRao(user_id, tinhPhiTin, noiDungGiaoDichh, 1)
        // update count tinmienphi
        tinhToanTinMienPhi.tinhToanTinMienPhi(user_id, 0)


        if (dataDangTin.affectedRows > 0 && dataHinhAnh.affectedRows > 0) {
            console.log('Đăng tin thành công !!')
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

exports.getAllTinChoDuyetByIdUser = (req, res) => {
    let user_id = req.params.user_id;
    dangTinModel.getAllTinChoDuyetByIdUser(user_id, (err, data) => {
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

exports.getAllTinViPhamByIdUser = (req, res) => {
    let user_id = req.params.user_id;
    dangTinModel.getAllTinViPhamByIdUser(user_id, (err, data) => {
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

exports.getAllTinDaDuyetByIdUser = (req, res) => {
    let user_id = req.params.user_id;
    dangTinModel.getAllTinUuTienById(user_id, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            // res.json({ dataTin: data });
            let dataTin1 = [...data];
            for (let i = 0; i < dataTin1.length; i++) {
                // console.log(dataTin1[i])
                kiemTraTinUuTien.kiemTraTinUutien(dataTin1[i].tindang_id, dataTin1[i].tindang_thoigianuutien);
            }
            // console.log(dataTin1.length)

            // get lai data
            dangTinModel.getAllTinDaDuyetByIdUser(user_id, (err, data) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                } else {

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
            // 

        }
    })
}

exports.getOneTinByIdTinDang = (req, res) => {
    let tindang_id = req.params.tindang_id;

    dangTinModel.getOneTinByIdTinDang(tindang_id, (err, data) => {
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

exports.getTinUuTienByIdNhom = async (req, res) => {

    // get nhom_id o params
    let nhom_id = req.params.nhom_id;

    //get tin uu tien by id nhom
    dangTinModel.getAllTinUuTienByIdNhom(nhom_id, async (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some loi get tin Uu tien by nhom _id."
            });
        } else {
            //get data tin kiem tra tin lan 1
            let dataTin1 = [...data];
            for (let i = 0; i < dataTin1.length; i++) {
                // console.log(dataTin1[i])
                kiemTraTinUuTien.kiemTraTinUutien(dataTin1[i].tindang_id, dataTin1[i].tindang_thoigianuutien);
            }

            //get data tat ca tin va phan trang


            //get data tin uu tien lan 2 sau khi kiem tra tin uu tien xong
            const getAllTinUuTienByIDNhom1 = (nhom_id) => {
                return new Promise((resolve, reject) => {
                    dangTinModel.getAllTinUuTienByIdNhom(nhom_id, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            resolve(data);
                        }
                    })
                })
            }

            const dataGetAllTinUuTienByIDNhom1 = await getAllTinUuTienByIDNhom1(nhom_id);
            let arrRandom = [];
            // res.json({ dataTin: data });
            let dataTin = [];
            console.log(dataGetAllTinUuTienByIDNhom1.length)
            while (arrRandom.length <= 4 && arrRandom.length < dataGetAllTinUuTienByIDNhom1.length) {
                let random = Math.floor(Math.random() * dataGetAllTinUuTienByIDNhom1.length);
                if (arrRandom.length === 0) {
                    arrRandom.push(random)
                } else {
                    if (!arrRandom.includes(random)) {
                        arrRandom.push(random)
                    }
                }
            }

            for (let i = 0; i < arrRandom.length; i++) {
                let vitri = arrRandom[i];
                dataTin.push(dataGetAllTinUuTienByIDNhom1[vitri]);
            }


            // sort hinh anh của tin
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

    // console.log(req.params.thongbaotinvipham_noidung);
    // console.log(req.params.tindang_id);
    if (!tinDang_id && !thongBaoViPham_noidung) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id, noi dung' })
    }

    try {
        //get user_id ,tincomienphi hay khong
        const flagGetOneTinByIdTinDang = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.getOneTinByIdTinDang(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        const dataFlagGetOneTinByIdTinDang = await flagGetOneTinByIdTinDang(tinDang_id);
        // console.log(dataFlagGetOneTinByIdTinDang[0].tindang_mienphi)
        if (dataFlagGetOneTinByIdTinDang[0].tindang_mienphi === 0) {
            // kiểm tra tin có miễn phí hay không, nếu có miễn phí khi tin bị lỗi sẽ trừ tin mien phi user
            tinhToanTinMienPhi.tinhToanTinMienPhi(dataFlagGetOneTinByIdTinDang[0].user_id, 1);
        } else if (dataFlagGetOneTinByIdTinDang[0].tindang_mienphi === 1) {
            // kiểm tra tin có miễn phí hay không, nếu có miễn phí khi tin bị lỗi sẽ trừ ra sô đồng rao 
            const dataDongrao = 5000;
            const noidung = `Tin không được duyệt vì lý do ${thongBaoViPham_noidung} và đã trả lại 5000 DR cho user`
            tinhToanDongRao.xuLyDongRao(dataFlagGetOneTinByIdTinDang[0].user_id, dataDongrao, noidung, 0);
        }

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

exports.updateTinDangUuTien = async (req, res) => {
    let tinDang_id = req.params.tindang_id;
    console.log(tinDang_id)
    if (!tinDang_id) {
        return res.status(200).json({ error: 'Không tìm thấy dangtin_id' })
    }

    try {
        const flagUpdate = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.updateTinDangUuTien(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }
        var dataTinDang = await flagUpdate(tinDang_id);

        //get user_id ,tincomienphi hay khong
        const flagGetOneTinByIdTinDang = (tinDang_id) => {
            return new Promise((resolve, reject) => {
                dangTinModel.getOneTinByIdTinDang(tinDang_id, (err, data) => {
                    if (err)
                        reject(err);
                    else {
                        resolve(data);
                    }
                })
            })
        }

        const dataFlagGetOneTinByIdTinDang = await flagGetOneTinByIdTinDang(tinDang_id);
        // console.log(dataDanhMuc)
        if (dataTinDang.affectedRows > 0) {
            const dataDongrao = 10000;
            const noidung = `Thanh Toán tin ưu tiền thành công và đã -10000 DR cho user`
            tinhToanDongRao.xuLyDongRao(dataFlagGetOneTinByIdTinDang[0].user_id, dataDongrao, noidung, 1);

            return res.status(200).json({ message: 'Update Tin ưu tiên thành công !!' })
        } else {
            return res.status(200).json({ error: 'Update tin uu tien that bai thất bại!!' })
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}
