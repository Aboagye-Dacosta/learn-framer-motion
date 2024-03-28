import Contact from "../features/contact/Contact";
import Feedbacks from "../features/feedbacks/Feedbacks";
import Products from "../features/products/Products";
import Services from "../features/services/Services";

function PageBody() {
  return (
    <>
      <Products />
      <Services />
      <Feedbacks />
      <Contact />
    </>
  );
}

export default PageBody;
