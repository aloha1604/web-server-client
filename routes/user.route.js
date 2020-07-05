const express = require("express");
const router = express.Router();

const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");

const categoryController = require('../controller/category.controller');


router.post('/userdangky', AuthController.userDangky);
router.post("/userdangnhap", AuthController.loginUser);
router.use(AuthMiddleWare.isAuth);
// //category router
router.get('/getAllCategory', categoryController.getAllCategory);

module.exports = router;