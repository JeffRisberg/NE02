var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = {author: {firstName: "Ernest", lastName: "Hemmingway"}};

    res.render('logic', data);
});

module.exports = router;
