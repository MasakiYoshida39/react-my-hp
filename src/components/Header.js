import React from 'react';
import './Header.css'; // ← 追加！

function Header() {
    return (
        <header className="header">
            <h1 className="header-logo">Masaki Yoshida</h1>
            <h1 className="header-title">タイトルを入れる</h1>
        </header>
    );
}

export default Header;
