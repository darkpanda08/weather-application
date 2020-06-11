const express = require('express');
const axios = require('axios');
const router = express.Router();

var key = process.env.API_key;
var units = 'metric';

// Main Page
router.post('/', (req, res) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=${units}&appid=${key}`)
        .then((response) => {
            res.render('weather', {
                data : response.data,
                title: req.body.city + " - Weather App"
            });            
        })
        .catch(function (error) {
            console.log(error);
        })
});

module.exports = router;