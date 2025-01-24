import SafeaAndGoodHandsimg1 from "../src/assets/home-2/SafeaAndGoodHands/home2-SafeaAndGoodHands.png"

const SafeaAndGoodHands = () => {
  return (
    <>
    <section className="home2-SafeaAndGoodHands-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="home2-SafeaAndGoodHands-main-img">
               <img src={SafeaAndGoodHandsimg1} alt="" />
            </div>
            
          </div>
          <div className="col-xl-6">
            <div className="home2-SafeaAndGoodHands-cont">
              <h3 className="home2-SafeaAndGoodHands-cont-tit">
              Your Pets are in Very <b>Safe & Good</b> Hands
              </h3>

              <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>

              <ul className="home2-SafeaAndGoodHands-cont-small-card">
                  <li>
                    <h3>Our Vision</h3>
                    <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor.</p>
                    </li>
                  <li>
                    <h3>Our Mission</h3>
                    <p>Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>
                  </li>
              </ul>

              <a href="#" className="home2-SafeaAndGoodHands-cont-btn">
              View Details
              </a>
            </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SafeaAndGoodHands