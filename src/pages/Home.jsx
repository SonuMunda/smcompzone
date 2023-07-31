import "./css/Home.css";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Partners from "../components/Partners";
const Home = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <Services />
      <Partners />
    </div>
  );
};

export default Home;
