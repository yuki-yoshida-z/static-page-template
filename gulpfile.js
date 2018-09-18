const gulp = require('gulp');
const sass = require('gulp-sass');
const coffee = require('gulp-coffee');
const slim = require('gulp-slim');
const autoprefixer = require('gulp-autoprefixer');
// sass -> css
gulp.task('build-css', function(){
  return gulp.src('dev/sass/*.sass')
    //cssをsassへ変換
    .pipe(sass())
    //ベンダープレフィックス付与
    .pipe(autoprefixer(['last 2 versions']))
    .pipe(gulp.dest('production/css/'));
});

// coffee -> javasxript
gulp.task('build-js', function(){
  return gulp.src('dev/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('production/js/'));
});

// slim -> html
gulp.task('build-html', function(){
  return gulp.src('dev/*.slim')
    .pipe(slim({pretty: true}))
    .pipe(gulp.dest('production/'));
});

gulp.task('watch', function(){
  gulp.watch('dev/sass/*.sass', gulp.parallel('build-css'));
  gulp.watch('dev/coffee/*.coffee', gulp.parallel('build-js'));
  gulp.watch('dev/*.slim', gulp.parallel('build-html'));
});

gulp.task('default', gulp.series( gulp.parallel('build-css', 'build-js', 'build-html')));

