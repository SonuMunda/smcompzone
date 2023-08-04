import { NavLink } from "react-router-dom";
import PropType from "prop-types";
const PageNavigation = ({ title }) => {
  return (
    <nav className="page-navigation" style={{marginTop:"64px", width:"100%"}}>
      <h3 className="font-bold p-8 gray-tint">
        <NavLink to={"/"} className="text-blue-600 mx-1">Home</NavLink>/
        <span className="ms-1">{title}</span>
      </h3>
    </nav>
  );
};

PageNavigation.propTypes = {
  title: PropType.string.isRequired,
};
export default PageNavigation;
