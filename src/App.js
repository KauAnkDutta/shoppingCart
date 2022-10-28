import React, {useContext} from 'react';
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {AuthContext} from './context/AuthContext'
import Cart from './components/cart/Cart';
import Profile from './components/ProfilePage/Profile';

import Product from './components/product/Product';

function App(){
  const {product} = useContext(AuthContext)
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/product/:id`} element={<Product/>} />
        <Route path={`/cart`} element={<Cart/>} />
        <Route path={`/profile`} element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;