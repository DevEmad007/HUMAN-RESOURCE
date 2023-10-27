import React from 'react';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Uploads from './Pages/Uploads';
import { Route,Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import ProductDetails from './Components/ProducDetails/ProductDetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/uploads/' element={<Uploads />} />
        <Route path='/profile/' element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;