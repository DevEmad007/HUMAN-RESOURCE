import { Home,Person,Upload } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full h-14 grid grid-cols-3 bg-green-300 z-30'>
            <Link to={'/'} className='flex justify-center items-center'>
                <Home />
            </Link>
            <Link to={'/uploads/'} className='flex justify-center items-center'>
                <Upload />
            </Link>
            <Link to={'/profile/'} className='flex justify-center items-center'>
                <Person />
            </Link>
        </div>
    );
};

export default BottomNav;