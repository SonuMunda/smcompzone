import "./css/About.css";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Partners from "../components/Partners";
import mission_bg from "/images/mission_bg.jpg";
const About = () => {
  const heading = "SMComeZone - Gear Up with Tech";
  const text =
    "At SMComeZone, we're passionate about providing the latest and greatest in computer technology, hardware, and laptops to meet your every computing need. Whether you're a tech enthusiast, a professional, or a student, we've got you covered with an extensive selection of top-notch products at unbeatable prices.";

  return (
    <div className="wrapper">
      <HeroSection heading={heading} text={text} />
      <hr />
      <section className="our-mission center m-5">
        <div className="container around p-4">
          <div className="mission-image">
            <img src={mission_bg} alt="mission_image" />
          </div>
          <div className="mission-details">
            <div className="mission-heading">
              <h3 className="heading">Our Mission</h3>
            </div>
            <div className="mission-text">
              <p className="text">
                Empower customers with cutting-edge tech and superior hardware.
                Elevate potential, boost productivity, and create unforgettable
                experiences. Our mission is to provide trusted tech solutions
                that enable customers to unlock their full potential.
              </p>
            </div>
            <div className="vision-heading">
              <h3 className="heading">Quality You Can Trust</h3>
            </div>
            <div className="vision-text">
              <p className="text">
                Genuine and renowned brands ensure quality you can trust.
                Rigorous checks guarantee excellence in every product we offer.
                Count on us for authentic and reliable tech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Services />
      <hr />
      <Partners />
    </div>
  );
};

export default About;
