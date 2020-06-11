const express = require('express');
const axios = require('axios');
const router = express.Router();

var key = process.env.API_key;

// Main Page
router.post('/', (req, res) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=${req.body.units}&appid=${key}`)
        .then((response) => {
            res.render('weather', {
                data : response.data,
                units: req.body.units,
                title: req.body.city + " - Weather App"
            });            
        })
        .catch((error) => {
            if (error.response.statusText === "Not Found") {
                req.flash('error_msg', "This city does not exists in our databse. We are adding more. Thank You");
            } else if (error.response.statusText === "Bad Request") {
                req.flash('error_msg', "Please enter the name of city.");
            } else {
                req.flash('error_msg', "Looks like some error. Sorry")
            }
            res.redirect('/');
        })
});

module.exports = router;