import Img1 from "../src/assets/home-2/Providing-the-Best-Service/Providing-the-Best-Service-ul-img.png"
import Img2 from "../src/assets/home-2/Providing-the-Best-Service/Providing-the-Best-Service-ul-img1.png"

const ProvidingtheBestService = () => {
  return (
    <>
    <section className="Providing-the-Best-Service-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                    <div className="Providing-the-Best-Service-sec-cont">
                        <h3 className="Providing-the-Best-Service-sec-cont-tit">
                        Providing the <b>Best Service</b> for Your Pets
                        </h3>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>

                        <ul className="Providing-the-Best-Service-ul-checks">
                            <li>
                                <img src={Img1} alt="" />
                                <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>    
                            </li>
                            <li>
                                <img src={Img2} alt="" />
                                <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>    
                            </li>
                        </ul>
                      
                       <a href="#" className="Providing-the-Best-Service-sec-btn">
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

export default ProvidingtheBestService