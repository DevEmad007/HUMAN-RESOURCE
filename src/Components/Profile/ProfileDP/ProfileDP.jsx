import React from 'react';

const ProfileDP = ({ className,src }) => {
    return (
        <>
            <img className={` duration-500 rounded-full ${className}`} src={src} alt={src} />
        </>
    );
};

export default ProfileDP;