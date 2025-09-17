import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; // ← スタイルを適用するためのCSSファイル

function Main({ user }) {
    return (
        <main className="main">
            <section id="about" className="about-section">
                {user.avatar && (
                    <img
                        src={user.avatar}
                        alt="avatar"
                        className="avatar"
                    />
                )}
                <h1 className="name">{user.name}</h1>
                <p className="bio">{user.bio}</p>

                <Link to="/profile">
                    <button className="profile-button">プロフィール詳細</button>
                </Link>
            </section>

            <section id="contact" className="contact-section">
                <h2>Contact</h2>
                {user.email ? (
                    <p>Email: {user.email}</p>
                ) : (
                    <p>連絡先は登録されていません</p>
                )}
                {user.twitter && (
                    <a
                        href={user.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter-link"
                    >
                        Twitter
                    </a>
                )}
            </section>
        </main>
    );
}

export default Main;
