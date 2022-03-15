module.exports = (gulp, config) => {
  gulp.task('watch:scss', () => {
    gulp.watch(
      ...config.scss.all,
      gulp.series('lint:stylelint', 'scss'),
    );
  });

  gulp.task('watch:ts', () => {
    gulp.watch(
      ...config.ts.source,
      gulp.series('lint:eslint', 'ts'),
    );
  });

  gulp.task('watch', gulp.series('default', gulp.parallel('watch:scss', 'watch:ts')));
};
