module.exports = (gulp, $, paths, u) => {
    gulp.src(paths.fonts.src + '*')
        .pipe(gulp.dest(paths.fonts.dist));
};