var browserSync = require('browser-sync');

module.exports = (gulp, $, paths, u) => {
    return (cb) => {
        $.nodemon({
            script: paths.server + 'app.js',
            watch: paths.server,
            ignore: [paths.client]
        })
        .once('start', cb) // Prevent multiple instances from starting
        .on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, 500);
        });
    };
};