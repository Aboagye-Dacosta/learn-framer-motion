import { motion } from "framer-motion";
import PropTypes from "prop-types";

//padding font-size
const btnSizes = {
  small: "py-2 px-3 text-[1.3rem]",
  medium: "py-4 px-4 text-[1.5rem]",
  hero: "py-4 px-6 text-[1.7rem]",
  large: "py-2 px-3 text-[1.3rem] w-full",
};

//background-color hover color
const btnVariations = {
  primary: "bg-green-600 text-white hover:bg-green-700",
  secondary: "bg-stone-600 text-white hover:bg-stone-700",
  danger: "",
  hero: "hover:text-green-600 text-white after:bg-white shadow-white border-white border",
};

function Button({ children, size = "hero", variation = "hero", ...props }) {
  //color = white
  return (
    <motion.button
      className={`flex items-center justify-center relative z-30 duration-200 transition-all font-bold shadow-sm shadow-stone-400 rounded-full after:absolute after:top-0 after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:rounded-full after:transition-all after:duration-200 after:-z-10 ${btnVariations[variation]} ${btnSizes[size]}`}
      {...props}
      whileHover={{
        scale: 1.3,
      }}
      transition={{
        scale: {
          duration: 0.1,
        },
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileTap={{ scale: 0.8 }}
    >
      <motion.div layout="position"> {children}</motion.div>
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  size: PropTypes.any,
  variation: PropTypes.string,
};

export default Button;
