import { Home,HomeRounded,Person,Upload } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full h-14 grid grid-cols-3 bg-white z-30'>
            <Link to={'/'} className='flex justify-center items-center'>
                <HomeRounded sx={{ fontSize: '36px' }} />
            </Link>
            <Link to={'/uploads/'} className='flex justify-center items-center'>
                <Upload sx={{ fontSize: '36px' }} />
            </Link>
            <Link to={'/profile/'} className='flex justify-center items-center'>
                <Person sx={{ fontSize: '36px' }} />
            </Link>
        </div>
    );
};

export default BottomNav;