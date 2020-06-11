const express = require('express');
const axios = require('axios');
const router = express.Router();


var city = 'Bangalore';
var key = process.env.API_key;
var units = 'metric';

// Main Page
router.get('/', (req, res) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`)
        .then((response) => {
            res.render('dashboard', {
                data : response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        })
});

module.exports = router;