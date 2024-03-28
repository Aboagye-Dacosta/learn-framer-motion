import { motion, useScroll } from "framer-motion";

function SideIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="  items-start justify-center my-4 left-7 w-1 z-50  h-[95vh] bg-green-700 rounded-full fixed">
      <motion.div
        className=" w-1 h-[95vh] bg-red-700 rounded-full fixed origin-top"
        style={{ scaleY: scrollYProgress }}
      ></motion.div>
    </motion.div>
  );
}

export default SideIndicator;
