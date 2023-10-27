import React,{ useEffect,useState } from 'react';
import ProfileDP from '../ProfileDP/ProfileDP';
import EditButton from '../../EditButton/EditButton';
import { Edit } from '@mui/icons-material';

const ProfileHeader = () => {
    const [ show,setShow ] = useState(true);
    const [ lastScrollY,setLastScrollY ] = useState(0);
    const [ isScrolled,setIsScrolled ] = useState(false);
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
            <div className='fixed top-0 left-0 w-full h-24 bg-green-500 z-40 '>
                <ProfileDP className={`${!show ? 'moveDP ' : window.scrollY < 50 ? 'moveBackDP' : 'moveDP'}`} />
                <EditButton className={`absolute top-28 right-5 duration-1000`} >
                    <Edit sx={{ fontSize: !show ? ' 0' : window.scrollY < 10 ? '26px' : '0' }} />
                </EditButton>
            </div>
            <div className="mt-40"></div>
        </>
    );
};

export default ProfileHeader;