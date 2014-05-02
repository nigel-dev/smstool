'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');

var fs = require("fs");
var file = "mmssms.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();

// init express
var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
});

// set logging
app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

// mount static
//app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../.tmp')));
app.use('/styles/fonts',express.static(path.join(__dirname, '../app/styles/fonts')));
app.use('/images', express.static(path.join(__dirname, '../app/images')));
app.use('/app', express.static(path.join(__dirname, '../app')));

// setup proxy
app.get('/search', function (req, res) {
    if (!exists) {
        console.log("Cant Open DB file.");
        //fs.openSync(file, "w");
    } else {
        var db = new sqlite3.Database(file);
        var results = [];
        db.each("SELECT * FROM sms where address = " + req.query.phone, function (err, row) {
            results.push(row);
        }, function(err, rows){
            res.send(results);
        });
        db.close();
    }
});


// route index.html
app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../app/index.html'));
});

// start server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express App started!');
});
