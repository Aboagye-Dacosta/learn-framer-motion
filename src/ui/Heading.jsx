import PropTypes from "prop-types";
import {motion} from "framer-motion"

function Heading({ as = "h1", children,...props }) {
  switch (as) {
    case "h1":
      return (
        <motion.h1 className="font-bold text-[10rem] z-[100]  tracking-wider font-display text-gray-800 cursor-pointer" {...props}>
          {children}
        </motion.h1>
      );
    case "h2":
      return (
        <motion.h2  {...props} className="text-[2.5rem] font-bold text-slate-700 cursor-pointer z-[100]">
          {children}
        </motion.h2>
      );
    case "h3":
      return <motion.h3 {...props} className="z-[100]">{children}</motion.h3>;
    case "h6":
      return (
        <motion.h6 {...props} className="text-[1.7rem] cursor-pointer z-[100]">{children}</motion.h6>
      );
  }
}

Heading.propTypes = {
  as: PropTypes.string,
  children: PropTypes.object,
};

export default Heading;
