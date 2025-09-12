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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const userProfile = {
    name: "Masaki Yoshida",
    username: "masa123",
    bio: "React と Web 開発が好きです。",
    avatar: "https://example.com/avatar.jpg",
    email: "",
    twitter: "",
    skills: ["React", "JavaScript", "CSS"]
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile user={userProfile} />} />
      </Routes>
    </Router>
  );
}

export default App;
