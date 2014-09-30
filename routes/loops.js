var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = {location: "plain"};
    res.render('loops', data);
});

module.exports = router;
