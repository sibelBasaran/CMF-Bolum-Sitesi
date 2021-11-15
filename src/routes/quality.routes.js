const express = require('express');
const qualityController = require('./../controllers/quality.controller');
const router = express.Router();

router.get('/kalite_politikamiz', qualityController.kalite_politikamiz);
router.get('/kalite_elcileri', qualityController.kalite_elcileri);
router.get('/anketler', qualityController.anketler);
router.get('/faaliyet_raporu', qualityController.faaliyet_raporu);
router.get('/dokumanlar', qualityController.dokumanlar);

module.exports = router;