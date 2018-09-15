// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');

// style.scssをタスクを作成する
gulp.task('default', function () {
  // style.scssファイルを取得
  gulp.src('dev/sass/style.sass')
    // Sassのコンパイルを実行
    .pipe(sass())
    // cssフォルダー以下に保存
    .pipe(gulp.dest('production/css/'));
});
