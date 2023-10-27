import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import BottomNav from './Components/BottomNav/BottomNav';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <BottomNav />
            <Footer />
        </>
    );
};

export default SharedLayout;