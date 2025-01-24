import SubscribeMail from "../src/assets/home/subscribe-newsletter/Subscribe-mail.svg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SubscribeNewsletter = () => {

  const formRef = useRef(); // Reference for the form
  const [buttonText, setButtonText] = useState("Send Email"); // Button text state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    setButtonText("Sending..."); // Update button text

    const serviceID = "default_service";
    const templateID = "template_ttq5iaq";
    const publicKey = "Gk411-KkxOW2-mVlO"; // Your EmailJS public key

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setButtonText("Send Email"); // Reset button text
        alert("Sent!");
      })
      .catch((err) => {
        setButtonText("Send Email"); // Reset button text
        alert(`Error: ${JSON.stringify(err)}`);
      });
  };


  return (
    <section className="subscribe-newsletter-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe-newsletter-tit-wraper">
              <h3
                className="subscribe-newsletter-tit"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                Subscribe <b>Newsletter</b> & Get Company News
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="subscribe-newsletter-input"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="2000"
              >
                <img
                  src={SubscribeMail}
                  alt="Subscribe Newsletter"
                  className="subscribe-newsletter-mail"
                />
                <div className="field">
                  <input
                    type="email"
                    name="message" // Use `reply_to` for the sender's email
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  id="button"
                  className="subscribe-newsletter-btn"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
