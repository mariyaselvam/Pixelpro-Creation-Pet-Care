import React from 'react'
import MainImg from "../src/assets/home/get-every-pet-foods/get-every-pet-foods-main.png"
import PetVideo from "../src/assets/home/get-every-pet-foods/pet-video.mp4"
import Thumpnail from "../src/assets/home/get-every-pet-foods/cite-baby-playing-width-dog.png"


import VideoPause from "../src/assets/home/get-every-pet-foods/home-video-pusue.svg"

const GetEveryPetFoodsSec = () => {
  return (
    <>
    <section className="get-every-pet-foods-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="get-every-pet-foods-cont">
                    <h3 className="get-every-pet-foods-main-tit">
                    <div>Get Every Pet </div><b>Foods</b> & <b>Toys Here.</b>
                    </h3>

                    <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

                    <a href="#" className="get-every-pet-foods-btn">
                    Shop Now
                    </a>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="get-every-pet-foods-img">
                     <video id="video1" src={PetVideo} poster={Thumpnail} preload="auto" controls></video>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GetEveryPetFoodsSec