import React , {useState}  from 'react'
import Arrow from "../src/assets/common/arrow.svg"

const BackToTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

  return (
    <>
     <button onClick={scrollToTop} className="back-to-top-btn-wrap">
        {/* <button></button> */}
        <img src={Arrow} alt="" />
     </button>
    </>

  )
}

export default BackToTop