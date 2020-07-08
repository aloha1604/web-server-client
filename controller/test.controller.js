// let express = require('express');
// const multer = require('multer');
// // const uuidv4 = require('uuid/v4');
// const { v4: uuidv4 } = require('uuid');
// const router = express.Router();

// const hinhAnhModel = require('../models/hinhAnh.model');




// router.post('/upload-images', upload.array('imgCollection', 6), (req, res, next) => {
//     const reqFiles = [];
//     const url = req.protocol + '://' + req.get('host')
//     for (var i = 0; i < req.files.length; i++) {
//         reqFiles.push(url + '/public/' + req.files[i].filename)
//     }

//     hinhAnhModel.insertHinhAnh(reqFiles, (err, data) => {
//         if (err)
//             return res.status(200).json({
//                 error: 'khong the luu'
//             })
//         else res.send('da luu thanh cong');

//     })

// })
// exports.insertHinhAnh = (req, res, next) => {
//     const reqFiles = [];
//     const url = req.protocol + '://' + req.get('host')
//     for (var i = 0; i < req.files.length; i++) {
//         reqFiles.push([url + '/public/' + req.files[i].filename])
//     }
//     console.log('da vao toi inserhinhanh')
//     console.log(reqFiles)

//     hinhAnhModel.insertHinhAnh(reqFiles, (err, data) => {
//         if (err)
//             return res.status(200).json({
//                 error: 'khong the luu'
//             })
//         else res.send('da luu thanh cong');

//     })

// }

// /gethinhanh
// router.get("/gethinhanh", (req, res, next) => {
//     hinhAnhModel.getHinhAnh((err, data) => {
//         if (err)
//             return res.status(200).json({
//                 error: 'khong the lay ra danh sach iamge'
//             })
//         else res.send(data);

//     })
// });

//gethinhanh
// exports.getHinhAnh = (req, res, next) => {
//     hinhAnhModel.getHinhAnh((err, data) => {
//         if (err)
//             return res.status(200).json({
//                 error: 'khong the lay ra danh sach iamge'
//             })
//         else res.send(data);

//     })
// };


