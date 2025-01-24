
import Img1 from "../src/assets/home-3/Home3BlogSec/Blog-img-1.png"
import Img2 from "../src/assets/home-3/Home3BlogSec/Blog-img-2.png"
import Img3 from "../src/assets/home-3/Home3BlogSec/Blog-img-3.png"
import Img4 from "../src/assets/home-3/Home3BlogSec/Blog-img-4.png"
import Img5 from "../src/assets/home-3/Home3BlogSec/Blog-img-5.png"
import Img6 from "../src/assets/home-3/Home3BlogSec/Blog-img-6.png"


import Author1 from "../src/assets/home-3/Home3BlogSec/pro-1.png"
import Author2 from "../src/assets/home-3/Home3BlogSec/pro-2.png"
import Author3 from "../src/assets/home-3/Home3BlogSec/pro-3.png"
import Author4 from "../src/assets/home-3/Home3BlogSec/pro-4.png"
import Author5 from "../src/assets/home-3/Home3BlogSec/pro-5.png"
import Author6 from "../src/assets/home-3/Home3BlogSec/pro-6.png"
import { Link } from "react-router-dom"


const Home3BlogPageListingCards = () => {
  return (
    <>
     <section className="home3-Our-Blogs-sec">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <div className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                            <Link to="/BlogListingpage" >
                            <img src={Img1} alt="" />
                            </Link>
                        </div>
                        <Link to="/BlogListingpage" className="home-3-blog-mini-tit">Breeding</Link>

                        <Link to="/BlogListingpage" className="home-3-blog-main-tit">
                        24/7 vet care, grooming, and specialized treatments.
                        </Link>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <Link to="/BlogListingpage">
                                <img src={Author1} alt="" />
                                <h4>Eleanor Pena</h4>
                                </Link>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <div  href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                          <Link to="/BlogListingpage" >
                            <img src={Img2} alt="" />
                            </Link>
                        </div>
                        <Link to="/BlogListingpage" className="home-3-blog-mini-tit">Breeding</Link>

                        <Link to="/BlogListingpage" className="home-3-blog-main-tit">
                        Comprehensive veterinary care with wellness plans
                        </Link>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <Link to="/BlogListingpage" >
                                <img src={Author2} alt="" />
                                <h4>Kathryn Murphy</h4>
                                </Link>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <div href=" #" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                           <Link to="/BlogListingpage" >
                            <img src={Img3} alt="" />
                            </Link>
                        </div>
                        <Link to="/BlogListingpage" className="home-3-blog-mini-tit">Breeding</Link>

                        <Link to="/BlogListingpage" className="home-3-blog-main-tit">
                        High-quality, human-grade, natural pet food and treats.
                        </Link>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <Link to="/BlogListingpage"  >
                                <img src={Author3} alt="" />
                                <h4>Brooklyn Simmons</h4>
                                </Link>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <div href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                            <Link to="/BlogListingpage" >
                            <img src={Img4} alt="" />
                            </Link>
                        </div>
                        <Link to="/BlogListingpage" className="home-3-blog-mini-tit">Breeding</Link>

                        <Link to="/BlogListingpage" className="home-3-blog-main-tit">
                        Expert vet care for reptiles, birds, and exotic pets.
                        </Link>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <Link to="/BlogListingpage" >
                                <img src={Author4} alt="" />
                                <h4>Arlene McCoy</h4>
                                </Link>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <div href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                           <Link to="/BlogListingpage" >
                            <img src={Img5} alt="" />
                            </Link>
                        </div>
                        <Link to="/BlogListingpage" className="home-3-blog-mini-tit">Breeding</Link>

                        <Link to="/BlogListingpage" className="home-3-blog-main-tit">
                        UK pet services (walking, sitting, holiday care),
                        </Link>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <Link to="/BlogListingpage">
                                <img src={Author5} alt="" />
                                <h4>Courtney Henry</h4>
                                </Link>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <div href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                           <Link to="/BlogListingpage" >
                            <img src={Img6} alt="" />
                            </Link>
                        </div>
                        <Link to="/BlogListingpage" className="home-3-blog-mini-tit">Breeding</Link>

                        <Link to="/BlogListingpage" className="home-3-blog-main-tit">
                        grooming, daycare, and training.
                        </Link>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div> 
                                <Link to="/BlogListingpage">
                                <img src={Author6} alt="" />
                                <h4>Darrell Steward</h4>
                                </Link>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Home3BlogPageListingCards