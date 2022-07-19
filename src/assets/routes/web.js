import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import { HomePages, SearchPage, DetailsPage, CartPage, LoginPage} from '../pages/index';

function RouterComponent() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePages/>} />
            <Route path="/home" element={<HomePages />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/Detail/:id" element={<DetailsPage/>} /> 
            <Route path="/favourite" element={<CartPage/>} /> 
            <Route path="/login" element={<LoginPage/>} /> 
          </Routes>
      </BrowserRouter>
    );
}

export default React.memo(RouterComponent);