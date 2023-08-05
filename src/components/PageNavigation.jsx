import { NavLink } from "react-router-dom";

const PageNavigation = (prop) => {
  return (
    <nav
      className="page-navigation"
      style={{ marginTop: "64px", width: "100%" }}
    >
      <h3 className="font-bold p-8 gray-tint">
        <NavLink to={"/"} className="text-blue-600 mx-1">
          Home
        </NavLink>
        /<span className="ms-1">{prop.title}</span>
      </h3>
    </nav>
  );
};

export default PageNavigation;
