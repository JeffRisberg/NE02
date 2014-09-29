var express = require('express');
var router = express.Router();

router.get('/complex', function (req, res) {
    var data = {name: "Furby", color: "black", nickname: "LooLoo"};
    res.render('complex', data);
});

module.exports = router;
