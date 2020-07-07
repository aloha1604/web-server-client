const express = require("express");
const router = express.Router();

const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");
const FriendController = require("../controller/FriendController")
const categoryController = require('../controller/category.controller');
const nodeMail = require("../helpers/nodeMail");
const danhMucController = require('../controller/danhMuc.controller');
const nhomController = require('../controller/nhom.controller');
const userController = require('../controller/user.controller');


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
router.put('/updateNhomByIdNhom/:id/:nhom_ten', nhomController.updateNhomByIdNhom);
router.delete('/deleteNhomByIdNhom/:id/', nhomController.deleteNhomByIdNhom);

// get all user 
router.get('/getAllUser', userController.getAllUser);
router.get('/getAllUserChuaActive', userController.getAllUserChuaActive);
router.get('/getAllUserViPham', userController.getAllUserViPham);
router.put('/baoCaoViPhamUser/:id', userController.baoCaoViPhamUser);
router.put('/baoCaoHetViPhamUser/:id', userController.baoCaoHetViPhamUser);
// router.get('/baoCaoViPhamUser',)




module.exports = router;