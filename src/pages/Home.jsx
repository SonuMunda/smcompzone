import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Partners from "../components/Partners";

const Home = () => {
  const heading = "SMCompZone";
  const text =
    "Welcome to SmCompZone, your ultimate destination for top-quality computer laptops and hardware. Explore our extensive collection of cutting-edge laptops, powerful desktops, and high-performance hardware components. Whether you're a professional, a gamer, or a tech enthusiast, we've got you covered with the latest models from leading brands.";
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="wrapper">
      <HeroSection heading={heading} text={text} />
      <FeaturedProducts />
      <Services />
      <Partners />
    </div>
  );
};

export default Home;
