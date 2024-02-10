import React from 'react';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Uploads from './Pages/Uploads';
import { Route,Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import ProductDetails from './Components/Produc/ProductDetails';
import Admin from './Pages/Admin';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/uploads/' element={<Uploads />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path='/adminpanal/' element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;