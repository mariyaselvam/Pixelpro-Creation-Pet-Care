import React, { useRef, useState } from 'react';

import SwiperProfile from "../src/assets/home/clients-feedback/swiper-profile.png"


import profile1 from "../src/assets/home/clients-feedback/profile-1.jpg";
import profile2 from "../src/assets/home/clients-feedback/profile-2.jpg";
import profile3 from "../src/assets/home/clients-feedback/profile-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const ClientsFeedback = () => {
    
  return (
    <>
    <section className="clients-feedback-sec">
    <div className="clients-feedback-tit-wraper">
            <h3 className='clients-feedback-main-tit'>Clients <b>Feedback</b>.</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="swiper-custom-container">

                      
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
      >
                    <SwiperSlide>
                        <div className="swiper-Slide-card" data-aos="zoom-out-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className="swiper-Slide-inner-card" data-aos="flip-left" data-aos-delay="1000" data-aos-duration="2000">
                            <div className="swiper-Slide-inner-img">
                              <img src={profile1} alt="" />
                            </div>
                            <h4 className="swiper-Slide-tit" >
                            Rocky Dixon
                            </h4>
                            <p>Enim nec dui nunc mattis enim ut. Tincidunt vitae semper quis lectus nulla. Venenatis tellus in metus vulputate eu scelerisque.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Slide-card">
                        <div className="swiper-Slide-inner-card">
                            <div className="swiper-Slide-inner-img">
                              <img src={profile2} alt="" />
                            </div>
                            <h4 className="swiper-Slide-tit">
                            Mason Ryder
                            </h4>
                            <p>Enim nec dui nunc mattis enim ut. Tincidunt vitae semper quis lectus nulla. Venenatis tellus in metus vulputate eu scelerisque.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Slide-card">
                        <div className="swiper-Slide-inner-card">
                            <div className="swiper-Slide-inner-img">
                              <img src={profile3} alt="" />
                            </div>
                            <h4 className="swiper-Slide-tit">
                            Jesse Steele
                            </h4>
                            <p>Enim nec dui nunc mattis enim ut. Tincidunt vitae semper quis lectus nulla. Venenatis tellus in metus vulputate eu scelerisque.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                   </Swiper>
             
                   
                    {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div> */}

                <div className="swiper-pagination"></div>

                
                </div>      
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
  
}



export default ClientsFeedback