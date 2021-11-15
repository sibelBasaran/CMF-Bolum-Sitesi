const express = require('express');
const router = express.Router();

const ogrenci_posterleri_2017_2018 = router.get('/ogrenci_posterleri_2017_2018', function(req, res) {
    res.render('ogrenci_posterleri_2017_2018');
});

const konferans_dr_akdeniz = router.get('/konferans_dr_akdeniz', function(req, res) {
    res.render('konferans_dr_akdeniz');
});

const bilisim_guvenligi_konferansi = router.get('/bilisim_guvenligi_konferansi', function(req, res) {
    res.render('bilisim_konferansi');
});

const konferans_dr_caglayan = router.get('/konferans_dr_caglayan', function(req, res) {
    res.render('konferans_dr_caglayan');
});

module.exports = {
    ogrenci_posterleri_2017_2018,
    konferans_dr_akdeniz,
    bilisim_guvenligi_konferansi,
    konferans_dr_caglayan
};