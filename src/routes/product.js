const express = require('express');
const router = express.Router();
const db = require('../models');
const ProductController = require('../controllers/product');

module.exports = (app) => {
    app.use('/product', router);
};

router.get('/', ProductController.list);
router.post('/', ProductController.create);
router.get('/:id', ProductController.one);
router.put('/:id', ProductController.edit);
router.delete('/:id', ProductController.remove);
