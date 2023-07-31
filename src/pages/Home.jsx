import "./css/Home.css";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Partners from "../components/Partners";
import useProductContext from "../contexts/ProductContext";

const Home = () => {
  const {name} = useProductContext();
  console.log(name);
  return (
    <div className="wrapper">
      <HeroSection />
      <Services />
      <Partners />

    </div>
  );
};

export default Home;
