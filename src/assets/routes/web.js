import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import { HomePages, SearchPage, DetailsPage, CartPage, LoginPage, ErrorPage} from '../pages/index';
import {ProtectedLayout} from '../components';
import ScrollToTop from '../lib/ScrollToTop/scrollToTop';

function RouterComponent() {
    return (
      <BrowserRouter>
        <ScrollToTop />  
        <Routes>
          <Route path="/DiscoverMeals" element={<HomePages/>} />
          <Route path="/" element={<HomePages/>} />
          <Route path="/DiscoverMeals/search" element={<SearchPage />} />
          <Route path="/DiscoverMeals/Detail/:id" element={<DetailsPage/>} /> 
          <Route path="/DiscoverMeals/favourite" element={
            <ProtectedLayout>
              <CartPage/>
            </ProtectedLayout>
          }/> 
          <Route path="/DiscoverMeals/login" element={<LoginPage/>} /> 
          <Route path="/DiscoverMeals/*" element={<ErrorPage/>} /> 
      </Routes>
      </BrowserRouter>
    );
}

export default React.memo(RouterComponent);