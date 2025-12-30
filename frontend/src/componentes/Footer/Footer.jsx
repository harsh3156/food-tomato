import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At Tomato , we’re passionate about delivering delicious meals right to your doorstep. Our menu features a wide variety of dishes made from fresh, high-quality ingredients. Whether you're craving a hearty meal, a light snack, or something in between, we've got you covered!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt=""  href="https://www.facebook.com/lapinozsurat/mentions/"/>
            <img src={assets.twitter_icon}  alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-social-icons">
  /*<a
    href="https://www.facebook.com/lapinozsurat/mentions/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>

  <a
    href="https://www.youtube.com/  "
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.twitter_icon} alt="Twitter" />
  </a>

  <a
    href="https://www.linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
</div> */


        <div className="footer-content-center">=
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7575826485</li>
            <li>harshkaklotar09@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CopyRight 2025 © Tomato.com - All right Reserved.
      </p>
    </div>
  );
};

export default Footer;
