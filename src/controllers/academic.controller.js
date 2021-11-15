const express = require('express');
const router = express.Router();

const yonetim = router.get('/yonetim', function(req, res) {
    res.render('yonetim');
});

const akademik_kadro = router.get('/akademik_kadro', function(req, res) {
    res.render('akademik_kadro');
});

const komisyonlar = router.get('/komisyonlar', function(req, res) {
    res.render('komisyonlar');
});


module.exports = {
    yonetim,
    akademik_kadro,
    komisyonlar
};