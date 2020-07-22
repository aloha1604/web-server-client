const express = require("express");
const router = express.Router();
const multer = require('multer');
// const uuidv4 = require('uuid/v4');
const { v4: uuidv4 } = require('uuid');

const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");
const FriendController = require("../controller/FriendController")
const categoryController = require('../controller/category.controller');
const nodeMail = require("../helpers/nodeMail");
const danhMucController = require('../controller/danhMuc.controller');
const nhomController = require('../controller/nhom.controller');
const userController = require('../controller/user.controller');
const test = require('../controller/test.controller');
const PaymentApi = require('../controller/payment.controller');

// // router.post("/login", AuthController.login);
// // router.post("/refresh-token", AuthController.refreshToken);

// router.post("/admindangnhap", AuthController.loginAdmin);
// router.post("/refresh-token-admin", AuthController.refreshTokenAdmin);


// // Sử dụng authMiddleware.isAuth trước những api cần xác thực
// router.use(AuthMiddleWare.isAuthAdmin);
// // List Protect APIs:
// router.get("/friends", FriendController.friendLists);

// //category router
// router.get('/getAllCategory', categoryController.getAllCategory);
// router.get('/findCategoryById', categoryController.findOneCategoryById);
// router.post('/addCategory', categoryController.addCategory);
// router.put('/updateCategory', categoryController.UpdateCategory);
// router.delete('/deleteCategory', categoryController.deleteCategory);
// router.get('/sendmail', nodeMail.sendMailer);
router.get('/testt', (req, res) => {
    res.send('testaaaaa')
});
// router.post('/userdangky', AuthController.userDangky);
// router.post("/userdangnhap", AuthController.loginUser);
// router.use(AuthMiddleWare.isAuth);
// // //category router
// router.get('/getAllCategory', categoryController.getAllCategory);

// danh mục
router.get('/getAllDanhMuc', danhMucController.getAllDanhMuc);
router.post('/addDanhMuc', danhMucController.addDanhMuc);
router.put('/updateDanhMuc/:id/:danhmuc_ten', danhMucController.updateDanhMuc);
router.delete('/deleteDanhMuc/:id', danhMucController.deleteDanhMuc);

// nhóm
router.get('/getAllNhom', nhomController.getAllNhom);
router.get('/getAllNhomByIdDanhMuc/:danhmuc_id', nhomController.getAllNhomByIdDanhMuc);
router.post('/addNhomByIdDanhMuc', nhomController.addNhomByIdDanhMuc); // { body: danhmuc_id, nhom_ten }
// router.put('/updateNhomByIdNhom/:id/:nhom_ten', nhomController.updateNhomByIdNhom);
router.put('/updateNhomByIdNhom/:id/:nhom_ten', (req, res) => {
    res.send(req.params.id)
});
router.delete('/deleteNhomByIdNhom/:id/', nhomController.deleteNhomByIdNhom);

// get all user 
router.get('/getAllUser', userController.getAllUser);
router.get('/getAllUserChuaActive', userController.getAllUserChuaActive);
router.get('/getAllUserViPham', userController.getAllUserViPham);
router.put('/baoCaoViPhamUser/:id', userController.baoCaoViPhamUser);
router.put('/baoCaoHetViPhamUser/:id', userController.baoCaoHetViPhamUser);
router.get('/getPaymentApi', PaymentApi.getPaymentApi);
router.post('/postPaymentApi', PaymentApi.postPaymentApi)
// router.get('/getDongRao/:user_id/:dataGiaDongRao/:noiDungGiaoDich', PaymentApi.getDongRao)
// router.get('/baoCaoViPhamUser',)

// start dang anh
// const DIR = './public';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

// router.post('/upload-images', upload.array('imgCollection', 6), test.insertHinhAnh);
// router.get("/gethinhanh", test.getHinhAnh);
// end test dang anh


module.exports = router;