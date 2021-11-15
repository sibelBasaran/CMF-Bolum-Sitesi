const express = require('express');
const aboutController = require('./../controllers/about.controller');
const router = express.Router();

router.get('/genel_bilgiler', aboutController.genel_bilgiler);
router.get('/vizyon_misyon', aboutController.vizyon_misyon);

module.exports = router;