const express = require('express');
const academicController = require('./../controllers/academic.controller');
const router = express.Router();

router.get('/akademik_kadro', academicController.akademik_kadro);
router.get('/komisyonlar', academicController.komisyonlar);
router.get('/yonetim', academicController.yonetim);

module.exports = router;