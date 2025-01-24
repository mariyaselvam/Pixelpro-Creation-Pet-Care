
import Home from "../pages/Home"
import Home2 from "../pages/Home2"
import Home3 from "../pages/Home3"
import BlogDetailPage from "../pages/BlogDetailPage"
import Home3AdoptPetsPage from "../pages/Home3AdoptPetsPage"
import Home3Sitters from "../pages/Home3Sitters"
import BlogListingpage from "../pages/BlogListingpage"
import Shop from "../pages/Shop"
import CameronWilliamsonPage from "../pages/CameronWilliamsonPage"
import Home3ContactUs from "../pages/Home3ContactUs"
import PetsDetailPage from "../pages/PetsDetailPage"
import Home3ShopDetailsPage from "../pages/Home3ShopDetailsPage"
import AboutUsPage from "../pages/AboutUsPage"
import "../styles/boostrap.css"
// import 'animate.css';
import ScrollToTop from "../components/ScrollToTop"


import React, { useEffect, useState } from 'react';

import { BrowserRouter , Route , Routes , useLocation , Navigate   } from "react-router-dom"
import BackToTop from "../components/BackToTop"

function App() {
  return (
    <>
    <BackToTop />
    <BrowserRouter>
     
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/home3" element={<Home3 />} />
      <Route path="/blog-detail" element={<BlogDetailPage />} />
      <Route path="/adopt-pets-page" element={<Home3AdoptPetsPage />} />
      <Route path="/sitters" element={<Home3Sitters />} />
      <Route path="/BlogListingpage" element={<BlogListingpage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contactus" element={<Home3ContactUs />} />
      <Route path="/cameronwilliamsonpage" element={<CameronWilliamsonPage />} />
      <Route path="/petsdetailpage" element={<PetsDetailPage />} />
      <Route path="/home3shopdetailspage" element={<Home3ShopDetailsPage />} />
      <Route path="/aboutuspage" element={<AboutUsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
