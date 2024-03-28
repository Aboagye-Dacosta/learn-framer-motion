import { motion, useCycle } from "framer-motion";
import { createContext, useContext } from "react";
import NavButton from "../ui/NavButton";
import MainNavs from "./MainNavs";

const circle = {
  open: {
    scale: 200,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2,
    },
  },
  closed: {
    scale: 1,
    transition: {
      delay: 0.08,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavContext = createContext();

function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavContext.Provider value={{ isOpen, toggleOpen }}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="absolute clip-hero top-0 left-0 bottom-0 w-[40rem] z-[600] overflow-hidden shadow-sm"
      >
        <motion.div
          className="absolute top-5 left-5 w-[40px] h-[40px] rounded-full bg-white"
          variants={circle}
        />
        <NavButton />
        <MainNavs />
      </motion.nav>
    </NavContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigation = () => {
  const context = useContext(NavContext);
  if (!context)
    throw new Error("you are using navigation outside of navigation provider");
  return context;
};

export default Navigation;
