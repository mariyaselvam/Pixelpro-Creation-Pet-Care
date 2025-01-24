import Img1 from "../src/assets/blog/blog-swiper-img-1.png"
import Img2 from "../src/assets/blog/blog-swiper-img-2.png"
import Img3 from "../src/assets/blog/blog-swiper-img-3.png"

import { Link } from "react-router-dom";

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';


// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const BlogSec = () => {
  return (
    <>
    <section className="blog-section-home">
        <div className="container">
        <div className="container">
        <div className="home-blog-card-tit-wraper">
            <h3 className='clients-feedback-main-tit1'>News   <b> & </b> Feeds</h3>
        </div>
      </div>
            <div className="row">
            <div className="swiper-wrap-home">
            <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <Link to="/BlogListingpage">
              <img src={Img1} alt="" />
              </Link>
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By <Link to="/BlogListingpage">Admin</Link></span>
              <div className="span-pet-care">
                <Link to="/BlogListingpage">Pet,</Link>
                <Link to="/BlogListingpage">Care,</Link>
                <Link to="/BlogListingpage">Medical</Link>
                </div>
            </div>
           <Link to="/BlogListingpage" className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </Link>
           <Link to="/BlogListingpage" className="blog-swiper-card-read-more-btn">Read more</Link>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
             <Link to="/BlogListingpage">
              <img src={Img2} alt="" />
              </Link>
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By <a href="#">Admin</a></span>
              <div className="span-pet-care">
                <a href="#">Pet,</a>
                <a href="#">Care,</a>
                <a href="#">Medical</a>
                </div>
            </div>
            <Link to="/BlogListingpage" className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </Link>

           <Link to="/BlogListingpage" className="blog-swiper-card-read-more-btn">Read more</Link>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <Link to="/BlogListingpage">
              <img src={Img3} alt="" />
              </Link>
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By <a href="#">Admin</a></span>
              <div className="span-pet-care">
                <a href="#">Pet,</a>
                <a href="#">Care,</a>
                <a href="#">Medical</a>
                </div>
            </div>
            <Link to="/BlogListingpage" className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </Link>
           <Link to="/BlogListingpage" className="blog-swiper-card-read-more-btn">Read more</Link>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <Link to="/BlogListingpage">
              <img src={Img1} alt="" />
              </Link>
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By <a href="#">Admin</a></span>
              <div className="span-pet-care">
                <a href="#">Pet,</a>
                <a href="#">Care,</a>
                <a href="#">Medical</a>
                </div>
            </div>
            <Link to="/BlogListingpage" className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </Link>
           <Link to="/BlogListingpage" className="blog-swiper-card-read-more-btn">Read more</Link>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
            <Link to="/BlogListingpage">
              <img src={Img2} alt="" />
              </Link>
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By <a href="#">Admin</a></span>
              <div className="span-pet-care">
                <a href="#">Pet,</a>
                <a href="#">Care,</a>
                <a href="#">Medical</a>
                </div>
            </div>
            <Link to="/BlogListingpage" className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </Link>

           <Link to="/BlogListingpage" className="blog-swiper-card-read-more-btn">Read more</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <Link to="/BlogListingpage">
              <img src={Img3} alt="" />
              </Link>
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By <a href="#">Admin</a></span>
              <div className="span-pet-care">
                <a href="#">Pet,</a>
                <a href="#">Care,</a>
                <a href="#">Medical</a>
                </div>
            </div>
            <Link to="/BlogListingpage" className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </Link>

           <Link to="/BlogListingpage" className="blog-swiper-card-read-more-btn">Read more</Link>

          </div>
        </SwiperSlide>
      </Swiper>

           </div>

       <div className="mySwiper"></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogSec