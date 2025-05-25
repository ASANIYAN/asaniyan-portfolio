import "./App.css";
import Help from "./modules/landing/Help";
import Hero from "./modules/landing/Hero";
import Navbar from "./modules/landing/Navbar";
import Works from "./modules/landing/Works";

function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Help />
      <Works />
    </section>
  );
}

export default App;
