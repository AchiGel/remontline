import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./views/About";
import Hero from "./views/Hero";
import Services from "./views/Services";
import Suppliers from "./views/Suppliers";
import Trust from "./views/Trust";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Trust />
      <Suppliers />
      <Footer />
    </div>
  );
};

export default App;
