const express = require('express');
const erasmusController = require('./../controllers/erasmus.controller');
const router = express.Router();

router.get('/ikili_anlasmalar', erasmusController.ikili_anlasmalar);

module.exports = router;