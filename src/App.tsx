import "./App.css";
import Help from "./modules/landing/Help";
import Hero from "./modules/landing/Hero";
import Navbar from "./modules/landing/Navbar";

function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Help />
    </section>
  );
}

export default App;
