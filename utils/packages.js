'use strict';

var _ = require('lodash');

module.exports = function (gulp, $, paths){

    function getNPM() {
        var packageManifest = {};
        try {
            packageManifest = require(paths.npm + 'package.json');
        } catch (e) {
            console.error(e);
        }
        return _.keys(packageManifest.dependencies) || [];
    }

    function getBrowser() {
        var packageManifest = {};
        try {
            packageManifest = require(paths.npm + 'package.json');
        } catch (e) {
            console.error(e);
        }
        return packageManifest.browser || {};
    }

    return {
        npm: getNPM,
        browser: getBrowser
    };
};