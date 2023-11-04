import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Close } from '@mui/icons-material';
import { authGoogleLogIn,authStatus } from '../../features/Auth/authOperation';
import { hideAuthModal } from '../../features/AuthModal/authModalSlice';
const AuthModal = () => {
    const dispatch = useDispatch();
    const { userId } = useSelector((store) => store.auth);
    const show = useSelector(store => store.authModal.show);

    const handleClick = () => {
        // dispatch(authGoogleLogIn());
    };

    useEffect(() => {
        // dispatch(authStatus());
    },[]);

    return (
        <div
            className={`${show ? 'showAuthModal' : 'hideAuthModal'}
             absolute bottom-0 left-0 w-full max-w-4xl h-28 flex justify-center items-center border-t-2 border-x-2 border-gray-400 rounded-t-3xl translate-y-full bg-white duration-1000`}
        >
            <button
                onClick={handleClick}
                className=' mx-10 py-3 
                font-semibold text-xl text-white 
                rounded-xl bg-blue-500 w-full max-w-sm cursor-pointer'>
                Sign In With Google
            </button>
            <Close
                onClick={() => dispatch(hideAuthModal())}
                sx={{ position: ' relative',bottom: '30%',right: '6px' }}
            />
        </div>
    );
};

export default AuthModal;