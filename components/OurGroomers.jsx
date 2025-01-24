import OurGroomers1 from "../src/assets/home/our-groomers/our-groomers-1.png"
import OurGroomers2 from "../src/assets/home/our-groomers/our-groomers-2.png"
import OurGroomers3 from "../src/assets/home/our-groomers/our-groomers-3.png"
import OurGroomers4 from "../src/assets/home/our-groomers/our-groomers-4.png"

import Ellipse from "../src/assets/home/our-groomers/ellipse.svg"

import Facebook from "../src/assets/home/our-groomers/facebook.svg"
import Twitter from "../src/assets/home/our-groomers/twitter.svg"
import Linkedin from "../src/assets/home/our-groomers/linkedin.svg"


const OurGroomers = () => {
  return (
    <>
    <section className="our-groomers-sec">

       <div className="our-groomers-tit-wraper">
            <h3 className='our-groomers-main-tit'>Our  <b>Groomers</b></h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6" >
                    <div className="our-groomers-card" data-aos="zoom-out-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className="our-groomers-card-main-img">
                            <img src={OurGroomers1} width="274" height="286" alt="" />
                            <img className="our-groomers-card-bg-img" src={Ellipse} alt="" />
                        </div>

                        <span className="person-positions">
                        Founder
                        </span>

                        <h4 className="groomers-names">
                        Jenny Wilson
                        </h4>

                        <div className="groomers-social-profiles">
                            <a   href="#">
                                <img src={Facebook} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Twitter} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="our-groomers-card" data-aos="zoom-out-up" data-aos-delay="150" data-aos-duration="1000">
                        <div className="our-groomers-card-main-img">
                            <img src={OurGroomers2} width="274" height="286" alt="" />
                            <img className="our-groomers-card-bg-img" src={Ellipse} alt="" />
                        </div>

                        <span className="person-positions">
                        CEO
                        </span>

                        <h4 className="groomers-names">
                        Isra Ahmed
                        </h4>

                        <div className="groomers-social-profiles">
                            <a   href="#">
                                <img src={Facebook} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Twitter} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="our-groomers-card" data-aos="zoom-out-up" data-aos-delay="250" data-aos-duration="1000">
                        <div className="our-groomers-card-main-img">
                            <img src={OurGroomers3} width="274" height="286" alt="" />
                            <img className="our-groomers-card-bg-img" src={Ellipse} alt="" />
                        </div>

                        <span className="person-positions">
                        Senior Groomer
                        </span>

                        <h4 className="groomers-names">
                        Aliya Khan
                        </h4>

                        <div className="groomers-social-profiles">
                            <a   href="#">
                                <img src={Facebook} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Twitter} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="our-groomers-card" data-aos="zoom-out-up" data-aos-delay="350" data-aos-duration="1000">
                        <div className="our-groomers-card-main-img">
                            <img src={OurGroomers4} width="274" height="286" alt="" />
                            <img className="our-groomers-card-bg-img" src={Ellipse} alt="" />
                        </div>

                        <span className="person-positions">
                        Pet Care Incharge
                        </span>

                        <h4 className="groomers-names">
                        Jameela
                        </h4>

                        <div className="groomers-social-profiles">
                            <a   href="#">
                                <img src={Facebook} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Twitter} alt="" />
                            </a>
                            <a   href="#">
                                <img src={Linkedin} alt="" />   
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurGroomers