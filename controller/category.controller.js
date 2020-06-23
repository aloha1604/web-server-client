//require model

const category = require('../models/category.model');

exports.getAllCategory = (req, res) => {
    category.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {
            res.json({ dataCategory: data });
        }
    })
}
exports.addCategory = (req, res) => {
    const categoryName = req.body.categoryName;
    category.insert(categoryName, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {
            res.json({ addCategory: data });
        }
    })
}

exports.UpdateCategory = (req, res) => {
    let categoryId = req.query.categoryId;

    const categoryObj = {
        categoryName: req.body.categoryName,
        categoryId: categoryId
    }

    category.update(categoryObj, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            res.json({ updateCategory: data });
        }
    })
}

exports.deleteCategory = (req, res) => {
    let categoryId = req.query.categoryId;
    console.log(categoryId);
    category.delete(categoryId, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            res.json({ deteleCategory: data });
        }
    })

}
exports.findOneCategoryById = (req, res) => {
    let categoryId = req.query.categoryId;
    console.log(categoryId);
    category.findOneById(categoryId, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        } else {

            res.json({ deteleCategory: data });
        }
    })
}
exports.searchCategory = (req, res) => {

}

