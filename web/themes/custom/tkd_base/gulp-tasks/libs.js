module.exports = (gulp, config) => {
  gulp.task('libs', () =>
    gulp
      .src(config.libs.source)
      .pipe(gulp.dest(config.libs.destination))
  );
};
