const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var morgan = require('morgan');
require('dotenv').config();

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Morgan
//app.use(morgan('combined'))

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/public', express.static('public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/search', require('./routes/search'));

// 404
app.use((req, res, next) => {
    res.status(404);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server started on port ${PORT}`));