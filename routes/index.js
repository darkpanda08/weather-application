const express = require('express');
const router = express.Router();


// Main Page
router.get('/', (req, res) => {
    res.render('dashboard', {
        title: "Home - Weather App"
    });
});

module.exports = router;