const express = require("express");
const router = express.Router();
const dangTinController = require('../controller/dangtin.controller');
const { route } = require("./user.route");

router.get('/getAllTinChoDuyet', dangTinController.getAllTinChoDuyet);
router.get('/getAllTinViPham', dangTinController.getAllTinViPham);
router.get('/getAllTinDaDuyet', dangTinController.getAllTinDaDuyet);

module.exports = router;

