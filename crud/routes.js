const express = require('express');
const CrudController = require('./controller');
const router = express.Router();

router.route('/')
    .get(CrudController.getAllCrud)
    .post(CrudController.createCrud);

router.route('/:id')
    .get(CrudController.getCrud)
    .patch(CrudController.updateCrud)
    .delete(CrudController.deleteCrud);

module.exports = router;