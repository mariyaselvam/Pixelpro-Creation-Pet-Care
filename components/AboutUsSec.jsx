import Img1 from "../src/assets/home/about-us/about-us-sec-mainimg.png"

const AboutUsSec = () => {
  return (
    <>
    <section className="about-us-sec">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                 <div className="about-us-sec-main-img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                    <img width="646" height="637" src={Img1} alt="" />
                 </div>
                </div>
                <div className="col-xl-6">
                 <div className="about-us-sec-contant-home" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                    <span className="abt-us-mini-tit">
                    About Us
                    </span>
                    <h2 className="abt-us-main-tit">
                    For your pet’s natural <b>life</b> & <b>care</b>
                    </h2>

                    <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

                    <ul className="abt-us-sec-check-box">
                        <li>Certified Groomers</li>
                        <li>Animal Lovers</li>
                        <li>14+ Years Experience</li>
                        <li>Loveable Sitters</li>
                    </ul>

                    <a className="abt-us-read-more-btn" href="#">Read more</a>

                 </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUsSec