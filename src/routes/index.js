const express = require('express');
const router = express.Router();
const db = require('../models');
const IndexController = require('../controllers/index');

module.exports = (app) => {
    app.use('/', router);
};

router.get('/', IndexController.index);
