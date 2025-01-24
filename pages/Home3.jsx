import Home3Header from "../components-home3/Home3Header"
import Home3BannerSec from "../components-home3/Home3BannerSec"
import AboutDCCare from "../components-home3/AboutDCCare"
import WhatWeOffer from "../components-home3/WhatWeOffer"
import Home3Thepetslivesday from "../components-home3/Home3Thepetslivesday"
import ImageTour from "../components-home3/ImageTour"
import Home3Testimonial from "../components-home3/Home3Testimonial"
import Home3BlogsSec from "../components-home3/Home3BlogsSec"
import Home3Footer from "../components-home3/Home3Footer"


import "../styles/page3.css"
import "../styles/page3-res.css"
import "../styles/page3-mob-view.css"

const Home3 = () => {
  return (
    <>
    <div className="page3-wrap">
     <Home3Header />
     <Home3BannerSec />
     <AboutDCCare />
     <WhatWeOffer />
     <Home3Thepetslivesday />
     <ImageTour />
     <Home3Testimonial />
     <Home3BlogsSec />
     <Home3Footer />
     </div>
    </>
  )
}

export default Home3