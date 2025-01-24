import Linkedin from "../src/assets/home/footer/linkedin.png"
import Twitter from "../src/assets/home/footer/twitter.svg"
import Facebook from "../src/assets/home/footer/facebook.png"
import FooterLogo from "../src/assets/home-3/header/Logo-w.svg"
import footerContact1 from "../src/assets/home/footer/fot1.png"
import footerContact2 from "../src/assets/home/footer/fot2.png"
import footerContact3 from "../src/assets/home/footer/fot3.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="row ">
                <div className="col-md-12">
                <div className="footer-logo-ng-copy-rights-wrap">
                    <div className="row justify-content-center">
                    <div className="col-sm-12">
                    <div className="footer-logo">
                        <Link to="/">
                        <img src={FooterLogo} alt="" />
                        </Link>
                    </div>
                    </div>

                    </div>
                </div>

                <ul className="terms-conditions">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                  <li><a href="#">Get Support</a></li>
                </ul>

                <div className="contact-cont-and-social-media-links">
                <ul className="footer-contact-detail">
                    <li>
                        <div className="footer-contact-img">
                          <img src={footerContact1} alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Contant Number</span>
                            <h4 className="footer-contact-name">
                            <a href="tel:123-456-789">123-456-789</a>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="footer-contact-img">
                          <img src={footerContact2} alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Support</span>
                            <h4 className="footer-contact-name">
                            <a href="mailto:tim.jennings@example.com">tim.jennings@example.com</a>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="footer-contact-img">
                          <img src={footerContact3} alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Location</span>
                            <h4 className="footer-contact-name">
                            <a href="#">6391 Elgin St. Celina, Delaware 10299</a>
                            </h4>
                        </div>
                    </li>
                </ul>

                <div className="social-media-links">
                    <a href="#"><img src={Linkedin} alt="" /></a>
                    <a href="#"><img src={Twitter} alt="" /></a>
                    <a href="#"><img src={Facebook} alt="" /></a>   
                </div>
                </div>
                </div>
                
            </div>
        </div>
        <p className="copy-rights">
                    © 2024 Copyrights, All rights reserved. Design by <Link><b> Pixelpro Creation</b></Link>
        </p>
    </footer>
    
    </>
  )
}

export default Footer