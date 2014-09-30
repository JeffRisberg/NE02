var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = {location: "plain"};
    res.render('logic', data);
});

module.exports = router;
