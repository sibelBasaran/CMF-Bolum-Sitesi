const express = require('express');
const educationController = require('./../controllers/education.controller');
const router = express.Router();


router.get('/lisans_egitimi', educationController.lisans_egitimi);
router.get('/sinavlar', educationController.sinavlar);
router.get('/sinavlar_io', educationController.sinavlar_io);
router.get('/ders_katalogu', educationController.ders_katalogu);
router.get('/ders_programi', educationController.ders_programi);
router.get('/stajlar', educationController.stajlar);
router.get('/muhendislik_tamamlama', educationController.muhendislik_tamamlama);

module.exports = router;