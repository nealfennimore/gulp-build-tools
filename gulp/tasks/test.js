var karma  = require('karma'),
    path   = require('path');

module.exports = (gulp, $, paths, u) => {
    return (done) => {
        karma.server.start({
            configFile: path.join(paths.gulp, '/karma.config.js'),
            singleRun: true
        }, done);
    };
};