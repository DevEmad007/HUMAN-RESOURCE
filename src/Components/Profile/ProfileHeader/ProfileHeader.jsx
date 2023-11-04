import React,{ useEffect,useState } from 'react';
import ProfileDP from '../ProfileDP/ProfileDP';
import EditButton from '../../EditButton/EditButton';
import { Edit } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const ProfileHeader = () => {
    const [ show,setShow ] = useState(true);
    const [ lastScrollY,setLastScrollY ] = useState(0);
    const [ isScrolled,setIsScrolled ] = useState(false);
    const src = useSelector(store => store.auth?.photoURL);
    const displayName = useSelector(store => store.auth?.displayName);
    const email = useSelector(store => store.auth?.email);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
                setIsScrolled(true);
            } else { // if scroll up show the navbar
                setShow(true);
                setIsScrolled(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll',controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll',controlNavbar);
            };
        }
    },[ lastScrollY ]);

    return (
        <>
            <div className='fixed top-0 left-0 w-full h-24 bg-header-1 z-40 '>
                <ProfileDP
                    src={src}
                    className={`${!show ? 'moveDP ' : window.scrollY < 50 ? 'moveBackDP' : 'moveDP'}`}
                />
                <EditButton className={`absolute top-28 right-5 duration-1000`} >
                    <Edit sx={{ fontSize: !show ? ' 0' : window.scrollY < 10 ? '26px' : '0' }} />
                </EditButton>
            </div>
            <div className="pt-24"></div>
            <h1 className='ml-5 text-2xl font-semibold text-left'>{displayName}</h1>
            <p className='ml-6 text-lg font-semibold text-left text-slate-800 dark:text-slate-400'>{email}</p>
        </>
    );
};

export default ProfileHeader;