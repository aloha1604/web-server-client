//delare expressjs module
const express = require('express');
const router = express.Router();

//declare controller
const categoryController = require('../controller/category.controller');

//router-get

router.get('/getAllCategory', categoryController.getAllCategory);
router.get('/findCategoryById', categoryController.findOneCategoryById);
router.post('/addCategory', categoryController.addCategory);
router.put('/updateCategory', categoryController.UpdateCategory);
router.delete('/deleteCategory', categoryController.deleteCategory);
//router-post



//exports
module.exports = router;