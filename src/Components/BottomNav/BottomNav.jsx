import { HomeRounded,Person,Upload } from '@mui/icons-material';
import React,{ useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AuthModal from '../AuthModal/AuthModal';
import { useDispatch,useSelector } from 'react-redux';
import { hideAuthModal,showAuthModal } from '../../features/AuthModal/authModalSlice';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { authUpdate } from '../../features/Auth/authSlice';
import { authStatus } from '../../features/Auth/authOperation';
const BottomNav = () => {
    const auth = getAuth();
    const show = useSelector(store => store.authModal.show);
    const { userId } = useSelector(slice => slice.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                dispatch(authUpdate(user));
            } else {
                dispatch(authUpdate(null));
                // User is signed out
            }
        });
    },[ userId ]);

    const handleClick = () => {
        if (!userId) {
            dispatch(showAuthModal());
        } else {
            dispatch(hideAuthModal());
        }
    };

    return (
        <div
            className='fixed bottom-0 left-0 w-full  h-14 
         bg-white border-t-gray-300 border-t z-30'>
            <AuthModal />
            <ul className='grid grid-cols-3 pt-2'>
                <li
                    className='flex justify-center items-center'
                >
                    <button
                        type="button">
                        <NavLink
                            to={'/'}
                        >
                            <HomeRounded sx={{ fontSize: '36px' }} />
                        </NavLink>
                    </button>
                </li>
                <li
                    className='flex justify-center items-center'
                >
                    <button
                        onClick={handleClick}
                        type="button">
                        <NavLink
                            to={userId ? '/uploads/' : '/'}
                        >
                            <Upload sx={{ fontSize: '36px' }} />
                        </NavLink>
                    </button>
                </li>
                <li
                    className='flex justify-center items-center '
                >
                    <button
                        onClick={handleClick}
                        type="button">
                        <NavLink
                            to={userId ? `/profile/` : '/'}
                        >
                            <Person sx={{ fontSize: '36px' }} />
                        </NavLink>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default BottomNav;