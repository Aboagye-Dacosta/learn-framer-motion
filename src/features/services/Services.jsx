import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Section from "../../ui/Section";
import SectionFooter from "../../ui/SectionFooter";
import Spacer from "../../ui/Spacer";

import ServiceItem from "./ServiceItem";

const contentVariants = {
  from: {
    transition: {
      type: "spring",
      staggerChildren: 0.06,
      delayChildren: 0.02,
      staggerDirection: 1,
    },
  },
};

function Services() {
  return (
    <Section
      id="services"
      title="Our Services"
      description="At Access Bank we give the power to you."
    >
      <Spacer />
      <Row justify="center" items="center" variants={contentVariants}>
        <ServiceItem
          title="Advancing of Loans"
          description="We provide loans to individuals and businesses. These loans can be short-term, medium-term, or long-term. Banks earn interest on the loan amount, which contributes to their profits."
        />
        <Spacer />
        <ServiceItem
          title="Discounting of Bills of Exchange"
          description="We offer this service where a holder of a bill of exchange can get it discounted. After deducting a commission, the bank pays the bill’s value to the holder."
        />
        <Spacer />

        <ServiceItem
          title="Check/Cheque Payment"
          description="Banks provide checkbooks to account holders. Customers can write checks to pay for goods and services. The bank verifies and processes these checks, ensuring secure transactions."
        />
      </Row>
      <Spacer height={10} />

      <SectionFooter>
        <p>Dont miss any of out on any of our services </p>
        <Button size="medium" variation="primary">
          Check out more of our services &rarr;
        </Button>
      </SectionFooter>
    </Section>
  );
}

export default Services;
