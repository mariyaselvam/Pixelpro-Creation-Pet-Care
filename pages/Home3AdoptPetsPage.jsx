import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
// import Home3DetailBanner from "../components-home3/Home3DetailBanner"
// import Home3BlogPageListingCards from "../components-home3/Home3BlogPageListingCards"
import Img1 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img.png"
import Img2 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img1.png"
import Img3 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img2.png"
import Img4 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img3.png"
import Img5 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img4.png"
import Img6 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img5.png"
import Img7 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img6.png"
import Img8 from "../src/assets/home-3/Home3-Adopt-Pets/Home3-Adopt-Pets-main-img7.png"
import { Link } from "react-router-dom"


const Home3AdoptPetsPage = () => {
  return (
         <>
         <Home3Header />
         <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Adopt Pets
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                             <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Adopt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         </section>

         <section className="Home3-Adopt-Pets-Page-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                            <Link to="/petsdetailpage">
                            <img src={Img1} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage">
                            <img src={Img2} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage" >
                            <img src={Img3} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage" >
                            <img src={Img4} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage" >
                            <img src={Img5} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage" >
                            <img src={Img6} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage" >
                            <img src={Img7} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="Home3-Adopt-Pets-Page-sec-card">
                           <div className="Home3-Adopt-Pets-main-img">
                           <Link to="/petsdetailpage" >
                            <img src={Img8} alt="" />
                            </Link>
                           </div>
                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-tit">
                           Golden Retriever
                           </Link>

                           <ul className="gender-nd-age">
                            <li>
                            <span className="Gender">Gender :</span>
                            <p>Male</p>
                            </li>
                            <li>
                            <span className="pet-Age">Age :</span>
                            <p>3 Months</p>
                            </li>
                           </ul>

                           <Link to="/petsdetailpage" className="Home3-Adopt-Pets-main-btn" href="#">
                           Adopt Now
                           </Link>
                        </div>
                    </div>
                </div>
                
            </div>
         </section>


         <Home3Footer />
         
         </>
  )
}

export default Home3AdoptPetsPage