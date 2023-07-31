import "./css/Header.css";
import logo from "/images/brand_logo.png";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    if (navActive === true) {
      setNavActive(false);
    } else {
      setNavActive(true);
    }
  };
  return (
    <header className="header center">
      <div className="container between mx-4">
        <div className="brand">
          <NavLink to="/">
            <img src={logo} alt="SMCompZone" />
          </NavLink>
        </div>
        <nav className={`navbar ${navActive ? "nav-active" : ""}`}>
          <div className="nav-container center">
            <div
              className="closebar"
              onClick={() => {
                setNavActive(false);
              }}
            >
              <FaTimes />
            </div>
            <ul className="navlist center">
              <li className="list-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    setNavActive(false);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={() => {
                    setNavActive(false);
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  to="products/"
                  className="nav-link"
                  onClick={() => {
                    setNavActive(false);
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={() => {
                    setNavActive(false);
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="user-area center ms-5">
              <div className="user-name">
                <span className="text-sm text-gray-600">
                  Welcome, Sonu Munda
                </span>
              </div>
              <div className="header-btns m-1">
                <button className="btn header-btn">Log out</button>
              </div>
              <div className="cart">
                <HiOutlineShoppingCart />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="menubar" onClick={toggleNav}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
