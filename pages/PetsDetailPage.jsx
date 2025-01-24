import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import { Link } from "react-router-dom"
import UiChecksImg1 from "../src/assets/home-3/home3-pet-detail-page/pet-detail-ul-check1.png"
import UiChecksImg2 from "../src/assets/home-3/home3-pet-detail-page/pet-detail-ul-check2.png"
import UiChecksImg3 from "../src/assets/home-3/home3-pet-detail-page/pet-detail-ul-check3.png"
import UiChecksImg4 from "../src/assets/home-3/home3-pet-detail-page/pet-detail-ul-check4.png"
import UiChecksImg5 from "../src/assets/home-3/home3-pet-detail-page/pet-detail-ul-check5.png"
import UiChecksImg6 from "../src/assets/home-3/home3-pet-detail-page/pet-detail-ul-check6.png"
import UiChecksImg7 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img.png"
import UiChecksImg8 from "../src/assets/home-3/home3-pet-detail-page/adoptapet.png"

import BottomImg from "../src/assets/home-3/home3-pet-detail-page/PetsDetailPagebottom-img.png"

const PetsDetailPage = () => {
  return (
    <>
    <Home3Header />

    <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Golden Retriever
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                            <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Pet Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="Pets-Detail-Page-Know-more-about-pets">
        <div className="container">
            <div className="row">
                <div className="col-xxl-5">
                    <div className="Pets-Detail-Page-Know-more-about-card">
                        <img src={UiChecksImg8} alt="" className="adopt-pet-img" />
                        <div className="Pets-Detail-Page-Know-more-about-card-img">
                            <img src={UiChecksImg7} alt="" />
                        </div>

                        <h4 className="PetsDetailPage-Knowmore-about-card-tit">
                        Golden Retriever
                        </h4>
                        <div className="row">
                                <div className="col-sm-6">
                                    <ul className="PetsDetailPage-Knowmore-about-ul-checks">
                                        <li>
                                          <img src={UiChecksImg1} alt="" />
                                          <span>Name :</span>
                                          <p> Berry</p>
                                        </li>
                                        <li>
                                          <img src={UiChecksImg2} alt="" />
                                          <span>Age :</span>
                                          <p> 3 months</p>
                                        </li>
                                        <li>
                                          <img src={UiChecksImg3} alt="" />
                                          <span>Gender :</span>
                                          <p> Male</p>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="col-sm-6">
                                    <ul className="PetsDetailPage-Knowmore-about-ul-checks">
                                        <li>
                                          <img src={UiChecksImg4} alt="" />
                                          <span>Size :</span>
                                          <p> 20 Lbs (12kg)</p>
                                        </li>
                                        <li>
                                          <img src={UiChecksImg5} alt="" />
                                          <span>Color :</span>
                                          <p> Golden</p>
                                        </li>
                                        <li>
                                          <img src={UiChecksImg6} alt="" />
                                          <span>ID :</span>
                                          <p> 12345678</p>
                                        </li>
                                    </ul>
                                    
                                </div>
                        </div>

                        <a className="PetsDetailPage-Knowmore-about-card-btn" href="#">Adopt Now</a>
                    </div>
                </div>

                <div className="col-xxl-7">
                    <div className="Know-more-about-Berry-cont-wrap">
                        <h3 className="Know-more-about-Berry-cont-main-tit">
                        Know more about <b>Berry</b>
                        </h3>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.Nulla lacus libero, ornare nec iaculis ut, aliquet ut libero sque feugiat rhoncus sapien, id tempor quam pretium ac. Nam orna massa quis tempus. Sed eget ligula ut nibh fring</p>

                        <ul className="Know-more-about-Berry-cont-ul-checks">
                            <li>
                                <h4>
                                Molestie nunc non blandit massa
                                </h4>
                                <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>
                            </li>
                            <li>
                                <h4>
                                Molestie nunc non blandit massa
                                </h4>
                                <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>
                            </li>
                            <li>
                                <h4>
                                Molestie nunc non blandit massa
                                </h4>
                                <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="Pets-Detail-Page-Know-more-contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="home3-contact-us-form-card">
                        <h4 className="home3-contact-us-form-card-tit">Request an <b>Adoption</b></h4>
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

                        <a className="home3-contact-us-form-card-btn" href="">Send Message</a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section className="PetsDetailPage-bottom-img">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img src={BottomImg} alt="" />
                </div>
            </div>
        </div>
    </section>


    <Home3Footer />
    </>
  )
}

export default PetsDetailPage