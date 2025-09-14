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
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';

function App() {
  // ユーザープロフィール情報
  const userProfile = {
    // 1. 写真／アイコン・居住地・連絡先
    avatar: "https://example.com/avatar.jpg", // 顔出ししない場合はアイコンでもOK
    location: "東京都", // 任意
    email: "",
    twitter: "",

    // 2. 自己紹介
    name: "Masaki Yoshida",
    bio: "Webエンジニア／React・Spring Boot勉強中／趣味は麺料理とゲーム",
    catchphrase: "",

    // 3. 経歴・スキル
    education: "ものつくり大学 大学技能工芸学部 2018年卒",
    workExperience: [
      "(2018年4月〜2019年10月) 建築部品 技術部・製造部",
      "(2019年10月〜2023年11月) 自動車部品 技術部・製造部",
      "(2024年6月〜現在) 正社員"
    ],
    skills: ["React", "JavaScript", "CSS", "Ruby", "MySQL", "PostgreSQL"],
    certifications: [""],

    // 4. 興味・活動
    hobbies: ["ゲーム", "プログラミング"],
    projects: ["本を自動で選んでくれるアプリ"],
    socialActivities: ["ブログ更新中", "GitHub にコード公開"]
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* ホーム画面 */}
          <Route path="/" element={<Home />} />

          {/* プロフィール画面 */}
          <Route path="/profile" element={<Profile user={userProfile} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
