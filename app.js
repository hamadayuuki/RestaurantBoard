const PORT = process.env.PORT;
const path = require( "path" );
const express = require("express");
const favicon = require( "serve-favicon" );
const app = express();

// Express の設定
app.set( "view engine", "ejs" );

// 静的コンテンツのルーティング
// "localhost:3000/public" から接続された時、ファイル構造に沿って続きのパスを指定すれば静的コンテンツに接続可能
// 例 : localhost:3000/public/help/index.html
app.use( favicon( path.join( __dirname, "/public/favicon.ico" ) ));
app.use( "/public", express.static( path.join(__dirname, "/public" )));

// 動的コンテンツのルーティング
app.set("view engin", "ejs");   // ejs を使用するため宣言
app.use("/", require("./routes/index.js"));   // ルーティングを行う

// Webアプリケーションを実行
app.listen(PORT , () => {
    console.log('Application PORT :' , PORT);
});
