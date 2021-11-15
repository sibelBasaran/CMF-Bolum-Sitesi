const express = require('express');
const steController = require('./../controllers/ste.controller');
const router = express.Router();

router.get('/ilgili_evraklar', steController.ilgili_evraklar);

module.exports = router;