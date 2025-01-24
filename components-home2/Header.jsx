import Logo from "../src/assets/home-2/header/Logo.svg"
// import { Link } from "react-router-dom"
import HamburgerMenu from "../src/assets/common/hamburger-menu.png"

import HamburgerMenu1 from "../src/assets/home-2/header/close.png"
// import { useState } from "react"
import Arrow from "../src/assets/home-2/banner/main-tit-before.svg"

import Icon from "../src/assets/common/down-arrow.png"

import { Link , useLocation } from "react-router-dom"
import React, { useEffect, useState } from 'react';

const Header = () => {

  useEffect(() => {
    const nav = document.getElementById('nav');
    let top = window.scrollY;
    window.addEventListener("scroll", () => {
    
        if(top < window.scrollY){
          nav.classList.add("hide-nav");
        }else{
          nav.classList.remove("hide-nav");
        }
  
      top = window.scrollY;
          
      })
  }, []);

    const location = useLocation(); 
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
  
    const [BtnState, setBtnState] = useState(false);
    function NavToggle(){
    setBtnState(BtnState  => !BtnState);
    }
    let NavBtn = BtnState ? 'nav-view' : '';

      // mobile view sidebarnav home toggle
  const [innerHomeState, setInnerHomeState] = useState(false);
  function ActiveInnerHome(){
    setInnerHomeState(innerHomeState  => !innerHomeState);
  }
  let innerHome = innerHomeState ? 'active-inner-home' : '';

    // mobile view sidebarnav pages toggle
    const [pagesState, setPagesState] = useState(false);
    function ActivePages(){
      setPagesState(pagesState  => !pagesState);
    }
    let innerPages = pagesState ? 'active-Home3NavPages-list' : '';

  return (
    <>
     <header id="nav">
        <div className="container">
            <div className="row">
                <div className="logo-nav-appointment">
                    <div className="main-logo2">
                      <Link to="/"><img src={Logo} alt="" /></Link>
                        
                    </div>

                    <ul className="nav-options">
                        <li  className="home">
                            <Link className={"Home3-pages-link underline" + (url === "/home2" ?" active3" : "")} to="/home2">Home
                          <img src={Arrow}  alt="" />
                            </Link>

                        <ul>
                                <li className="inner-home">
                                    <Link to="/">Home</Link>
                                    <Link to="/home3">Home 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/aboutuspage">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                            <Link className="Home3-pages-link" to="/">Pages
                            
                          <img src={Arrow}  alt="" />
                            </Link>
                        <ul className="Home3NavPages-list">
                           <Link to="/blog-detail"> Blog Listing</Link>
                           <Link to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link to="/sitters">sitters</Link>
                           <Link to="/BlogListingpage">blog details</Link>
                           <Link to="/shop">Shop</Link>
                           <Link to="/cameronwilliamsonpage">Sitter Details</Link>
                           <Link to="/petsdetailpage">Pets Detail Page</Link>
                           <Link to="/home3shopdetailspage">Shop Details Page</Link>
                           <Link to="/aboutuspage">About Us Page</Link>
                           <Link to="/contactus">Contact</Link>
                         </ul>
                        </li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>

                    <a className="header-btn" href="#">
                    Adopt Now
                    </a>


                    <button id="home1-hamburger-menu" className="home1-hamburger-menu" 
                    onClick={NavToggle}>
                      <img src={HamburgerMenu} alt="" />
                    </button>

                    <ul id="home1-mobile-nav" className={ `home1-mobile-nav ${NavBtn}`}>
                    <button id="home1-hamburger-menu" className="home1-hamburger-menu home1-hamburger-menu2 " 
                    onClick={NavToggle}>
                      <img src={HamburgerMenu1} alt="" />
                    </button>
                    <li className="home">
                    <button onClick={ActiveInnerHome}>
                          
                    <Link className={"underline" + (url === "/home2" ?" active3" : "")}  to="/home2">Home</Link>
                      </button>
                          <ul className={ `inner-home ${innerHome}`}>
                               <button onClick={ActiveInnerHome} className="inner-home-hide-menu">
                                 <img src={Icon} alt="" />
                                 </button>
                               <li >
                                    <Link to="/">Home</Link>
                                    <Link to="/home3">Home 3</Link>
                                </li>
                          </ul>
                        </li>
                        <li><Link to="/aboutuspage">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                        <button onClick={ActivePages}>
                        <Link to="/home2">Pages</Link>
                          </button>
                          <ul className={ `Home3NavPages-list ${innerPages}`} >
                          <button className="inner-home-hide-menu" onClick={ActivePages}>
                          <img src={Icon} alt="" />
                          </button>
                           <Link to="/blog-detail"> Blog Listing</Link>
                           <Link to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link to="/sitters">sitters</Link>
                           <Link to="/BlogListingpage">blog details</Link>
                           <Link to="/shop">Shop</Link>
                           <Link to="/cameronwilliamsonpage">Sitter Details</Link>
                           <Link to="/petsdetailpage">Pets Detail Page</Link>
                           <Link to="/home3shopdetailspage">Shop Details Page</Link>
                           <Link to="/aboutuspage">About Us Page</Link>
                           <Link to="/contactus">Contact</Link>
                         </ul>
                        </li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header