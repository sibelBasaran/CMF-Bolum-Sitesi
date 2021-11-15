const express = require('express');
const router = express.Router();

const ikili_anlasmalar = router.get('/ikili_anlasmalar', function(req, res) {
    res.render('ikili_anlasmalar');
});

module.exports = {
    ikili_anlasmalar
};