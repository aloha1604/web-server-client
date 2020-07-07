//delare expressjs module
const express = require('express');
const router = express.Router();

//declare controller
const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");
const FriendController = require("../controller/FriendController");//test
const categoryController = require('../controller/category.controller');//tesst
const danhMucController = require('../controller/danhMuc.controller');
const nhomController = require('../controller/nhom.controller');

router.post("/admindangnhap", AuthController.loginAdmin);
router.post("/refresh-token-admin", AuthController.refreshTokenAdmin);


// Sử dụng authMiddleware.isAuth trước những api cần xác thực
router.use(AuthMiddleWare.isAuthAdmin);
// List Protect APIs:
router.get("/friends", FriendController.friendLists);

//category router test
router.get('/getAllCategory', categoryController.getAllCategory);
router.get('/findCategoryById', categoryController.findOneCategoryById);
router.post('/addCategory', categoryController.addCategory);
router.put('/updateCategory', categoryController.UpdateCategory);
router.delete('/deleteCategory', categoryController.deleteCategory);

// danh mục
router.get('/getAllDanhMuc', danhMucController.getAllDanhMuc);
router.post('/addDanhMuc', danhMucController.addDanhMuc);// { body:  danhmuc_ten }
router.put('/updateDanhMuc/:danhmuc_id/:danhmuc_ten', danhMucController.updateDanhMuc);
router.delete('/deleteDanhMuc/:danhmuc_id', danhMucController.deleteDanhMuc);

// nhóm
router.get('/getAllNhom', nhomController.getAllNhom);
router.get('/getAllNhomByIdDanhMuc/:danhmuc_id', nhomController.getAllNhomByIdDanhMuc);
router.post('/addNhomByIdDanhMuc', nhomController.addNhomByIdDanhMuc); // { body: danhmuc_id, nhom_ten }
router.put('/updateNhomByIdNhom/:id/:nhom_ten', nhomController.updateNhomByIdNhom);
router.delete('/deleteNhomByIdNhom/:id/', nhomController.deleteNhomByIdNhom);




module.exports = router;