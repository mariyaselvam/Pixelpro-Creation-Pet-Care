import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import Home3PetSItters from "../components-home3/Home3PetSItters"
import { Link } from "react-router-dom"

const Home3Sitters = () => {
  return (
    <>
    <Home3Header />
    <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Sitters
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                        <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Pet SItters</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   <Home3PetSItters />



    <Home3Footer />
    </>
  )
}

export default Home3Sitters