import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Section from "../../ui/Section";
import Textarea from "../../ui/Textarea";

import { motion } from "framer-motion";

const contentVariants = {
  to: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
    // },
  },
};

const itemVariant = {
  from: {
    y: 200,
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      opacity: {
        duration: 0.8,
      },
    },
  },
};

function Contact() {
  return (
    <Section
      id="contact"
      title="Reach out to us"
      description="Have something to tell us. Say it right here"
    >
      <Row items="center" justify="center" variants={contentVariants}>
        <Input
          type="text"
          placeholder="what do you want to tell us"
          variants={itemVariant}
        />
        <Textarea
          placeholder="give more detail if any"
          variants={itemVariant}
        />

        <motion.div className="w-[30rem]" variants={itemVariant}>
          <Button variation="primary" size="large">
            Mail it to us
          </Button>
        </motion.div>
      </Row>
    </Section>
  );
}

export default Contact;
