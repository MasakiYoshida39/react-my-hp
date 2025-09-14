import React from 'react';
import { Link } from 'react-router-dom';

function Main({ user }) { // ← ここで props を受け取る
    return (
        <main className="main">
            <section id="about">
                <h2>アイコン</h2>
                {user.avatar && (
                    <img
                        src={user.avatar}
                        alt="avatar"
                        style={{ width: 100, borderRadius: '50%' }}
                    />
                )}
                <h2>名前</h2>
                <h1>{user.name}</h1>
                <h2>簡単な紹介</h2>
                <p>{user.bio}</p>

                <div>
                    <Link to="/profile">
                        <button>プロフィール詳細</button>
                    </Link>
                </div>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                {user.email && <p>Email: {user.email}</p>}
                {user.twitter && (
                    <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                )}
            </section>
        </main>
    );
}

export default Main;
