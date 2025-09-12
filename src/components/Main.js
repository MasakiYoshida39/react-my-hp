import React from 'react';

import { Link } from 'react-router-dom'; // ← Link を使うなら必須


function Main() {
    return (
        <main className="main">
            <section id="about">
                <h2>アイコン</h2>
                <h2>名前</h2>
                <h2>簡単な紹介</h2>
                <div>
                    {/* <Main /> は削除 */}
                    <Link to="/profile">
                        <button>プロフィールを見る</button>
                    </Link>
                </div>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>連絡先やお問い合わせ情報をここに書きます。</p>
            </section>
        </main>
    );
}

export default Main;
