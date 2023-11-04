import { useSelector,useDispatch } from 'react-redux';
import { Close } from '@mui/icons-material';
import { hideAuthModal,showAuthModal } from '../../features/AuthModal/authModalSlice';
import { GoogleAuthProvider,getAuth,signInWithPopup } from 'firebase/auth';
import { authUpdate } from '../../features/Auth/authSlice';
import { useEffect } from 'react';


const AuthModal = () => {
    const dispatch = useDispatch();
    const { userId } = useSelector((store) => store.auth);
    const show = useSelector(store => store.authModal.show);

    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth,new GoogleAuthProvider())
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                dispatch(authUpdate(user));
                // IdP data available using getAdditionalUserInfo(result)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    useEffect(() => {
        if (userId) {
            dispatch(hideAuthModal());
        }
    },[ userId ]);

    return (
        <div
            className={`${show ? 'showAuthModal' : 'hideAuthModal'}
             absolute bottom-0 left-0 w-full max-w-4xl h-28 flex justify-center items-center border-t-2 border-x-2 border-gray-400 rounded-t-3xl translate-y-full bg-white duration-1000`}
        >
            <button
                onClick={handleSignIn}
                className=' mx-10 py-3 
                font-semibold text-xl text-white 
                rounded-xl bg-blue-500 w-full max-w-sm cursor-pointer'
            >
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