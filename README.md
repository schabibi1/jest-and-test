# Jestとテスト、テスト駆動開発

![Jest Logo](/images/jest-readme-headline.png)
Format: ![Jest logo](https://github.com/facebook/jest)

このレッスンではJestを使ったテストと、テスト駆動開発を学びます。

## テストとは

プログラミングにおけるテストとは、どういうものでしょうか？

それを理解するために、テストがどういうときにプログラミングでは必要になるかを説明します。

大きなプロジェクトほど、1つコードに変更を行うと、他の部分にも影響が出たり、チームメンバーが書いたコードを、パフォーマンス改善や可読性の向上のために書き直したい、と思うことがあります。

そうなると、書き直したコードがちゃんと機能するかチェックしたり、他に影響が出そうな部分も今まで通り動くかチェックしたりする必要がありますね。

しかし、上記を全て手動でチェックしようとすると、編集する度に手動で作業を行う必要があります。

作業内容としても面倒で時間がかかる上、チェックをし忘れるリスクもありますし、ブラウザを開くのに時間がかかり、とても非効率です。

でも、挙動なくアプリケーションが動くことが確認できないままアプリケーションのリリースはできません。

ここでテストが、重要性を発揮します。

開発しているプロジェクトが、スムーズに挙動なく、どんな状況でも問題なく動くかどうかを確認する工程は、テストを行うことで効率的に行うことができます。

## テストフレームワーク

Javascriptには、テストフレームワーク（testing frameworks）は非常に多くあります。

現在人気がある代表的なJavaScriptテストフレームワークは、以下です。

* Mocha
* Jasmine
* Jest

このレッスンでは、Reactでのテストフレームワークとして標準になっており、現在サーバーサイドJavascriptのテストフレームワークとしても人気が高まっているJestを学びます。

ソースによっては、Mochaが一番人気と言っているものもありますが、Reactを今後習得することを考慮すると、React開発 x Mochaの開発環境では、以下のデメリットがあります。

* React側テストはJest、サーバー側はMochaでテストをする必要があり、2つのテストフレームワークを切り替えなければならない

将来的にReactを使った開発を考えている場合は、このコストを避けるため、Jestが推奨されます。

逆にそうでない場合は、Mochaも十分テストに使用顧慮する選択肢になり得ると言えます。

## Jestとは？

Jestとは、JavaScriptテストフレームワークです。

特徴として、シンプルさを重要視したテストフレームワークです。

Jestをテストフレームワークとして取り入れるのに、相性の良い開発プロジェクトの形態としては、Babel、TypeScript、Node.js、React.js、Angular.js、Vue.jsなどが代表的です。

そのほかの特徴としては、以下が挙げられます。

* Reactのテストが非常に行いやすい
* 初期設定がとてもシンプルで簡単

## Jestを設定しよう（Babelと併用する方法）

それでは、Jestを利用するための設定をまずは行いましょう。

今回は、練習用にフォルダを用意し、そこにJestを使うための設定をしていきます。

練習用フォルダの名前は、管理がしやすいものであれば、自由につけて構いません。

このテキストでは、**jest-testing**とします。

Jest練習用フォルダを作成したら、 `$ yarn init -y` コマンドでpackage.jsonファイルを作成しましょう。

npmでもインストールは可能です。

パッケージは、バージョンアップデートが頻繁に行われるものですので、Jestの公式ドキュメントでも、念のため、インストールのコマンドを確認することをお勧めします。

```javascript
$ mkdir jest-testing
$ cd jest-testing
$ yarn init -y
$ yarn add --dev babel-jest @babel/core @babel/preset-env
```

> [Jest: Getting Started > Additional Configuration > Using Babel](https://jestjs.io/docs/en/getting-started.html#using-babel)

このテキストではBabelを併用する方法でJestの構成を行いますので、公式ドキュメントの「Using Babel」の項目も一緒に開いて、進めていきましょう。

Babelを併用する理由は、ES6のコードをES5にトランスパイルしてブラウザに読み込ませるためです。

次に、package.jsonファイルをjest-testingディレクトリの直下に作成します。

package.jsonに以下の設定を加えることで、NPMスクリプトから、Jestによるテストを呼び出し、実行できるようにしましょう。

```javascript
/* package.json */

{
  ...
  "scripts": {
    "test": "jest --watchAll"
  },
  "devDependencies": {...}
}
```

追加で、以下の記述も書き加えましょう。

これは、トランスパイルが全てのjs拡張子を持つファイルに行われるようにするためです。

```javascript
/* package.json */

{
  ...
  "scripts": {
    "test": "jest --watchAll"
  },
  "jest": {// 追加内容
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  },
  "devDependencies": {...}
}
```