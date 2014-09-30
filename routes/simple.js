var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = {name: "Furby", color: "black", nickname: "LooLoo"};
    res.render('simple', data);
});

module.exports = router;
