import { useEffect, useState } from "react";
import "./css/Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkedAlt,
} from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const { name, phone, message } = formData;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <section className="contact-hero-section center">
        <div className="container">
          <h1 className="heading text-center text-white uppercase">
            Contact us
          </h1>
        </div>
      </section>
      <section className="contact-details center py-5">
        <div className="container flex justify-around my-5">
          <div className="details">
            <div className="details-heading">
              <h3 className="heading">Get in Touch</h3>
            </div>
            <div className="details-text">
              <p className="text py-3">
                Thank you for visiting SMComZone! If you have any questions,
                comments, or business inquiries, we would love to hear from you.
                Please feel free to get in touch using the contact form, and our
                team will respond to you promptly.
              </p>
            </div>
            <div className="contacts-info m-2">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <FaPhoneAlt />
                </div>
                <p className="contact-text">+91 80000-000098</p>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>
                <p className="contact-text">info@smcomzone.help</p>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <FaWhatsapp />
                </div>
                <p className="contact-text">+91 80000-000098</p>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <FaMapMarkedAlt />
                </div>
                <p className="contact-text">
                  Sector 47, Chandigarh, Punjab, 160047
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form m-2">
            <div className="form-heading">
              <h3 className="heading center text-white">Send a Message</h3>
            </div>
            <form action="" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className="form-controls"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  className="form-controls"
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  id="message-box"
                  cols="30"
                  rows="10"
                  className="form-controls"
                  placeholder="Message"
                ></textarea>
              </div>

              <input type="submit" value="Send Menssage" className="btn mb-4" />
            </form>
          </div>
        </div>
      </section>
      <hr />
      <section className="address-map">
        <div className="address-heading">
          <h3 className="heading text-center p-4">We are Here</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6471.069568723501!2d76.76489044376584!3d30.695553901260087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec67f12d70e7%3A0x6cccf4bdeb91705e!2sSector%2047%2C%20Chandigarh!5e1!3m2!1sen!2sin!4v1690961194583!5m2!1sen!2sin"
          loading="eager"
          className="map"
        ></iframe>
      </section>
      <hr />
    </>
  );
};

export default Contact;
