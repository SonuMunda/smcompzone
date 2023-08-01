import "./css/HeroSection.css";
import { Link } from "react-router-dom";
import heroSectionImg from "/images/hero_section_image.jpg";
const HeroSection = () => {
  return (
    <section className="hero-section center">
      <div className="container center">
        <div className="hero-section-left">
          <div className="hero-section-greet">
            <h4 className="text-gray font-bold uppercase">Welcome to</h4>
          </div>
          <div className="hero-section-heading">
            <h1 className="heading"> SMCompZone </h1>
          </div>
          <div className="hero-section-text">
            <p className="text-gray py-3">
              Welcome to SmCompZone, your ultimate destination for top-quality
              computer laptops and hardware. Explore our extensive collection of
              cutting-edge laptops, powerful desktops, and high-performance
              hardware components. Whether you&apos;re a professional, a gamer,
              or a tech enthusiast, we&apos;ve got you covered with the latest
              models from leading brands.
            </p>
          </div>
          <div className="hero-section-btn">
            <Link to={"/products"}><button className="btn">Shop Now</button></Link>
          </div>
        </div>
        <div className="hero-section-right">
          <img src={heroSectionImg} alt="Hero Section Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
