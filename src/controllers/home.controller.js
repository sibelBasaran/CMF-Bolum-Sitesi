const express = require('express');
const nodemailer = require('nodemailer');
const New = require('../models/news.model');
const Announcement = require('./../models/announcement.model');
const router = express.Router();

const index = router.get('/', async function(req, res) {

    try {
        const announcements = await Announcement.findAll();
        const news = await New.findAll();
        res.render('home', {
            duyurular: announcements,
            haberler: news
        });
        
    } catch(err) {
        console.error(err)
    }
});

const admin = router.get('/admin', function(req, res) {
    res.render('admin');
});

const announcement = router.get('/announcement/:id', function(req, res) {
    const id = req.params['id'];
    res.render('announcement', {id: id});
});

const add_announcement = router.post('/announcements/add', async function(req, res) {

    const announcementToAdd = {...req.body};

    if(announcementToAdd['title'] === '' || announcementToAdd['desscription'] === '')
        return;

    const result = await Announcement.create(announcementToAdd);

    console.warn(result);

    res.redirect('/');
});

const add_news = router.post('/news/add', async function(req, res) {

    const newToAdd = {...req.body};

    const result = await New.create(newToAdd);

    console.warn(result);

    res.redirect('/');
});

const add_news_page = router.get('/news/add', function(req, res) {
    res.render('add_news_page');
});

const add_announcement_page = router.get('/announcements/add', function(req, res) {
    res.render('add_announcement_page');
});

const site_kayit = router.get('/site_kayit', function(req, res) {
    res.render('site_kayit');
});

const iletisim = router.get('/iletisim', function(req, res) {
    res.render('iletisim');
});

const bize_yazin = router.get('/bize_yazin', function(req, res) {
    res.render('bize_yazin');
});

/* MAIL GONDERME KONTROLLERI */
const send_mail = router.post('/send_mail', (req, res) => {

    // Sunucu sahibinin maili
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sibel@gmail.com',
          pass: '123456'
        }
    });

    // Mail bilgileri
    const mailInfo = {...req.body};

    const mailOptions = {
        from: mailInfo['email_address'],
        to: 'sibel@gmail.com',
        subject: mailInfo['subject'],
        text: mailInfo['message']
    };

    // Mail gönderme işlemi
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
      

    res.redirect('/');
});

module.exports = {
    index,
    admin,
    site_kayit,
    iletisim,
    bize_yazin,
    announcement,
    add_announcement_page,
    add_announcement,
    add_news_page,
    add_news,
    send_mail
};