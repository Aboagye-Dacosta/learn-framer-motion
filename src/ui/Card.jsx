/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const Card = forwardRef(({ children },ref) => {
  return (
    <div className="px-5 z-50 relative py-4 shadow-sm shadow-stone-300 rounded-sm hover:shadow-md transition-all duration-200 cursor-pointer" ref={ref} >
      {children}
    </div>
  );
});

Card.displayName = "Card";

Card.propTypes = {
  children: PropTypes.any,
};

export default motion(Card, { forwardMotionProps: true });
