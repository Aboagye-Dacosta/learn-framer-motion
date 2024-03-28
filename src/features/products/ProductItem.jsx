import PropTypes from "prop-types";
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

const ProductItem = ({ title, description }) => {
  return (
    <Card variants={itemVariant}>
      <div className="max-w-[45rem]">
        <Row>
          <Heading as="h6">
            <span className="font-bold text-slate-600">{title}</span>
          </Heading>
          <Paragraph>{description}</Paragraph>
        </Row>
      </div>
    </Card>
  );
};

ProductItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default ProductItem;
