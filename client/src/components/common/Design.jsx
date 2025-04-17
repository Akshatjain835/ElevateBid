import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Container = ({ children, className }) => {
  return <div className={`${className} w-[85%] m-auto`}>{children}</div>;
};

const CustomNavLinkList = ({ href, className, isActive, children }) => {
    const linkStyles = "text-[17px] font-medium cursor-pointer list-none hover:text-green transition-all ease-in-out";
    const activeClass = isActive ? "text-green" : "";
  
    return (
      <>
        <NavLink to={href} className={`${className} ${linkStyles} ${activeClass}`}>
          {children}
        </NavLink>
      </>
    );
  };

const CustomNavLink = ({ href, className, isActive, children }) => {
    const linkStyles = "text-[17px] font-medium cursor-pointer list-none hover:text-green transition-all ease-in-out";
    const activeClass = isActive ? "bg-green_100 text-green" : "";
  
    return (
      <>
        <NavLink to={href} className={`${className} ${linkStyles} ${activeClass}`}>
          {children}
        </NavLink>
      </>
    );
  };
export { Container,CustomNavLinkList,CustomNavLink };
export const commonClassNameOfInput = "w-full p-4 text-sm text-gray-900 border border-gray-200 focus:ring-green focus:border-green outline-none";

Container.propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
};
CustomNavLink.propTypes = {
    href: PropTypes.any,
    className: PropTypes.any,
    children: PropTypes.any,
    isActive: PropTypes.any,
  };
CustomNavLinkList.propTypes = {
    href: PropTypes.any,
    className: PropTypes.any,
    children: PropTypes.any,
    isActive: PropTypes.any,
  };
