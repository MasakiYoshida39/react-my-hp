/**
 * index.js
 *
 * React アプリのエントリーポイント（入口ファイル）です。
 * 
 * 役割：
 * - App.js を読み込み、ブラウザの DOM にレンダリングします
 * - React アプリの「起点」となるファイルです
 *
 * 主な内容：
 * - ReactDOM.createRoot() を使って root 要素に描画
 * - <React.StrictMode> で開発モードの警告を検出
 *
 * 補足：
 * - reportWebVitals.js や setupTests.js は必要な場合だけ import
 * - このファイル自体は削除しないでください
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
