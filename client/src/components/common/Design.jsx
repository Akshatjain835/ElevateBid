import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return <div className={`${className} w-[85%] m-auto`}>{children}</div>;
};

export { Container };
export const commonClassNameOfInput = "w-full p-4 text-sm text-gray-900 border border-gray-200 focus:ring-green focus:border-green outline-none";

Container.propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
};
