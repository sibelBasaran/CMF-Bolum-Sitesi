const express = require('express');
const router = express.Router();

const vizyon_misyon = router.get('/vizyon_misyon', function(req, res) {
    res.render('vizyon_misyon');
});

const genel_bilgiler = router.get('/genel_bilgiler', function(req, res) {
    res.render('genel_bilgiler');
});

module.exports = {
    vizyon_misyon,
    genel_bilgiler
};