import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';

function Home() {
    return (

        <main className="main">
            <section id="about">
                <h2>About</h2>
                <p>ここに自己紹介やサイトの説明を書きます。</p>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>連絡先やお問い合わせ情報をここに書きます。</p>
            </section>

            <div>
                <Main />
                <Link to="/profile">
                    <button>プロフィールを見る</button>
                </Link>
            </div>
        </main>
    );
}

export default Home;
