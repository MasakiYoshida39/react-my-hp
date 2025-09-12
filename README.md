# 個人メモ
起動の仕組み
ブラウザ
   │
   ▼
index.js
   │  (React アプリ起動)
   ▼
App.js
   │  (ルーティング + 共通コンポーネント表示)
   ▼
Header / Footer
Routes ──> Home  または Profile

起動方法
npm install　パッケージインストール
npm start　開発サーバー起動
Local: http://localhost:3000
アクセス先

停止方法
Ctrl + C

## CSS ファイルの違い

React プロジェクトには主に 2 つの CSS ファイルがあります。

### index.css
- アプリ全体の **グローバルスタイル** を定義するファイルです。
- body や a などの HTML 要素や全コンポーネントに共通するスタイルを設定します。
- 全体の基本デザインをまとめるのに使います。

### App.css
- `App.js` 内のコンポーネント専用のスタイルを定義するファイルです。
- App コンポーネント内の要素にのみ影響し、他のコンポーネントには基本的に影響しません。
- 背景色、レイアウト、文字色など App 内の見た目を個別に調整するのに使います。

### まとめ
- `index.css` → 全体の共通スタイル  
- `App.css` → App コンポーネント専用スタイル

# React My HP

React を使って作成した個人用ホームページです。AWS S3 へデプロイ予定です。

# React アプリの始め方

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) を使って作成されています。

## 利用できるスクリプト

プロジェクトのディレクトリで次のコマンドが実行できます。

### `npm start`

開発モードでアプリを実行します。  
ブラウザで [http://localhost:3000](http://localhost:3000) を開くと表示されます。

コードを変更するとページは自動的にリロードされます。  
コンソールに Lint エラーが出ることもあります。

### `npm test`

テストランナーを対話モードで起動します。  
詳しくは [テストの実行方法](https://facebook.github.io/create-react-app/docs/running-tests) を参照してください。

### `npm run build`

本番環境用にアプリをビルドします。  
結果は `build` フォルダに出力され、React が最適化された状態でまとめられます。

ファイル名にはハッシュが付与され、コードは圧縮されます。  
これでアプリをデプロイできる状態になります。

デプロイ方法については [公式ドキュメント](https://facebook.github.io/create-react-app/docs/deployment) を参照してください。

### `npm run eject`

**注意：この操作は元に戻せません！**

ビルドツールや設定に満足できない場合は、`eject` コマンドで設定をすべてプロジェクト内にコピーし、自由に編集できるようにします。  
ただし一度 `eject` すると戻せませんので、必要なときのみ実行してください。

---

## さらに学びたい場合

- [Create React App ドキュメント](https://facebook.github.io/create-react-app/docs/getting-started)
- [React 公式ドキュメント](https://reactjs.org/)
