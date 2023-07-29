import "./css/Header.css";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Header = () => {
  return (
    <header className="header center">
      <div className="container between">
        <div className="brand">
          <h1 className="brand-title">SMCompZone</h1>
        </div>
        <div className="center">
          <nav className="navbar">
            <ul className="navlist">
              <li className="list-item">
                <NavLink className="nav-link">Home</NavLink>
              </li>
              <li className="list-item">
                <NavLink className="nav-link">About</NavLink>
              </li>
              <li className="list-item">
                <NavLink className="nav-link" Products>
                  Products
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="user-area center ms-5">
            <div className="user-name">
              <span className="text-sm text-gray-600">Welcome, Sonu Munda</span>
            </div>
            <div className="header-btns">
              <button className="header-btn">Log out</button>
            </div>
            <div className="cart">
              <HiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
