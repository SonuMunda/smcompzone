import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <FeaturedProducts />
      <Services />
      <Partners />
    </div>
  );
};

export default Home;
