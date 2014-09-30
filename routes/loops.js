var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var activities = ['Hike', "Bike", "Sleep", "Karate"];
    var data = {activities: activities};

    res.render('loops', data);
});

module.exports = router;
