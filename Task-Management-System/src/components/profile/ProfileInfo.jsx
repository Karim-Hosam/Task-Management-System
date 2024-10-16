import React from 'react';
import ProfileCSS from './Profile.module.css';

const ProfileInfo = ({ profile }) => {
    // const altText = profile.name ? profile.name.charAt(0) : 'P'; // First letter of the name or default 'P'

    return (
        <div className={ProfileCSS['profileInfoContainer']}>
            <div className={ProfileCSS.cover}>
                <div className={ProfileCSS.ProfilePic}>
                        <h2>{profile.username.charAt(0)}</h2>
                </div>
            </div>
            <div className={ProfileCSS.profileText}>
                <h1 className={ProfileCSS['profile-header']}>{profile.username || 'Your Profile'}</h1>
                <p className={ProfileCSS['profile-info']}>{profile.email || 'No email available'}</p>
                <p className={ProfileCSS['profile-info']}>{profile.phoneNumber || 'No phone number available'}</p>
            </div>

            {/* {profile.profilePicture ? (
                <img
                    src={profile.profilePicture}
                    alt={altText}
                    className={Profile['profile-picture']}
                />
            ) : (
                <div className={Profile['profile-picture-placeholder']}>
                    {altText}
                </div>
            )} */}
        </div>
    );
};

export default ProfileInfo;