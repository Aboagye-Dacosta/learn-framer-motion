import { motion } from "framer-motion";
import PropTypes from "prop-types";

const alignment = {
  center: "text-center",
  left: "text-left",
  right: "text-right",
};

function Paragraph({ children, align = "left", ...props }) {
  return (
    <motion.p
      className={`text-stone-500 ${alignment[align]} z-[100]`}
      {...props}
    >
      {children}
    </motion.p>
  );
}

Paragraph.propTypes = {
  align: PropTypes.string,
  children: PropTypes.any,
};

export default Paragraph;
