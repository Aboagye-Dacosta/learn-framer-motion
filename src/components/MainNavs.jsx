import { motion } from "framer-motion";
import PropTypes from "prop-types";
import NavItem from "../ui/NavItem";

const mainVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function MainNavs() {
  return (
    <motion.ul
      variants={mainVariant}
      className="w-full  flex items-start px-10   flex-col gap-10 z-[100] absolute top-[40%]  -translate-y-1/2"
    >
      <NavItem to="products" label="Products" />
      <NavItem to="services" label="Services" />
      <NavItem to="feedbacks" label="What they say about us" />
      <NavItem to="contact" label="Contact us" />
    </motion.ul>
  );
}

MainNavs.propTypes = {
  close: PropTypes.func,
};

export default MainNavs;
