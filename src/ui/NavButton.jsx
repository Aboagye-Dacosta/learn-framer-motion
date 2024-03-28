import { motion } from "framer-motion";
import { useNavigation } from "../components/Navigation";

const Path = (props) => (
  <motion.path
    {...props}
    fill="transparent"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    strokeWidth="3"
  />
);

function NavButton() {
  const { toggleOpen } = useNavigation();
  return (
    <button className="absolute top-[2.3rem] left-[2.15rem]" onClick={() => toggleOpen()}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="red">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default NavButton;
