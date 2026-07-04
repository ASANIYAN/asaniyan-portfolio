import Experience from "@/modules/landing/Experience";
import Footer from "@/modules/landing/Footer";
import Help from "@/modules/landing/Help";
import Hero from "@/modules/landing/Hero";
import Navbar from "@/modules/landing/Navbar";
import Talk from "@/modules/landing/Talk";
import Works from "@/modules/landing/Works";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <section>
      <Navbar />
      <Hero />
      <Experience />
      <Help />
      <Works />
      <Talk />
      <Footer />
    </section>
  );
};

export default Home;
