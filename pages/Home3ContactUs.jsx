import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import Email2 from "../src/assets/home-3/home3-contact-us/Email-2.svg"
import Clock from "../src/assets/home-3/home3-contact-us/Clock.svg"
import Location from "../src/assets/home-3/home3-contact-us/Location.svg"

import { Link } from "react-router-dom"

const Home3ContactUs = () => {
  return (
    <>
    <Home3Header />

    <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Contact us
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                        <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="home3-contact-us-form-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="home3-contact-us-form-card">
                        <h4 className="home3-contact-us-form-card-tit">Get in touch</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <input className="home3-contact-us-form-fname" placeholder="First Name" type="text" name="" id="" />
                            </div>

                            <div className="col-lg-6">
                                <input className="home3-contact-us-form-lname" placeholder="Last Name" type="text" name="" id="" />
                            </div>

                            <div className="col-lg-12">
                                <input className="home3-contact-us-form-email" placeholder="Email" type="email" name="" id="" />
                            </div>

                            <div className="col-md-12">
                                <textarea placeholder="Message" className="home3-contact-us-form-text-area"  name="" id=""></textarea>
                            </div>
                        </div>

                        <a className="home3-contact-us-form-card-btn " href="#">Send Message</a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section className="home3-contact-us-map-embeded-code">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2764225088226!2d76.98871407452015!3d11.0178750546948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b54eefefb1%3A0xc490b6044e33a787!2sSquash%20Apps%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730177640550!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    <section className="opening-hours-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="opening-hours-sec-cards">
                        <div className="opening-hours-sec-card-icon">
                            <img src={Email2} alt="" />
                        </div>
                        <div className="opening-hours-sec-card-cont">
                            <h4>Contact us</h4>
                            <p>Call us: +(406) 555-0120</p>
                            <p>Email: support@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="opening-hours-sec-cards">
                        <div className="opening-hours-sec-card-icon">
                            <img src={Clock} alt="" />
                        </div>
                        <div className="opening-hours-sec-card-cont">
                            <h4>Opening Hours</h4>
                            <p>Mon - Sat: 7.00 am - 8.00 pm</p>
                            <p>Sunday: 8.00 am - 6.00 pm </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="opening-hours-sec-cards">
                        <div className="opening-hours-sec-card-icon">
                            <img src={Location} alt="" />
                        </div>
                        <div className="opening-hours-sec-card-cont">
                            <h4>Our Office</h4>
                            <p>2972 Westheimer Rd. </p>
                            <p>Santa Ana, 
                            Illinois, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Home3Footer />
    </>
  )
}

export default Home3ContactUs