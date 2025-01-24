import MainImg from "../src/assets/home-3/AboutDogCare/About-DC-Care-main-img.jpg"

const AboutDCCare = () => {
  return (
    <>
    <section className="About-DC-Care-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="About-DC-Care-main-img">
                        <img className="moveing-img" src={MainImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="About-DC-Care-cont-wrap">
                        <h3 className="About-DC-Care-cont-mini-tit About-DC-Care-cont-main-tit">
                        For your pet’s natural
                        <b> life </b> & <b> care </b>
                        </h3>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

                        <div className="banner-btn-wraper">
                        <a href="#" className="primary-btn">Our Service</a>
                        <a href="#" className="secondary-btn" >About Us</a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutDCCare