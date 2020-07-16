const express = require("express");
const router = express.Router();
const dangTinController = require('../controller/dangtin.controller');
const { route } = require("./user.route");

router.get('/getAllTinChoDuyet', dangTinController.getAllTinChoDuyet);
router.get('/getAllTinViPham', dangTinController.getAllTinViPham);
router.get('/getAllTinDaDuyet', dangTinController.getAllTinDaDuyet);
router.get('/getTinMoi', dangTinController.getTinMoi);
router.get('/getTinByIdNhom/:nhom_id/:page', dangTinController.getTinByIdNhom);
router.get('/getOneTinByIdTinDang/:tindang_id', dangTinController.getOneTinByIdTinDang);

module.exports = router;

