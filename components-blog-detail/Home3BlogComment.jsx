import BlogCommentProfile from "../src/assets/home-3/blog-detail-page/blog-comment-profile.png"
import BlogCommentProfile1 from "../src/assets/home-3/blog-detail-page/blog-comment-profile-1.png"

const Home3BlogComment = () => {
  return (
    <>
    <h4 className="Home3-blog-comments-tit">
    Comments
    </h4>

    <div className="Home3-blog-comments-card">
        <div className="Home3-blog-comments-profile-img">
        <img src={BlogCommentProfile} alt="" />
        </div>
        <h4 className="comment-person-name">
        Darlene Robertson
        </h4>
       <span className="blog-comment-date-ago">
       1 Month ago
       </span>
       <p>Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>
       <div className="blog-comment-likes-nd-replays">
        <span className="blog-comment-likes">
        158
        </span>
        <span className="blog-comment-replays">
        Reply
        </span>
       </div>
    </div>

    <div className="Home3-blog-comments-card">
        <div className="Home3-blog-comments-profile-img">
        <img src={BlogCommentProfile1} alt="" />
        </div>
        <h4 className="comment-person-name">
        Ralph Edwards
        </h4>
       <span className="blog-comment-date-ago">
       1 Month ago
       </span>
       <p>Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>
       <div className="blog-comment-likes-nd-replays">
        <span className="blog-comment-likes">
        158
        </span>
        <span className="blog-comment-replays">
        Reply
        </span>
       </div>
    </div>

    <div className="blog-detail-comment-form">

        <h4  className="blog-detail-comment-form-tit">Add Comment</h4>

        <input  placeholder="First Name" className="first-name-blog" type="text" name="" id="" />

        <input placeholder="Email" className="email-for-blog" type="email" name="" id="" />

        <textarea className="blog-detail-comment-text-area" placeholder="Message" name="" id=""  rows=""></textarea>

        <a className="blog-detail-comment-form-btn" href="">Leave a comment</a>
    </div>
    </>
  )
}

export default Home3BlogComment