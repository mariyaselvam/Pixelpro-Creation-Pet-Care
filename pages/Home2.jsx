import Header from "../components-home2/Header"
import Banner from "../components-home2/Banner"
import Home2petFoods from "../components-home2/Home2petFoods"
import PetsLives from "../components-home2/PetsLives"
import SafeaAndGoodHands from "../components-home2/SafeaAndGoodHands"
import TheBestTrainingYourPets from "../components-home2/TheBestTrainingYourPets"
import WhatOurCustomerSay from "../components-home2/WhatOurCustomerSay"
import ProvidingtheBestService from "../components-home2/ProvidingtheBestService"
import Home2MeetOurTeam from "../components-home2/home2MeetOurTeam"
import Home2Footer from "../components-home2/Home2Footer"
import "../styles/page2.css"
import "../styles/page2-res.css"
import "../styles/page2-mob-view.css"

const Home2 = () => {
  return (
    <>
    <div className="page2-wrap">
    <Header />
    <Banner />
    <Home2petFoods />
    <PetsLives />
    <SafeaAndGoodHands />
    <TheBestTrainingYourPets />
    <WhatOurCustomerSay />
    <ProvidingtheBestService />
    <Home2MeetOurTeam />
    <Home2Footer />
    </div>
    </>
  )
}

export default Home2