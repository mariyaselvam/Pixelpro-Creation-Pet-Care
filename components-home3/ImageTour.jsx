import Img1 from "../src/assets/home-3/Image-Tour/img1.png"
import Img2 from "../src/assets/home-3/Image-Tour/img2.png"
import Img3 from "../src/assets/home-3/Image-Tour/img3.png"
import Img4 from "../src/assets/home-3/Image-Tour/img4.png"
import Img5 from "../src/assets/home-3/Image-Tour/img5.png"
import Img6 from "../src/assets/home-3/Image-Tour/img6.png"
import Img7 from "../src/assets/home-3/Image-Tour/img7.png"
import Img8 from "../src/assets/home-3/Image-Tour/img8.png"
import Img9 from "../src/assets/home-3/Image-Tour/img9.png"

import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const ImageTour = () => {
  return (
    <>
    <section className="Image-Tour-sec">
    <div className="home3-What-We-Offer-tit-wraper">

                <h3 className="home3-What-We-Offer-mini-tit home3-What-We-Offer-main-tit-1">Image<b>Tour</b></h3>

    </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="Image-Tour-img-wrap">
                 <div className="Image-Tour-img-wrap-col-1">
                    <div className="Image-Tour-imgs Tourimg1">
                        <ReactFancyBox
                          thumbnail={Img1}
                          image={Img1} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg2">
                    <ReactFancyBox
                          thumbnail={Img2}
                          image={Img2} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg3">
                    <ReactFancyBox
                          thumbnail={Img3}
                          image={Img3} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg4">
                    <ReactFancyBox
                          thumbnail={Img9}
                          image={Img9} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg5">
                       <ReactFancyBox
                          thumbnail={Img4}
                          image={Img4} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg6">
                         <ReactFancyBox
                          thumbnail={Img5}
                          image={Img5} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg7">
                         <ReactFancyBox
                          thumbnail={Img9}
                          image={Img9} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg8">
                         <ReactFancyBox
                          thumbnail={Img6}
                          image={Img6} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg9">
                           <ReactFancyBox
                          thumbnail={Img7}
                          image={Img7} />
                    </div>
                    <div className="Image-Tour-imgs Tourimg10">
                        <ReactFancyBox
                          thumbnail={Img8}
                          image={Img8} />
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

export default ImageTour