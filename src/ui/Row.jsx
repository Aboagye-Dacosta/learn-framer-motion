import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const Row = forwardRef(
  (
    { children, type = "vertical", justify = "center", items = "start" },
    ref
  ) => {
    let direction = "";
    let content = "";
    let item = "";

    switch (type) {
      case "vertical":
        direction = "flex-col";
        break;
      case "horizontal":
        direction = "flex-row";
    }

    switch (justify) {
      case "center":
        content = "justify-center";
        break;
      case "between":
        content = "justify-between";
    }

    switch (items) {
      case "center":
        item = "items-center";
        break;
      case "between":
        item = "items-start";
    }
    return (
      <motion.div
        className={`flex ${direction} ${content} ${item} gap-7 flex-wrap w-full `}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  }
);

Row.displayName = "Row";

Row.propTypes = {
  children: PropTypes.any,
  items: PropTypes.string,
  justify: PropTypes.string,
  type: PropTypes.string,
};

export default motion(Row, { forwardMotionProps: true });
