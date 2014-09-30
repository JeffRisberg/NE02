var express = require('express');
var path = require('path');
var expressHbs = require('express-handlebars');

var app = express();
app.engine('hbs', expressHbs({extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// apply the routes to our application
app.use('/', require('./routes/index'));
app.use('/hello', require('./routes/hello'));
app.use('/simple', require('./routes/simple'));
app.use('/complex/', require('./routes/complex'));
app.use('/logic/', require('./routes/logic'));
app.use('/loops/', require('./routes/loops'));

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

var port = Number(process.env.PORT || 3000);

app.listen(port, function () {
    console.log("Listening on " + port);
});
