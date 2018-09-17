
const gulp = require('gulp');
const sass = require('gulp-sass');
const coffee = require('gulp-coffee');
const slim = require('gulp-slim');
const autoprefixer = require('gulp-autoprefixer');
// sass -> css
gulp.task('build-css', function(){
  return gulp.src('dev/sass/style.sass')
    //cssをsassへ変換
    .pipe(sass())
    //ベンダープレフィックス付与
    .pipe(autoprefixer(['last 2 versions']))
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
  return gulp.src('dev/*.slim')
    .pipe(slim({pretty: true}))
    .pipe(gulp.dest('production/'));
});


gulp.task('default', gulp.series( gulp.parallel('build-css', 'build-js', 'build-html')));

