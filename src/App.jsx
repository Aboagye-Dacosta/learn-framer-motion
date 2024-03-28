import BackgroundCircles from "./components/BackgroundCircles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PageBody from "./components/PageBody";
import SideIndicator from "./ui/SideIndicator";

function App() {
  return (
    <main className="mx-0 sm:mr-10 sm:ml-14 sm:mt-5 bg-white relative  ">
      <SideIndicator />
      <BackgroundCircles />
      <Hero />
      <PageBody />
      <Footer />
    </main>
  );
}

export default App;
