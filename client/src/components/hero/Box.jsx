import { AiOutlinePropertySafety } from "react-icons/ai";
import React from "react";
import { Caption, Title } from "../../routes/common/AllRoutes";
import PropTypes from "prop-types";
const Box = ({ title, desc }) => {
    return (
      <>
        <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl w-auto">
          <div className="w-14 h-14 bg-green_100 flex items-center justify-center rounded-full">
            <AiOutlinePropertySafety size={27} className="text-primary" />
          </div>
          <div>
            <Title>{title}</Title>
            <Caption>{desc}</Caption>
          </div>
        </div>
      </>
    );
  };

  Box.propTypes = {
    title: PropTypes.any,
    desc: PropTypes.any,
  };

  export default Box