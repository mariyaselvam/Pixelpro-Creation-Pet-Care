
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import AboutUsSec from "../components/AboutUsSec"
import GetEveryPetFoodsSec from "../components/GetEveryPetFoodsSec"
import WhatWeDo from "../components/WhatWeDo"
import OurGroomers from "../components/OurGroomers"
import ClientsFeedback from "../components/ClientsFeedback"
import SubscribeNewsletter from "../components/SubscribeNewsletter"
import BlogSec from "../components/blogSec"
import Footer from "../components/Footer"
// import AOS from "aos"

// import 'aos/dist/aos.css'; 
// ..
// AOS.init();


import '../styles/style.css'
import "../styles/page1-res.css"
import "../styles/page1-mob-view.css"

const Home = () => {
  // <script>
  // AOS.init();
  // </script>




  return (
    <>
    <div className="page1-wrap">
    <Header />
    <HomeBanner />
    <AboutUsSec />
    <GetEveryPetFoodsSec />
    <WhatWeDo />
    <OurGroomers />
    <ClientsFeedback />
    <SubscribeNewsletter />
    <BlogSec />
    <Footer />
    </div>
    </>
  )
}

export default Home