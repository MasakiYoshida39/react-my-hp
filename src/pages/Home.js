import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';

function Home({ user }) {
    return (
        <div>
            <Main user={user} />
        </div>
    );
}
export default Home;