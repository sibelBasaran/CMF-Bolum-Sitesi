const express = require('express');
const router = express.Router();

const kalite_politikamiz = router.get('/kalite_politikamiz', function(req, res) {
    res.render('kalite_politikamiz');
});

const kalite_elcileri = router.get('/kalite_elcileri', function(req, res) {
    res.render('kalite_elcileri');
});

const anketler = router.get('/anketler', function(req, res) {
    res.render('anketler');
});

const faaliyet_raporu = router.get('/faaliyet_raporu', function(req, res) {
    res.render('faaliyet_raporu');
});

const dokumanlar = router.get('/dokumanlar', function(req, res) {
    res.render('dokumanlar');
});

module.exports = {
    kalite_politikamiz,
    kalite_elcileri,
    anketler,
    faaliyet_raporu,
    dokumanlar
};