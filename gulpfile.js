'use strict';
 
let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
let concat = require('gulp-concat');
let autoprefixer = require('gulp-autoprefixer');
let fileinclude = require('gulp-file-include');
 
sass.compiler = require('node-sass');

gulp.task('html', function () {
  return gulp.src('./src/html/pages/*.html')
    .pipe(fileinclude({
      prefix:'@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./build'))
});
 
gulp.task('sass', function () {
  return gulp.src(['./src/scss/style.scss' ,'./src/scss/bootstrap.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./build'))
});
 
gulp.task('default', function () {
  gulp.watch('./src/html/**/*.html', gulp.series('html'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/*.js', gulp.series('scripts'));
});
