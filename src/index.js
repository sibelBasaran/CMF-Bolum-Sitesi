const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./config/connection');
const sequelize = require('./config/connection');

const app = express();
const port = 3000;
const host = 'localhost';


// SETTING UP THE PAGE LOCATION AND TEMPLATING ENGINE
app.set('views', './src/views');
app.set('view engine', 'pug');

// STATIC ASSETS
app.use(express.static(path.join(__dirname, './../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
const aboutRoutes = require('./routes/about.routes');
const academicRoutes = require('./routes/academic.routes');
const educationRoutes = require('./routes/education.routes');
const erasmusRoutes = require('./routes/erasmus.routes');
const galleryRoutes = require('./routes/gallery.routes');
const homeRoutes = require('./routes/home.routes');
const labsRoutes = require('./routes/labs.routes');
const qualityRoutes = require('./routes/quality.routes');
const steRoutes = require('./routes/ste.routes');
const studentsRoutes = require('./routes/students.routes');

// LOAD ROUTES AS MIDDLEWARE
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(academicRoutes);
app.use(educationRoutes);
app.use(erasmusRoutes);
app.use(galleryRoutes);
app.use(labsRoutes);
app.use(qualityRoutes);
app.use(steRoutes);
app.use(studentsRoutes);

app.get('*', (req, res, next) => {
    res.status(404).send('Sorry, page not found.');
    next();
});

// LISTEN THE PORT FOR ANY INCOMING REQUESTS
app.listen(port, host, () => {

    sequelize.sync().then(result => {
        console.log(result);
    }).catch(err => console.error(err));

    console.log(`Server started at ${host}:${port}`);
})