import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';

function Home() {
    return (
        <div>
            <Main />
            <Link to="/profile">
                <button>プロフィールを見る</button>
            </Link>
        </div>
    );
}

export default Home;
