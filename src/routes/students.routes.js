const express = require('express');
const studentsController = require('./../controllers/students.controller');
const router = express.Router();

router.get('/yeterlilikler', studentsController.yeterlilikler);
router.get('/istatistikler', studentsController.istatistikler);
router.get('/ogrenci_sayilari', studentsController.ogrenci_sayilari);
router.get('/sinav_kurallari', studentsController.sinav_kurallari);

module.exports = router;