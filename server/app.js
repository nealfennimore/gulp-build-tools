"use strict";

var express = require('express'),
    config  = require('../config/config'),
    paths   = require('../config/paths'),
    hbs     = require('hbs');

var app = express(),
    router = express.Router();

// Load in handlebar partials
hbs.registerPartials(paths.views + '/partials');

// Set view engine to use handlebars and set view directory
app.set('view engine', 'hbs');
app.set('views', paths.views);

// Serve compiled static assets
app.use(express.static(paths.dist));

app.get('/', function(req, res) {
    res.render('home', {
        content: 'I\'m home!'
    });
});

app.listen(config.port);