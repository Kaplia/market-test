const express = require('express');
const router = express.Router();
const db = require('../models');
const ProviderController = require('../controllers/provider');

module.exports = (app) => {
    app.use('/provider', router);
};

router.get('/', ProviderController.list);
router.post('/', ProviderController.create);
router.get('/:id', ProviderController.one);
router.put('/:id', ProviderController.edit);
router.delete('/:id', ProviderController.remove);
