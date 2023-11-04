import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import BottomNav from './Components/BottomNav/BottomNav';

const SharedLayout = () => {
    return (
        <div className='bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50'>
            <Header />
            <Outlet />
            <BottomNav />
            <Footer />
        </div>
    );
};

export default SharedLayout;