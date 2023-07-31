import "./css/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer center">
      <div className="container my-5">
        <div className="footer-row flex flex-wrap  justify-center my-5">
          <div className="footer-col">
            <div className="footer-brand">
              <div className="brand-name">
                <h3 className="heading">SMCompZone</h3>
              </div>
              <div className="brand-text">
                <p className="text">
                  We provide top quality products with 100% money back garantee
                </p>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-heading">
              <h4>Follow us</h4>
            </div>
            <div className="media-links">
              <div className="media">
                <Link to="/">
                  <div className="media-icon">
                    <FaFacebook />
                  </div>
                </Link>
              </div>
              <div className="media">
                <Link to="/">
                  <div className="media-icon">
                    <FaInstagram />
                  </div>
                </Link>
              </div>
              <div className="media">
                <Link to="/">
                  <div className="media-icon">
                    <FaTwitter />
                  </div>
                </Link>
              </div>
              <div className="media">
                <Link to="/">
                  <div className="media-icon">
                    <FaLinkedin />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-heading">
              <h4>Contact us</h4>
              <div className="contact">
                <div className="contact-icon">
                  <FaLocationDot />
                </div>
                <div className="contact-text">
                  <p>Sector 47, Chandigarh, Punjab, 160047</p>
                </div>
              </div>
              <div className="contact">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <p>info@smcompzone.help</p>
                </div>
              </div>
              <div className="contact">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-text">
                  <p>+91 80000-00098</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-heading">
              <h4>Sign up for Newsletter</h4>
            </div>
            <div className="newsletter-form-container">
              <form action="" className="newsletter-form">
                <div className="form-group">
                  <input
                    type="emai;"
                    className="input-control"
                    placeholder="Your email"
                    required
                  />
                </div>
                <input type="submit" value="Subscribe" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
