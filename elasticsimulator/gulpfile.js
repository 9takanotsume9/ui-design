const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

gulp.task('compileSass', function() {
  return gulp.src('./static/stylesheets/style.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('static/css'));
});

gulp.task('watchSass', function(){
  gulp.watch('./static/stylesheets/**/*.scss', gulp.task('compileSass'));
});

gulp.task('default', gulp.series(['watchSass']));
