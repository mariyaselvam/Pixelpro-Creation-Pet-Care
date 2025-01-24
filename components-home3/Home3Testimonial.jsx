import Starts from "../src/assets/home-3/Home3TestimonialCard/stars.png"


import PrifleImg1 from "../src/assets/home-3/Home3TestimonialCard/card-profile-2.png"
import PrifleImg2 from "../src/assets/home-3/Home3TestimonialCard/card-profile-1.png"
import PrifleImg3 from "../src/assets/home-3/Home3TestimonialCard/card-profile-3.png"


import Arrow from "../src/assets/common/w-down-arrow.png"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination  ,Navigation } from 'swiper/modules';

const Home3Testimonial = () => {
 
  const pagination = {
    clickable: true,
  };

  return (
    <>
    <section className="Home3-Testimonial-sec">

    <div className="home3-Testimonial-tit-wraper">
            {/* <span className="home3-Testimonial-mini-tit">Our <b>Service</b></span> */}
            <h3 className="home3-Testimonial-mini-tit home3-Testimonial-main-tit">Customers   <b> Words</b></h3>
    </div>

        <div className="container">
            <div className="row">
                <div className="Home3-Testimonial-swiper-wraper">
                <Swiper
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination , Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg1} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg2} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg3} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg1} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg2} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg3} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Testimonial