import React from 'react';
import './Profile.css'; // プロフィール用スタイル

function Profile({ user }) {
    return (
        <div className="profile-container">
            {/* 1. 写真／アイコン */}
            <img className="profile-avatar" src={user.avatar} alt="avatar" />

            {/* 2. 名前・ユーザー名・自己紹介 */}
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            {user.catchphrase && <p className="catchphrase">{user.catchphrase}</p>}

            {/* 1. 居住地・連絡先 */}
            {user.location && <p>居住地: {user.location}</p>}
            <div className="contact">
                {user.email && <p>Email: {user.email}</p>}
                {user.twitter && (
                    <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                )}
            </div>

            {/* 3. 経歴・学歴 */}
            <div className="experience">
                {user.education && <p>学歴: {user.education}</p>}
                {user.workExperience && user.workExperience.length > 0 && (
                    <>
                        <h3>職歴:</h3>
                        <ul>
                            {user.workExperience.map((job, index) => (
                                <li key={index}>{job}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            {/* 3. スキル */}
            {user.skills && user.skills.length > 0 && (
                <div className="skills">
                    <h3>Skills:</h3>
                    <ul>
                        {user.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 3. 資格 */}
            {user.certifications && user.certifications.length > 0 && (
                <div className="certifications">
                    <h3>資格・受賞歴:</h3>
                    <ul>
                        {user.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 4. 趣味・活動 */}
            {user.hobbies && user.hobbies.length > 0 && (
                <div className="hobbies">
                    <h3>趣味・興味:</h3>
                    <ul>
                        {user.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            )}

            {user.projects && user.projects.length > 0 && (
                <div className="projects">
                    <h3>現在取り組んでいるプロジェクト:</h3>
                    <ul>
                        {user.projects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </div>
            )}

            {user.socialActivities && user.socialActivities.length > 0 && (
                <div className="social-activities">
                    <h3>ブログ・SNSでの活動:</h3>
                    <ul>
                        {user.socialActivities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Profile;
