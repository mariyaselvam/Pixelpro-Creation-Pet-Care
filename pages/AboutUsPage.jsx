import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import WhatWeOffer from "../components-home3/WhatWeOffer"
import SafeaAndGoodHandsimg1 from "../src/assets/home-2/SafeaAndGoodHands/home2-SafeaAndGoodHands.png"
import MainImg from "../src/assets/home-3/about-page/Why-DC-Care-img.png"
import { Link } from "react-router-dom"


const AboutUsPage = () => {
  return (
    <>
    <Home3Header />
    <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        About us
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                        <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <WhatWeOffer />

   <section className="home2-AboutUsPage-sec ">
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
            <div className="home2-SafeaAndGoodHands-cont">
              <h3 className="home2-AboutUsPage-cont-tit">
              Your Pets are in Very <b>Safe & Good</b> Hands
              </h3>

              <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

              <ul className="home2-SafeaAndGoodHands-cont-small-card">
                  <li>
                    <h3>Our Vision</h3>
                    <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor.</p>
                    </li>
                  <li>
                    <h3>Our Mission</h3>
                    <p>Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>
                  </li>
              </ul>

              <a href="#" className="home2-AboutUsPage-cont-btn">
              View Details
              </a>
            </div>
            </div>
            <div className="col-lg-5">
            <div className="home2-SafeaAndGoodHands-main-img">
               <img src={SafeaAndGoodHandsimg1} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <section className="About-DC-Care-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="About-DC-Care-main-img">
                        <img src={MainImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="About-DC-Care-cont-wrap">
                        <span className="About-DC-Care-cont-mini-tit-1">
                         
                        Why <b>DC Care</b>
                        </span>

                        <h3 className="About-DC-Care-cont-main-tit-1">
                        The pets lives for the day, the hour, even the  movement.
                        </h3>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

                        <div className="banner-btn-wraper">
                        <a href="#" className="primary-btn">Our Service</a>
                        <a href="#" className="secondary-btn" >About Us</a>
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

export default AboutUsPage