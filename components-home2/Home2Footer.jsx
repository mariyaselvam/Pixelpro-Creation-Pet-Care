import FooterLogo from "../src/assets/home-3/header/Logo-w.svg"
import Social1 from "../src/assets/home-2/home2-footer/1.svg" 
import Social2 from "../src/assets/home-2/home2-footer/2.svg" 
import Social3 from "../src/assets/home-2/home2-footer/3.svg" 

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Link } from "react-router-dom"

const Home2Footer = () => {

    const formRef = useRef(); // Reference for the form
  const [buttonText, setButtonText] = useState("Send Email"); // Button text state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    setButtonText("Sending..."); // Update button text

    const serviceID = "default_service";
    const templateID = "template_ttq5iaq";
    const publicKey = "Gk411-KkxOW2-mVlO"; // Your EmailJS public key

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setButtonText("Send Email"); // Reset button text
        alert("Sent!");
      })
      .catch((err) => {
        setButtonText("Send Email"); // Reset button text
        alert(`Error: ${JSON.stringify(err)}`);
      });
  };

    
  return (
    <>
    <section className="home-2-footer-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                 <div className="home-2-footer-logo-and-cont">
                    <div className="home-2-footer-logo">
                        <Link to="/">
                        <img src={FooterLogo} alt="" />
                        </Link>
                    </div>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.</p>
                 </div>
                </div>
                <div className="col-lg-2">
                    <div className="home-2-footer-logo-page-links">
                        <h4 className="home-2-footer-logo-pages-tit">
                        Pages
                        </h4>

                        <ul className="home-2-footer-logo-pages-lu-checks">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our Project</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                <div className="home-2-footer-logo-Utility-links">
                        <h4 className="home-2-footer-logo-Utility-tit">
                        Utility
                        </h4>

                        <ul className="home-2-footer-logo-Utility-lu-checks">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our Project</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home-2-footer-logo-Subscribe-links">
                <h4 className="home-2-footer-logo-Subscribe-tit">
                Subscribe
                </h4>

                <form  ref={formRef} onSubmit={handleSubmit} action="">
                <input className="home-2-footer-logo-Subscribe-input" name="message" type="text"  placeholder='Email here*'/>
                <button  type="submit" id="button" className="home-2-footer-btn">
                {/* Send Now */}
                {buttonText}
                </button>
                </form>


               <div className="home2-social-media-f-wrap-nd-subcribe">
               

                <div className="home2-social-media-f-wrap">
                    <a href="#"><img src={Social1} alt="" /></a>
                    <a href="#"><img src={Social2} alt="" /></a>
                    <a href="#"><img src={Social3} alt="" /></a>

                </div>
               </div>
                
                </div>
                </div>
            </div>
        </div>

        <div className="copy-rights-nd-terms-nd-conditions">
            <h4>© 2023 Copyrights, All rights reserved. Design by <a href="#">catalinajose222</a></h4>

            <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Home2Footer