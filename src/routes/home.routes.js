const express = require('express');
const homeController = require('./../controllers/home.controller');
const router = express.Router();

router.get('/', homeController.index);
router.get('/admin', homeController.admin);
router.post('/announcements/add', homeController.add_announcement);
router.get('/announcements/add', homeController.add_announcement_page);
router.post('/news/add', homeController.add_news);
router.get('/news/add', homeController.add_news_page);
router.get('/announcement/:id', homeController.announcement);
router.get('/site_kayit', homeController.site_kayit);
router.get('/iletisim', homeController.iletisim);
router.get('/bize_yazin', homeController.bize_yazin);
router.post('/send_mail', homeController.send_mail);

module.exports = router;
