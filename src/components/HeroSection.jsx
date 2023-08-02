import "./css/HeroSection.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import heroSectionImg from "/images/hero_section_image.jpg";
const HeroSection = ({ heading, text }) => {
  return (
    <section className="hero-section center">
      <div className="container center">
        <div className="hero-section-left">
          <div className="hero-section-greet">
            <h4 className="text-gray font-bold uppercase">Welcome to</h4>
          </div>
          <div className="hero-section-heading">
            <h1 className="heading"> {heading} </h1>
          </div>
          <div className="hero-section-text">
            <p className="text-gray py-3">{text}</p>
          </div>
          <div className="hero-section-btn">
            <Link to={"/products"}>
              <button className="btn">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="hero-section-right">
          <img src={heroSectionImg} alt="Hero Section Image" />
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default HeroSection;
