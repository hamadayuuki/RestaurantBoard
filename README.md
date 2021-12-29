# RestaurantBoard

### 飲食店の口コミサイト

### 使用言語
Node.js


### Express とは
Webアプリケーション開発向けのフレームワーク<br>
NOde.jsコアモジュールのみで開発を行うのは大変！<br>
そこでよく実装する機能がパッケージされているフレームワークを使用する。<br>
それがexpress。高速にWebアプリケーションの開発を行える。

### Express で、できること/できないこと

できること<br>
リクエストのルーティング<br>
レスポンスの基本的な整形<br>

### フォルダ構成

config : 設定ファイル<br>
lib : 共通機能<br>
public : 一般公開する静的ファイル<br>
    - images : 画像ファイル<br>
    - javascripts : JavaScriptファイル<br>
    - stylesheets : CSSファイル<br>
routes : expressのルーティング<br>
views : expressの見た目(ビュー)(テンプレート)<br>

## Express導入の流れ
### 1. Expressのインストール
```
yarn add express
```

### 2. フォルダを作成
上記のフォルダ構成をもとにフォルダを作成

