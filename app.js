var express = require('express');
var path = require('path');

var app = express();
var expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs({extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/simple', function (req, res) {
    var data = {name: "Furby", color: "black", nickname: "LooLoo"};
    res.render('simple', data);
});

app.get('/complex', function (req, res) {
    var data = {name: "Furby", color: "black", nickname: "LooLoo"};
    res.render('complex', data);
});

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

var port = Number(process.env.PORT || 5000);

app.listen(port, function () {
    console.log("Listening on " + port);
});
