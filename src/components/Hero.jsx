import { motion } from "framer-motion";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Navigation from "./Navigation";

const heroDesVariants = {
  from: { y: 50, opacity: 0 },
  to: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, type: "tween" },
  },
};

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative w-100 h-screen after:absolute after:w-full after:h-full after:top-0 after:left-0 after:clip-hero after:z-10  after:bg-gradient-to-br after:from-green-600 after:to-green-300">
      <motion.div className=" -left-[3.3rem] z-[100] absolute top-1/2 ">
        <motion.div
          className="inline-block h-[3rem] w-[3rem] rounded-full bg-green-600 after:absolute after:h-[70%] after:w-[70%] after:rounded-full after:bg-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 sticky"
          whileHover={{ scale: 1.3 }}
          viewport={{ amount: 1, margin: "10px" }}
        />
      </motion.div>
      <Navigation />
      <motion.div className="flex flex-col gap-3 z-[100]">
        <Heading
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Access &mdash; Bankers
        </Heading>
        <motion.div initial="from" animate="to">
          <motion.div
            className="flex items-center justify-start flex-col gap-10"
            variants={{
              to: {
                transition: {
                  staggerChildren: 0.5,
                  delayChildren: 0.08,
                },
              },
            }}
          >
            <Heading as="h2" variants={heroDesVariants}>
              <span className="text-slate-700 text-[2rem] tracking-widest underline">
                Bank at your convenience
              </span>
            </Heading>
            <Button variants={heroDesVariants}>
              Check out our banking plans &rarr;
            </Button>
            <Paragraph align="center" variants={heroDesVariants}>
              <span className="inline-block w-[30rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus nemo minima nisi sapiente, molestiae deserunt aperiam
                debitis. Mollitia at iure re.
              </span>
            </Paragraph>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
