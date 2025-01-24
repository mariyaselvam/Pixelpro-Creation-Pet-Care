import FooterLogo from "../src/assets/home-3/header/Logo-w.svg"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Link } from "react-router-dom"

const Home3Footer = () => {

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
    <section className="Home3-footer-sec">
        <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home3-footer-abt-cont">
                 <h4 className="home3-footer-abt-cont-tit">
                 About
                 </h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                 <p><b>Email :</b><a href="mailto:info@jstemplate.net"> info@jstemplate.net</a>  </p>
                 <p><b>Phone :</b><a href="tel:880123456789"> 8801234567</a></p>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="home3-footer-quick-links-wrap">
                   <h4 className="home3-footer-quick-links-tit">
                   Quick Link
                   </h4>

                   <ul className="home3-footer-quick-links-checks">
                    <li>
                      <Link to="/home3">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutuspage">About</Link>
                    </li>
                    <li>
                      <Link to="/blog-detail">Blog</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/adopt-pets-page">Pages</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Contact</Link>
                    </li>
                   </ul>
              </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="home3-footer-Category-links-wrap">
                  <h4 className="home3-footer-Category-links-tit">
                  Category
                  </h4>
                  <ul className="home3-footer-Category-links-checks">
                    <li><Link to="/blog-detail">Blog Detail</Link></li>
                    <li><Link to="/adopt-pets-page">Adopt Pets Page</Link></li>
                    <li><Link to="/sitters">sitters</Link></li>
                    <li><Link to="/BlogListingpage">blog details</Link></li>
                    {/* <li><Link to="/shop">Shop</Link></li> */}
                    <li><Link to="/cameronwilliamsonpage">Sitter Details</Link></li>
                    <li><Link to="/petsdetailpage">Pet Details</Link></li>
                    <li><Link to="/home3shopdetailspage">Shop Details</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="home3-footer-Weekly-Newsletter-wrap">
                  <h4 className="home3-footer-Weekly-Newsletter-tit">
                  Weekly Newsletter
                  </h4>
                  <p>Get blog articles and offers via email</p>

                  <form ref={formRef} onSubmit={handleSubmit} action="">

                  <div className="home3-footer-Weekly-Newsletter-input-wrap">
                  <input name="message" className="home3-footer-Weekly-Newsletter-input" placeholder="Your Email" type="text" required  />
                  </div>
                  <button type="submit" id="button" className="home3-footer-Weekly-Newsletter-btn" > {buttonText} </button>
                  </form>

                </div>
              </div>

             <div className="home3-logo-nd-privacy-policy">
               <div className="home3-footer-logo-and-cont-wrap">
                <div className="home3-footer-logo-nd-copy-rights">
                 <p>© 2023 Copyrights, All rights reserved. Design by <a href="#" className="copy-right-company"> Pixelpro Creation</a></p>
                </div></div>

                       <ul className="home3-privacy-policy">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#" >Cookie Policy</a></li>
                       </ul>
             </div>


            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Footer