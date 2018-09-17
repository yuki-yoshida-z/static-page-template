# 静的ページ開発用テンプレート
## 概要
静的ページ(主にLP)を制作する際のファイル一式。
slim、sass、coffeeをgulpでコンパイルする。
## コマンド
### slim、sass、coffeeをコンパイル
```
npx gulp
```
### ファイルの変更を監視
```
npx gulp watch
```
### 各ファイルを個別にコンパイル
```
npx gulp build-html
npx gulp build-css
npx gulp build-js
```
### その他の使用
cssのベンダープレフィックスは自動で付与される。
