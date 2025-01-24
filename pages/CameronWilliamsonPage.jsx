import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import BlogDetailPageSideBar from "../components-blog-detail/BlogDetailPageSideBar"
import BlogMainImg from "../src/assets/home-3/Cameron-Williamson/cameron-williamson-1.png"
import BlogMainIm1 from "../src/assets/home-3/Cameron-Williamson/home3-blog-detail-page-img.png"
import { Link } from "react-router-dom"

const CameronWilliamsonPage = () => {
  return (
    <>
    <Home3Header />
         <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Cameron Williamson
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                            <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Sitter Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         </section>

         <section className="home3-blog-detail-page-cont-n-sidebar">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8">

                   <div className="home3-blog-detail-page-main-img">
                    <img src={BlogMainImg} alt="" />
                   </div>

                   <div className="breed-food-enjoy">
                    <a href="#" className="bread-span">Breeding</a>
                    <a href="#" className="Food-span">Food</a>
                    <a href="#" className="Enjoy-span">Enjoy</a>
                    <a href="#" className="Playing-span">Playing</a>
                   </div>

                   <p>Neque convalliscras semper auctor neque vitae. Suspendisse faucibus interdum posuere lorem ipsum dolor. Leo inter Ut placerat orci nulla Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pellentesque dignissim.Ac ut consequat semper viverra nam libero justo. Id leo in vitae turpis massa sed elementum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Urna neque viverra justo nec ultrices dui sapien. Non quam lacus suspendisse faucibus interdum posuere. Magna fringilla urna porttitor rhoncus dolor purus non. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Metus aliquam eleifend mi in nulla posuere. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Laoreet non curabitur gravida arcu ac tortor dignissim.</p>


                 <ul className="home3-blog-detail-page-ul-checks">
                    <li>Id faucibus nisl tincidunt eget nullam non nisi est sit.</li>
                    <li>Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nisl rhoncus mattis rhoncus urna neque.</li>
                    <li>Sed blandit libero volutpat sed cras. Nec nam aliquam sem et tortor consequat id porta.</li>
                    <li>Vulputate enim nulla aliquet porttitor. Magna sit amet purus gravida. Malesuada nunc vel risus commodo.</li>
                 </ul>

                   <p className="home3-blog-detail-page-para">Neque convalliscras semper auctor neque vitae. Suspendisse faucibus interdum posuere lorem ipsum dolor. Leo inter
                   Ut placerat orci nulla Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pellentesque dignissim.Ac ut consequat semper viverra nam libero justo. Id leo in vitae turpis massa sed elementum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Urna neque viverra justo nec ultrices dui sapien. Non quam lacus suspendisse faucibus interdum posuere. Magna fringilla urna porttitor rhoncus dolor purus non. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Metus aliquam eleifend mi in nulla posuere. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Laoreet non curabitur gravida arcu ac tortor dignissim.</p>


                   <div className="home3-blog-detail-page-img-nd-form">
                    <div className="home3-blog-detail-page-form-img">
                        <img src={BlogMainIm1} alt="" />
                    </div>
                    <div className="blog-detail-comment-form">

                   <h4 className="blog-detail-comment-form-tit">Contact me</h4>

                   <input placeholder="First Name" className="first-name-blog" type="text" name="" id="" />

                   <input placeholder="Email" className="email-for-blog" type="email" name="" id="" />

                   <textarea className="blog-detail-comment-text-area" placeholder="Message" name="" id=""  rows="3"></textarea>

                   <a className="blog-detail-comment-form-btn" href="">Make appointment</a>
                   </div>
                   </div>

                </div>

                <div className="col-xxl-4">
               <BlogDetailPageSideBar />
                </div>
            </div>
        </div>
    </section>


    <Home3Footer />
    </>
  )
}

export default CameronWilliamsonPage