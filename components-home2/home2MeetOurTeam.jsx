import Img1 from "../src/assets/home-2/home2-Meet-Our-team/home2-Meet-Our-im1.jpg"
import Img2 from "../src/assets/home-2/home2-Meet-Our-team/home2-Meet-Our-im2.png"
import Img3 from "../src/assets/home-2/home2-Meet-Our-team/home2-Meet-Our-im3.png"

import Img4 from "../src/assets/home-2/home2-Meet-Our-team/behance.svg"
import Img5 from "../src/assets/home-2/home2-Meet-Our-team/dribbble.svg"
import Img6 from "../src/assets/home-2/home2-Meet-Our-team/linkedin.svg"
import Img7 from "../src/assets/home-2/home2-Meet-Our-team/twitter.svg"


const Home2MeetOurTeam = () => {
  return (
    <>
    <section className="home2-Meet-Our-Team-sec">
        <h3 className="home2-Meet-Our-Team-main-tit">
        Meet <b>Our Team</b>
        </h3>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="home2-Meet-Our-Team-sec-card">
                        <div className="home2-Meet-Our-Team-sec-card-img home2-Meet-Our-Team-sec-card-img1">
                            <img src={Img1} alt="" />
                        </div>
                       <h4 className="home2-Meet-Our-Team-name">
                       Sierra Blake

                       </h4>

                       <span>CEO</span>

                       <div className="home2-Meet-Our-Team-card-social-links">
                        <a href="#"><img src={Img4} alt="" /></a>
                        <a href="#"><img src={Img5} alt="" /></a>
                        <a href="#"><img src={Img6} alt="" /></a>
                        <a href="#"><img src={Img7} alt="" /></a>
                       </div>



                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home2-Meet-Our-Team-sec-card">
                        <div className="home2-Meet-Our-Team-sec-card-img">
                            <img src={Img2} alt="" />
                        </div>
                       <h4 className="home2-Meet-Our-Team-name">
                       Skylar Quinn
                       </h4>

                       <span>Manager</span>

                       <div className="home2-Meet-Our-Team-card-social-links">
                        <a href="#"><img src={Img4} alt="" /></a>
                        <a href="#"><img src={Img5} alt="" /></a>
                        <a href="#"><img src={Img6} alt="" /></a>
                        <a href="#"><img src={Img7} alt="" /></a>
                       </div>



                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home2-Meet-Our-Team-sec-card">
                        <div className="home2-Meet-Our-Team-sec-card-img">
                            <img src={Img3} alt="" />
                        </div>
                       <h4 className="home2-Meet-Our-Team-name">
                       Ruby Harper
                       </h4>

                       <span>COO</span>

                       <div className="home2-Meet-Our-Team-card-social-links">
                        <a href="#"><img src={Img4} alt="" /></a>
                        <a href="#"><img src={Img5} alt="" /></a>
                        <a href="#"><img src={Img6} alt="" /></a>
                        <a href="#"><img src={Img7} alt="" /></a>
                       </div>



                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home2MeetOurTeam