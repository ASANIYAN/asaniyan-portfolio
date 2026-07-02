import Experience from "@/modules/landing/Experience";
import Footer from "@/modules/landing/Footer";
import Help from "@/modules/landing/Help";
import Hero from "@/modules/landing/Hero";
import Navbar from "@/modules/landing/Navbar";
import Talk from "@/modules/landing/Talk";
import Works from "@/modules/landing/Works";

const Home = () => {
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
