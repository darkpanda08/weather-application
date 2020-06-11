const express = require('express');
const axios = require('axios');
const router = express.Router();

var key = process.env.API_key;
var units = 'metric';

// Main Page
router.post('/', (req, res) => {
    let err = [];
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=${req.body.units}&appid=${key}`)
        .then((response) => {
            res.render('weather', {
                data : response.data,
                units: req.body.units,
                title: req.body.city + " - Weather App"
            });            
        })
        .catch((error) => {
            console.log(error.response.statusText);
            err.push({ msg: error.response.statusText });
            res.render('dashboard', {
                title: "Home - Weather App"
            });
        })
});

module.exports = router;