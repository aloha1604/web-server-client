const express = require("express");
const router = express.Router();
const multer = require('multer');
// const uuidv4 = require('uuid/v4');
const { v4: uuidv4 } = require('uuid')

const AuthMiddleWare = require("../middleware/Auth.Middleware");
const AuthController = require("../controller/Auth.controller");

const dangTinController = require("../controller/dangtin.controller");
const categoryController = require('../controller/category.controller');
const userController = require('../controller/user.controller');

router.get('/activeuser/:user_id', AuthController.updateAciveUser);
router.post('/userdangky', AuthController.userDangky);
router.post('/userdangnhap', AuthController.loginUser);
router.post('/userResetPassword', AuthController.userResetPassword);
// router.use(AuthMiddleWare.isAuth);
// //category router
router.get('/getAllCategory', categoryController.getAllCategory);


// dangTinController.dangTin

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
router.post('/upload-imagestest', upload.array('imgCollection', 6), function (req, res) {
    res.send(req.files)
});
router.get("/gethinhanh", dangTinController.getHinhAnh);
//quan ly tin dangtin, xoatin, getAllTin user
// post dang tim gòm body: tbl_tindang and iduser
router.post('/dangtin', upload.array('imgCollection', 6), dangTinController.dangTin);

// getCountTinMienPhiAndDongRao

router.get('/getCountTinMienPhiAndDongRao/:user_id', userController.getCountTinMienPhiAndDongRao);
router.put('/updateTinDangUuTien/:tindang_id', dangTinController.updateTinDangUuTien);





module.exports = router;