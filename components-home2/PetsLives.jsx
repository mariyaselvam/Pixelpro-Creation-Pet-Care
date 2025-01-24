import Home2PetsLivesMain1 from "../src/assets/home-2/Pets-lives/home2-pets-lives-main-img.png"

const PetsLives = () => {
  return (
    <>
    <section className="home2-pets-lives-sec">
        <div className="container">
            <div className="row">
                    <div className="col-xl-6">
                    <div className="home2-pets-lives-cont-wrap">
                    <h2 className="home2-pets-lives-main-tit">
                        The <b>pets lives</b> for the day, the hour, even the movement.
                        </h2>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

                        <div className="home2-pets-lives-btn-wrap">
                            <a href="#" className="home2-pets-lives-btn">Our Service</a>
                        <a href="#" className="home2-pets-lives-btn1">Schedule Service 
                            
                            {/* <img src="../src/assets/The-pets-lives-day/chevron-right.svg" alt="" /> */}
                            
                             </a></div>
                    </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="home2-pets-lives-main-img">
                            <img src={Home2PetsLivesMain1} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PetsLives