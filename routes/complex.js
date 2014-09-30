var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var activities = ['Hike', "Bike", "Sleep", "Karate"];
    var startDate = new Date("October 13, 2014 11:15:00");
    var endDate = new Date("October 23, 2014 19:15:00");

    var data = {name: "Fitness challenge", prize: 1200.0, activities: activities, startDate: startDate, endDate: endDate};

    res.render('complex', data);
});

module.exports = router;
