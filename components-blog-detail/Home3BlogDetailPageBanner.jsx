import { Link } from "react-router-dom"

const Home3BlogDetailPageBanner = () => {
  return (
    <>
     <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Blogs
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                        <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Blogs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home3BlogDetailPageBanner