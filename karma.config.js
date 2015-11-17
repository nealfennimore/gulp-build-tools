'use strict';

var cover = require('browserify-istanbul'),
    babelify = require('babelify');

var coverOptions = {
    ignore: ['**/*.spec.js'],
    defaultIgnore: true
};

var paths = require('./config/paths.js');

var testFiles = paths.test + '/**/*.spec.js';

module.exports = function(karma) {
    karma.set({
        basePath: '',
        frameworks: ['browserify', 'mocha'],
        files: [
            testFiles
        ],
        browserify: {
            debug: true,
            configure: function(bundle) {
                bundle.on('prebundle', function() {
                    bundle
                        .transform(babelify)
                        .transform(cover(coverOptions));
                });
            }
        },
        reporters: ['coverage', 'spec'],
        coverageReporter: {
            type: 'text'
        },
        preprocessors: {
            [testFiles]: ['coverage', 'browserify']
        },
        browsers: ['PhantomJS'],
        colors: true,
        singleRun: false
    });
};