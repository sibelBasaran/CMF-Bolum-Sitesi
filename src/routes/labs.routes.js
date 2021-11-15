const express = require('express');
const labsController = require('./../controllers/labs.controller');
const router = express.Router();

router.get('/yazilim_laboratuvari', labsController.yazilim_laboratuvari);
router.get('/donanim_laboratuvari', labsController.donanim_laboratuvari);

module.exports = router;