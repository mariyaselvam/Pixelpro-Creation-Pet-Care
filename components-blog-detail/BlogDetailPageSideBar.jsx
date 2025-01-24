import SideBarImg1 from  "../src/assets/home-3/blog-detail-page/side-bar-img1.png"
import SideBarImg2 from  "../src/assets/home-3/blog-detail-page/side-bar-img2.png"
import RecentPost1 from "../src/assets/home-3/blog-detail-page/side-bar-recent-posts1.png"
import RecentPost2 from "../src/assets/home-3/blog-detail-page/side-bar-recent-posts2.png"
import RecentPost3 from "../src/assets/home-3/blog-detail-page/side-bar-recent-posts3.png"
import RecentPost4 from "../src/assets/home-3/blog-detail-page/side-bar-recent-posts4.png"

import { Link } from "react-router-dom"


const BlogDetailPageSideBar = () => {
  return (
    <>
    <div className="home3-Blog-DetailPage-SideBar-wraper">
        <input className="home3-blog-blog-sidebar" placeholder="Search......" type="text" name="" id="" />
    </div>


    <div className="home3-blog-side-bar-recent-posts">
        <h5 className="home3-blog-side-bar-recent-posts-tit">Recent posts</h5>

        <div className="home3-blog-side-bar-recent-cards">
            <img src={RecentPost1} alt="" />

            <Link to="/BlogListingpage">Tips and tricks: Puppy’s First Grooming</Link>
        </div>

        <div className="home3-blog-side-bar-recent-cards">
            <img src={RecentPost2} alt="" />

            <Link to="/BlogListingpage">Tips and tricks: Puppy’s First Grooming</Link>
        </div>

        <div className="home3-blog-side-bar-recent-cards">
            <img src={RecentPost3} alt="" />

            <Link to="/BlogListingpage">Tips and tricks: Puppy’s First Grooming</Link>
        </div>


        <div className="home3-blog-side-bar-recent-cards home3-blog-side-bar-recent-cards-last">
            <img src={RecentPost4} alt="" />

            <Link to="/BlogListingpage">Tips and tricks: Puppy’s First Grooming</Link>
        </div>

        
    </div>

    <div className="home3-side-bar-imgs1">
        <img src={SideBarImg1} alt="" />
    </div>

    <div className="home3-side-bar-imgs2">
        <img src={SideBarImg2} alt="" />
    </div>
    </>
  )
}

export default BlogDetailPageSideBar