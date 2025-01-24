import MainImg from "../src/assets/home-2/WhatOurCustomerSay/WhatOurCustomerSay-main-img.png"

import Stars from "../src/assets/home-2/WhatOurCustomerSay/Star.svg" 
import User1 from "../src/assets/home-2/WhatOurCustomerSay/User.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const WhatOurCustomerSay = () => {
  return (
    <>
    <section className="What-Our-Customer-Say-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="What-Our-Customer-Say-img">
              <img src={MainImg} alt="" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="What-Our-Customer-Say-cont">
              <h4 className="What-Our-Customer-Say-img-tit">
              What Our <b>Customer</b> Say
              </h4>

              <div className="What-Our-Customer-Say-swiper-wraper">
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-nexT"></div> */}
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 <SwiperSlide>
                  <div className="What-Our-Customer-Say-swiper-card">
                
                 <div className="What-Our-Customer-Say-swiper-top">
                 <div className="What-Our-Customer-Say-swiper-profile-img">
                    <img src={User1} alt="" />
                  </div>

                  <div className="What-Our-Customer-Say-swiper-tits">

                  <h4 className="What-Our-Customer-Say-swiper-name">
                  John Martin
                  </h4>

                  <span className="What-Our-Customer-Say-swiper-position" >Restoration Company</span>
                  </div>

                 </div>

                 <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                 <div className="What-Our-Customer-Say-star-img">
                 <img src={Stars} alt="" />
                 </div>

                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="What-Our-Customer-Say-swiper-card">
                
                 <div className="What-Our-Customer-Say-swiper-top">
                 <div className="What-Our-Customer-Say-swiper-profile-img">
                    <img src={User1} alt="" />
                  </div>

                  <div className="What-Our-Customer-Say-swiper-tits">

                  <h4 className="What-Our-Customer-Say-swiper-name">
                  John Martin
                  </h4>

                  <span className="What-Our-Customer-Say-swiper-position" >Restoration Company</span>
                  </div>

                 </div>

                 <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                 <div className="What-Our-Customer-Say-star-img">
                 <img src={Stars} alt="" />
                 </div>

                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="What-Our-Customer-Say-swiper-card">
                
                 <div className="What-Our-Customer-Say-swiper-top">
                 <div className="What-Our-Customer-Say-swiper-profile-img">
                    <img src={User1} alt="" />
                  </div>

                  <div className="What-Our-Customer-Say-swiper-tits">

                  <h4 className="What-Our-Customer-Say-swiper-name">
                  John Martin
                  </h4>

                  <span className="What-Our-Customer-Say-swiper-position" >Restoration Company</span>
                  </div>

                 </div>

                 <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                 <div className="What-Our-Customer-Say-star-img">
                 <img src={Stars} alt="" />
                 </div>

                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="What-Our-Customer-Say-swiper-card">
                
                 <div className="What-Our-Customer-Say-swiper-top">
                 <div className="What-Our-Customer-Say-swiper-profile-img">
                    <img src={User1} alt="" />
                  </div>

                  <div className="What-Our-Customer-Say-swiper-tits">

                  <h4 className="What-Our-Customer-Say-swiper-name">
                  John Martin
                  </h4>

                  <span className="What-Our-Customer-Say-swiper-position" >Restoration Company</span>
                  </div>

                 </div>

                 <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                 <div className="What-Our-Customer-Say-star-img">
                 <img src={Stars} alt="" />
                 </div>

                  </div>
                  </SwiperSlide>
              </Swiper>

              
              {/* <div className="swiper-button-prev"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhatOurCustomerSay