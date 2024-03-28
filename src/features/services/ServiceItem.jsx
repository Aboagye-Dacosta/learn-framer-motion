import PropTypes from "prop-types";
import Button from "../../ui/Button";
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


function ServiceItem({ title, description }) {
  return (
    <Card variants={itemVariant}>
      <div className="max-w-[70rem]">
        <div className="py-8">
          <div className="absolute -top-8 left-0 bg-yellow-600 rounded-full px-4 py-3 text-white font-bold">
            <Heading as="h3">{title}</Heading>
          </div>
          <Row>
            <Paragraph>{description}</Paragraph>
            <div className="flex justify-end">
              <Button size="small" variation="secondary">
                view more &rarr;
              </Button>
            </div>
          </Row>
        </div>
      </div>
    </Card>
  );
}

ServiceItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceItem;
