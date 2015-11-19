var browserSync = require('browser-sync'),
    config      = require('../config/config');

module.exports = (gulp, $, paths) => {
    browserSync({
        proxy: `${config.protocol}://${config.host}:${config.port}`,
        files: [
            paths.dist + '/**/*.*'
        ],
        port: config.port + 1
    });
};