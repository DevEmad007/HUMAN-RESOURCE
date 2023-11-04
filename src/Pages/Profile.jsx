import React,{ Suspense } from 'react';
import ProfileHeader from '../Components/Profile/ProfileHeader/ProfileHeader';
import ListedPersons from '../Components/ListedPersons/ListedPersons';

const Profile = () => {
    return (
        <div className=' min-h-vh-full text-center'>
            <Suspense>
                <ProfileHeader />
                <ListedPersons />
            </Suspense>
        </div>
    );
};

export default Profile;