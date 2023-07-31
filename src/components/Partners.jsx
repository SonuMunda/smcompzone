import "./css/Partners.css";
import zebronics_logo from "/images/zebronics_logo.png";
import dell_logo from "/images/dell_logo.png";
import hp_logo from "/images/hp_logo.png";
import crucial_logo from "/images/crucial_logo.png";
const Partners = () => {
  return (
    <section className="partners center py-5">
      <div className="container my-4">
        <div className="partners-heading center mt-4">
          <h2 className="heading uppercase text-gray">Our Partners</h2>
        </div>
        <div className="partners-row center my-5">
          <div className="partners-col">
            <figure>
              <img src={zebronics_logo} alt="" />
            </figure>
          </div>
          <div className="partners-col">
            <figure>
              <img src={hp_logo} alt="" />
            </figure>
          </div>
          <div className="partners-col">
            <figure>
              <img src={dell_logo} alt="" />
            </figure>
          </div>
          <div className="partners-col">
            <figure>
              <img src={crucial_logo} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
