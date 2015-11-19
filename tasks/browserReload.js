var browserSync = require('browser-sync');

module.exports = () => {
    return () => {
        browserSync.reload();
    };
};