// gulpfile.js
var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('./', {sourceRoot: '../src'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
  gulp.watch('src/**/*.js',gulp.series('babel'));
});