const express = require('express');
const router = express.Router();

const yazilim_laboratuvari = router.get('/yazilim_laboratuvari', function(req, res) {
    res.render('yazilim_lab');
});

const donanim_laboratuvari = router.get('/donanim_laboratuvari', function(req, res) {
    res.render('donanim_lab');
});

module.exports = {
    yazilim_laboratuvari,
    donanim_laboratuvari
};