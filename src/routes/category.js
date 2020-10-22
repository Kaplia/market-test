const express = require('express');
const router = express.Router();
const db = require('../models');
const CategoryController = require('../controllers/category');

module.exports = (app) => {
    app.use('/category', router);
};

router.get('/', CategoryController.list);
router.post('/', CategoryController.create);
router.get('/:id', CategoryController.one);
router.put('/:id', CategoryController.edit);
router.delete('/:id', CategoryController.remove);
