const express = require('express');
const galleryController = require('./../controllers/gallery.controller');
const router = express.Router();

router.get('/ogrenci_posterleri_2017_2018', galleryController.ogrenci_posterleri_2017_2018);
router.get('/konferans_dr_akdeniz', galleryController.konferans_dr_akdeniz);
router.get('/bilisim_guvenligi_konferansi', galleryController.bilisim_guvenligi_konferansi);
router.get('/konferans_dr_caglayan', galleryController.konferans_dr_caglayan);

module.exports = router;