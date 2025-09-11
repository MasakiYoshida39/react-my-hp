/**
 * App.js
 *
 * このファイルは、React アプリのメインコンポーネントです。
 *
 * 役割：
 * - アプリ全体の中心となるコンポーネント
 * - 他のコンポーネント（Header, Main, Footer など）をまとめて配置
 * - index.js で読み込まれ、ブラウザに表示される
 *
 * ポイント：
 * - JSX で画面構造を描画
 * - デザインやレイアウトは App.css で調整
 * - アプリ全体の土台として機能
 */
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

