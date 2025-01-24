import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import Home3DetailBanner from "../components-home3/Home3DetailBanner"
import Home3BlogPageListingCards from "../components-home3/Home3BlogPageListingCards"

const BlogDetailPage = () => {
  return (
    <>
    <div className="Blog-Detail-Page-wrap">
     <Home3Header />
     <Home3DetailBanner />
     <Home3BlogPageListingCards />
     <Home3Footer />
    </div>
    </>
  )
}

export default BlogDetailPage