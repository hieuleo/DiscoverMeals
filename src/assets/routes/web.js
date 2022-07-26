import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import { HomePages, SearchPage, DetailsPage, CartPage, LoginPage, } from '../pages/index';
import {ProtectedLayout} from '../components';
import ScrollToTop from '../lib/ScrollToTop/scrollToTop';
function RouterComponent() {
    return (
      <BrowserRouter>
        <ScrollToTop />  
        <Routes>
          <Route path="/DiscoverMeals" element={<HomePages/>} />
          {/* <Route path="/" element={<HomePages />} /> */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/Detail/:id" element={<DetailsPage/>} /> 
          <Route path="/favourite" element={
            <ProtectedLayout>
              <CartPage/>
            </ProtectedLayout>
          }/> 
          <Route path="/login" element={<LoginPage/>} /> 
      </Routes>
      </BrowserRouter>
    );
}

export default React.memo(RouterComponent);