const express = require('express');
const router = express.Router();

const lisans_egitimi = router.get('/lisans_egitimi', function(req, res) {
    res.render('lisans_egitimi');
});

const sinavlar = router.get('/sinavlar', function(req, res) {
    res.render('sinavlar');
});

const sinavlar_io = router.get('/sinavlar_io', function(req, res) {
    res.render('sinavlar_io');
});

const ders_katalogu = router.get('/ders_katalogu', function(req, res) {
    res.render('ders_katalogu');
});

const ders_programi = router.get('/ders_programi', function(req, res) {
    res.render('ders_programi');
});

const stajlar = router.get('/stajlar', function(req, res) {
    res.render('stajlar');
});

const muhendislik_tamamlama = router.get('/muhendislik_tamamlama', function(req, res) {
    res.render('muhendislik_tamamlama');
});

module.exports = {
    lisans_egitimi,
    sinavlar,
    sinavlar_io,
    ders_katalogu,
    ders_programi,
    stajlar,
    muhendislik_tamamlama
};