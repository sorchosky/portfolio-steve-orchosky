'use strict';
 
let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
let concat = require('gulp-concat');
let autoprefixer = require('gulp-autoprefixer');
let fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
 
sass.compiler = require('sass');

// Static Server + watching scss/html files
gulp.task('serve', function() {
  browserSync.init({
      server: "./app"
  });
});

gulp.task('html', function () {
  return gulp.src('./src/html/pages/*.html')
    .pipe(fileinclude({
      prefix:'@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});
 
gulp.task('sass', function () {
  return gulp.src(['./src/scss/style.scss' ,'./src/scss/bootstrap.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return gulp.src('./src/js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.stream());
});
 
gulp.task('default', function () {
  browserSync.init({
      server: "./build"
  });
  gulp.watch('./src/html/**/*.html', gulp.series('html'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/*.js', gulp.series('scripts'));
});
