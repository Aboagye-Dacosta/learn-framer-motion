import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigation } from "../components/Navigation";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    visibility: "visible",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    visibility: "hidden",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavItem = ({ label, to }) => {
  const { isOpen, toggleOpen } = useNavigation();

  return (
    <motion.li
      variants={variants}
      whileHover={{
        color: "white",
        transition: {
          duration: 0.6,
          type: "tween",
        },
      }}
      className={`opacity-100 ${isOpen ? "block" : ""}`}
      onClick={() => toggleOpen()}
    >
      <a
        href={`#${to}`}
        className="relative font-bold text-[2rem] uppercase py-3 block px-4 after:absolute after:block after:w-[0.5rem] after:h-full after:bg-green-500 after:top-0 after:left-0 after:-z-10 hover:after:w-full after:transition-all after:duration-200"
      >
        {label}
      </a>
    </motion.li>
  );
};

NavItem.propTypes = {
  close: PropTypes.func,
  label: PropTypes.string,
  to: PropTypes.string,
};

export default NavItem;
