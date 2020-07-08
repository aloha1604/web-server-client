const express = require("express");
const router = express.Router();
const multer = require('multer');
// const uuidv4 = require('uuid/v4');
const { v4: uuidv4 } = require('uuid')

const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");

const dangTinController = require("../controller/dangtin.controller");
const categoryController = require('../controller/category.controller');

router.get('/activeuser/:user_id', AuthController.updateAciveUser);
router.post('/userdangky', AuthController.userDangky);
router.post('/userdangnhap', AuthController.loginUser);
// router.use(AuthMiddleWare.isAuth);
// //category router
router.get('/getAllCategory', categoryController.getAllCategory);

// dang images

const DIR = './public';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.post('/upload-images', upload.array('imgCollection', 6), dangTinController.insertHinhAnh);
router.get("/gethinhanh", dangTinController.getHinhAnh);



module.exports = router;