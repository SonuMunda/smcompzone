import "./css/Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="services center">
      <div className="container p-2 my-4">
        <div className="services-row center my-4">
          <div className="services-col center">
            <div className="service-icon">
              <TbTruckDelivery />
            </div>
            <div className="service-text">
              <p>Fast and Free Delivery</p>
            </div>
          </div>
          <div className="services-col center">
            <div className="service-icon">
              <BiShieldQuarter />
            </div>
            <div className="service-text">
              <p>Non-contact Shipping</p>
            </div>
          </div>
          <div className="services-col center">
            <div className="service-icon">
              <GiReceiveMoney />
            </div>
            <div className="service-text">
              <p>Money back Garranteed</p>
            </div>
          </div>
          <div className="services-col center">
            <div className="service-icon">
              <RiSecurePaymentLine />
            </div>
            <div className="service-text">
              <p>Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
