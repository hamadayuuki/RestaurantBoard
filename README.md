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





## ミドルウェア
### ミドルウェアとは？
リクエストレスポンスに対して任意の追加処理を行う**関数**<br>
ベースはexpressが処理をする<br>
足りていない部分のみをミドルウェアでカバーする<br>

### ミドルウェアでできること
リクエスト/レスポンスオブジェクトの変更<br>
リクエスト/レスポンス を用いた独自の追加処理<br>

### ミドルウェアの基本実装
引数は主に3つ<br>
※ 最後に返信があるように next を必ずつける
```Middleware.js
function( req , res , next ) {
    // 処理
    //・・・
}
```
<br>
(エラー処理ありの関数)<br>

```Middleware.js
// 引数に err が含まれるかどうか
function( err , req , res , next ) {
    // 処理
    //・・・
}
```
<br>

### ミドルウェアをどう使うのか
app.use() にミドルウェアを引き渡すことで組み込みが可能<br>
注意点
    - 全てのリクエストに対して処理される
    - コードの上から順に実行される
    - 依存関係にあるミドルウェアには注意が必要
```app.js

const express = require("express");
const app = express();

// ここでミドルウェアを使う
app.use( ( req , res , next ) => {
    // アプリケーションレベルのミドルウェア
    // ・・・
});

app.listen(3000);
```





## ルーティング
### ルーティングとは？
リクエストに対して処理の振り分けを行う仕組み<br><br>

↓詳細
クライアントAからのリクエストがある<br>
この時の<br>
 - リクエストのURL<br>
 - 処理内容<br>
を振り分けるための仕組み

### ルーティングの実装

↓GET通信で /home/index に接続する例<br>
```route_get.js
const express = require("express");
const app = express();

// ルーティングの実装
// GETメソッド
app.get("/home/index" , ( req , res , next ) => {
    res.status(200).send("OK");
});

app.listen(3000);
```


↓基本となるプログラム<br>

```
app.<METHOD>( path , callback )
```

【関数名】<br>
METHOD , リクエストメソッド ( get, post, put, delete などなど)<br><br>
【引数】<br>
path : 振り分けたいURL<br>
callback : pathマッチした時の処理<br>


### ルーティングのモジュール化
ルーティングの数が増えるとプログラムの管理が困難になる<br>
→ ある程度の機能単位でルーティングをモジュール化する<br>

```
const express = require("express");
const app = express();

app.get("/home/index" , ( req , res , next ) => {
    res.status(200).send("OK");
});

```

↓

```
const express = require("express");
const app = express();

// パス(/home)は相対パス
app.use( "/home", require( "./routes/index.js" ));

app.listen(3000);
```

+

```./routes/index.js
const router = require("express").Router();

router.get("/index" , ( req, res, next ) => {
    res.status(200).send("OK");
});
```

### パスパラメータ
サーバーへデータを渡す方法の一つ

### テンプレートエンジン
HTMLのひな型に対して動的に値やHTMLタグを埋め込む仕組み

### EJS
基本4構文
- 値出力(エスケープ) : <%= %> → 基本的に使用する
- 値出力(案エスケープ) : <%- %> → インクルードに使用
- コード実行 : <% %>
- コメント : <%# %>

インクルードの実装
```
<%- include( path [, locals] ) %>
```
path : インクルードしたいテンプレートのファイルパス
locals : インクルードするテンプレートに引き渡すパス
戻り値 : 生成されたHTML

### XSS 
悪意あるユーザーが脆弱性のあるAサイトにウイルスを仕込まる<br>
Aサイトを閲覧した一般ユーザーは意図せずスクリプトを実行し、クッキー情報を盗まれる<br>
盗まれたクッキー情報は 悪意あるユーザーが用意した悪意あるBサイト へ送られる<br><br>

解決策 : 必要な場所の1つ前でエスケープを使う


### ejs をインストール
```
yarn add ejs
```

routesフォルダ の下に index.js を作成<br>
viewsフォルダ  の下に index.**ejs** を作成<br>

### app.js を変更する
app.js で 「.ejs を使う」と宣言する必要がある

### 静的ファイルを配信するミドルウェア
```
express.static( route [, options ] )
```
route : 配信したい静的ファイルが配置してあるフォルダのルートパス
options : 静的ファイル配信時のオプション
    - etag : ETagを利用するか
    - lastModified : LastModifiedを利用するかどうか
    - maxAge : max-ageをミリ秒で指定

### favicon の設定
```
yarn add serve-favicon
```
app.js に favicon配信 の設定<br>

```app.js
// serve-favicon のインポート
const favicon = require( "serve-favicon" );

// favicon のパス("/public/favicon.ico")を使用して,favicon を設定
app.use( favicon( path.join( __dirname, "/public/favicon.ico" ) ));
```






