import "./App.css";
import Awards from "./modules/landing/Awards";
import Footer from "./modules/landing/Footer";
import Help from "./modules/landing/Help";
import Hero from "./modules/landing/Hero";
import Navbar from "./modules/landing/Navbar";
import Talk from "./modules/landing/Talk";
import Works from "./modules/landing/Works";

function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Help />
      <Works />
      <Awards />
      <Talk />
      <Footer />
    </section>
  );
}

export default App;
