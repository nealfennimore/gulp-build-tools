'use strict';

var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    paths   = require('./config/paths');

var utils = {
    notifier: require('./utils/notifier')(gulp, plugins, paths),
    packages: require('./utils/packages')(gulp, plugins, paths)
};

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, paths, utils);
}

gulp.task('browserReload', getTask('browserReload'));
gulp.task('browserSync', getTask('browserSync'));
gulp.task('images', getTask('images'));
gulp.task('scripts', getTask('scripts'));
gulp.task('scripts:vendor', getTask('scripts:vendor'));
gulp.task('styles', getTask('styles'));
gulp.task('test', getTask('test'));

gulp.task('default', ['browserSync'], function() {
    gulp.watch([paths.styles.src + '**/*.scss'], ['styles']);
    gulp.watch([paths.scripts.src + '**/*.js'], ['scripts']);
    gulp.watch([paths.root + 'package.json'], ['scripts:vendor']);
    gulp.watch([paths.test + '**/*.js'], ['test']);
    gulp.watch([paths.views + '**/*.*'], ['browserReload']);
});