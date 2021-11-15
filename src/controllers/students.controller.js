const express = require('express');
const router = express.Router();

const yeterlilikler = router.get('/yeterlilikler', function(req, res) {
    res.render('yeterlilikler');
});

const istatistikler = router.get('/istatistikler', function(req, res) {
    res.render('istatistikler');
});

const ogrenci_sayilari = router.get('/ogrenci_sayilari', function(req, res) {
    res.render('ogrenci_sayilari');
});

const sinav_kurallari = router.get('/sinav_kurallari', function(req, res) {
    res.render('sinav_kurallari');
});

module.exports = {
    yeterlilikler,
    istatistikler,
    ogrenci_sayilari,
    sinav_kurallari
};