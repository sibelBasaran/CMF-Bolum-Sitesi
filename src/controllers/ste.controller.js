const express = require('express');
const router = express.Router();

const ilgili_evraklar = router.get('/ilgili_evraklar', function(req, res) {
    res.render('ilgili_evraklar');
});

module.exports = {
    ilgili_evraklar
};