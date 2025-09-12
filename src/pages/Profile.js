import React from 'react';
import './Profile.css'; // プロフィール用スタイル

function Profile({ user }) {
    return (
        <div className="profile-container">
            <img className="profile-avatar" src={user.avatar} alt="avatar" />
            <h1>{user.name}</h1>
            <h2>@{user.username}</h2>
            <p>{user.bio}</p>

            <div className="contact">
                <p>Email: {user.email}</p>
                <a href={user.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>

            <div className="skills">
                <h3>Skills:</h3>
                <ul>
                    {user.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profile;
