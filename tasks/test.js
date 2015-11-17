'use strict';

var karma  = require('karma'),
    path   = require('path'),
    paths  = require('../config/paths');

module.exports = function () {
    return function(done) {
        karma.server.start({
            configFile: path.join(paths.gulp, '/karma.config.js'),
            singleRun: true
        }, done);
    };
};