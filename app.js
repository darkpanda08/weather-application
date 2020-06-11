const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
require('dotenv').config();

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/public', express.static('public'));

// Express Session
app.use(session({
    secret: 'tap formal idea commemorate drama secular',
    resave: false,
    saveUninitialized: true,
    rolling: false
}));

// Connect flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes
app.use('/', require('./routes/index'));
app.use('/search', require('./routes/search'));

// 404
app.use((req, res, next) => {
    res.status(404);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server started on port ${PORT}`));