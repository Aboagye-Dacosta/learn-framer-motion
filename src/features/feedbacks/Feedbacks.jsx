import Row from "../../ui/Row";
import Section from "../../ui/Section";
import FeedbackItem from "./FeedbackItem";

const contentVariants = {
  to: {
    transition: {
      type: "spring",
      staggerChildren: 0.06,
      delayChildren: 0.02,
      staggerDirection: 1,
    },
    // },
  },
};

function Feedbacks() {
  return (
    <Section
      title="What they say about us"
      description="Over the years we've worked with many clients and here is what they say."
      id="feedbacks"
    >
      <Row
        justify="center"
        align="center"
        type="horizontal"
        variants={contentVariants}
      >
        <FeedbackItem name="Joel Fowler" />
        <FeedbackItem name="Thomas Eadenger" />
        <FeedbackItem name="Mark Heyware" />
        <FeedbackItem name="Miles Finner" />
      </Row>
    </Section>
  );
}

export default Feedbacks;
