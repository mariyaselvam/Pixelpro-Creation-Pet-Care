import iocn from "../src/assets/home/banner-and-header/Call-Us.svg"


const HomeBanner = () => {
  return (
    <>
    <section className="home-banner-sec">
        <div className="container ">
            <div className="row ">
              <div className="col-lg-6 ">
                <div className="home-banner-cont-card">
                    <span   className="home-banner-mini-tit" data-aos="fade-up"  data-aos-duration="3000">
                    Enjoy your <span>vacation</span>
                    </span>
                    <h1 className="home-banner-main-tit" data-aos="fade-up" data-aos-duration="1000">
                    The World Best Team For <b>Pet Care</b> Service
                    </h1>

                    <div>
                        <div className="Appointment-nd-contact-btn">
                            <a className="make-appointment-btn" href="#">Make Appointment</a>
                            <a href="#" className="Call-Us-btn">Call Us <img src={iocn} alt="" /></a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeBanner