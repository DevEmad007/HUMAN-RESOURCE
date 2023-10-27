import React from 'react';
import ProfileHeader from '../Components/Profile/ProfileHeader/ProfileHeader';
import ListedPersons from '../Components/ListedPersons/ListedPersons';

const Profile = () => {
    return (
        <div className=' min-h-vh-full text-center'>
            <ProfileHeader />
            <ListedPersons />
        </div>
    );
};

export default Profile;