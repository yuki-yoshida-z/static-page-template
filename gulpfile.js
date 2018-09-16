
const gulp = require('gulp');
const sass = require('gulp-sass');
const coffee = require('gulp-coffee');
const slim = require('gulp-slim');
// sass -> css
gulp.task('build-css', function(){
  return gulp.src('dev/sass/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('production/css/'));
});

// coffee -> javasxript
gulp.task('build-js', function(){
  return gulp.src('dev/coffee/script.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('production/js/'));
});

// slim -> html
gulp.task('build-html', function(){
  return gulp.src('dev/')
    .pipe(slim())
    .pipe(gulp.dest('production/'));
});

