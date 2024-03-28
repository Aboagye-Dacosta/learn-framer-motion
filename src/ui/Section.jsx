import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Row from "./Row";
import Spacer from "./Spacer";

const sectionVariants = {
  from: {},
  to: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.05,
    },
  },
};

const sectionHeader = {
  from: {
    y: "100px",
    opacity: 0,
  },
  to: {
    // InView: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      opacity: {
        duration: 0.8,
      },
    },
    // },
  },
};

const marker = {
  from: {
    y: 300,
    opacity: 0,
  },
  to: {
    y: -20,
    opacity: 1,
    transition: {
      duration: 0.04,
      type: "spring",
      stiffness: 150,
      mass: 3,
    },
  },
};

function Section({ children, title, description, id }) {
  const [current, setCurrent] = useState(false);

  return (
    <motion.section
      className="p-[10rem]  border-t border-slate-200 mt-10 flex flex-col items-center justify-center relative"
      initial="from"
      whileInView="to"
      variants={sectionVariants}
      viewport={{ amount: 0.3 }}
      id={id}
      layout
    >
      {current && (
        <motion.div
          className="-left-[3.3rem] z-[100] absolute top-0"
          layoutId="sectionId"
          layout
          variants={marker}
        >
          <motion.div
            layout
            className="inline-block h-[3rem] w-[3rem] rounded-full bg-green-600 after:absolute after:h-[70%] after:w-[70%] after:rounded-full after:bg-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 sticky"
            whileHover={{ scale: 1.3, backgroundColor: "#ff0000" }}
            viewport={{ amount: 1, margin: "10px" }}
          />
        </motion.div>
      )}

      {(title || description) && (
        <Row
          items="center"
          justify="center"
          // initial="from"
          // whileInView="to"
          variants={sectionHeader}
          viewport={{ once: true, amount: 0.5 }}
          onViewportEnter={() => setCurrent(true)}
        >
          <Heading as="h2"> {title} </Heading>
          <Paragraph>{description}</Paragraph>
        </Row>
      )}
      <Spacer height={10} />
      {children}
    </motion.section>
  );
}

Section.propTypes = {
  children: PropTypes.any,
  description: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Section;
