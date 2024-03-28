import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Section from "../../ui/Section";
import SectionFooter from "../../ui/SectionFooter";
import Spacer from "../../ui/Spacer";
import ProductItem from "./ProductItem";

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

function Products() {
  return (
    <Section
      id="products"
      title="Products"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    >
      <Row
        items="center"
        justify="center"
        type="horizontal"
        variants={contentVariants}
      >
        <ProductItem
          title="Checking Accounts"
          description="These accounts are designed for day-to-day transactions. You can write checks, make electronic payments, and withdraw cash. They often come with debit cards"
        />
        <ProductItem
          title="Savings Accounts"
          description="Ideal for saving money, these accounts earn interest. They’re great for building an emergency fund or saving for specific goals."
        />
        <ProductItem
          title="Certificates of Deposit (CDs)"
          description="Time-bound deposits with fixed interest rates. You agree to keep the money in the account for a specified period."
        />
        <ProductItem
          title="Mobile Banking"
          description="Access your accounts through smartphone apps. Features include mobile check deposit, alerts, and 24/7 access."
        />
      </Row>
      <Spacer height={10} />

      <SectionFooter>
        <p>Dont miss any of out on any of our products </p>
        <Button size="medium" variation="primary">
          Check out more &rarr;
        </Button>
      </SectionFooter>
    </Section>
  );
}

export default Products;
