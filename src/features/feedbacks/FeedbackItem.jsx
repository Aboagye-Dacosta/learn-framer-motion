import PropTypes from "prop-types";
import Avatar from "../../ui/Avatar";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import Row from "../../ui/Row";

const itemVariant = {
  from: {
    y: 100,
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 0.5,
      opacity: { duration: 0.7 },
    },
  },
};

function FeedbackItem({ name }) {
  return (
    <Card variants={itemVariant}>
      <div className="max-w-[30rem]">
        <Row items="center" justify="center">
          <Avatar />

          <Heading as="h6">{name}</Heading>
          <Paragraph align="center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ut
            amet saepe consequuntur numquam necessitatibus.{" "}
          </Paragraph>
        </Row>
      </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  name: PropTypes.string,
};

export default FeedbackItem;
