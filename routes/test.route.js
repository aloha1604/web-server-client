const express = require("express");
const router = express.Router();

const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");
const FriendController = require("../controller/FriendController")
const categoryController = require('../controller/category.controller');
const nodeMail = require("../helpers/nodeMail")


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
router.post('/userdangky', AuthController.userDangky);
router.post("/userdangnhap", AuthController.loginUser);
router.use(AuthMiddleWare.isAuth);
// //category router
router.get('/getAllCategory', categoryController.getAllCategory);



module.exports = router;