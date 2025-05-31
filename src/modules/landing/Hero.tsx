import dummyHero from "@/assets/dummyHero.png";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ArrowRight } from "iconsax-react";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useEffect(() => {
    SplitText.create("#heroHeading", {
      type: "chars",
      charsClass: "char",
    });

    gsap.to(".char", {
      y: 0,
      stagger: 0.04,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <section className="w-full">
      <div className="h-[250px] md:h-[400px] flex justify-center items-center">
        <h1
          id="heroHeading"
          className="font-light text-[70px] min-[340px]:text-[80px] sm:text-[90px] leading-[150px] md:leading-[220px] h-fit md:text-[160px] lg:text-[248px] text-black text-center py-5"
        >
          {" "}
          Asaniyan{" "}
        </h1>
      </div>
      {/* <section className="w-full bg-[#C43030] relative px-5 max-md:py-2.5">
        <section className="relative w-full max-w-[1400px] mx-auto">
          <div className="w-full md:w-[85%] mx-auto">
            <img src={dummyHero} alt="dummyHero" className="object-cover" />
          </div>

          <section className="hidden md:flex flex-col justify-between items-center w-[100px] h-full top-0 right-0 absolute py-14">
            <p className="text-sm text-white sideways-lr"> {"[ ASANIYAN ]"} </p>
            <ArrowRight size="32" color="#fff" className="sideways-lr" />
            <p className="text-sm sideways-lr text-white"> {"[ 2025 ]"} </p>
          </section>

          <section className="flex justify-between md:hidden mt-6">
            <div className="flex flex-col">
              <p className="text-sm text-white"> {"[ ASANIYAN ]"} </p>
              <p className="text-sm  text-white"> {"[ 2025 ]"} </p>
            </div>
            <ArrowRight size="32" color="#fff" />
          </section>
        </section>
      </section> */}

      <section className="w-full border border-black">
        <section className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-5 text-black">
          <div className="w-full md:w-[73.3%] max-md:px-5 max-md:border-b max-md:border-b-black md:border-r md:border-r-black py-5">
            <p className="w-full max-w-[427px] text-xl font-light">
              Hi, I'm Ayomide Asaniyan, a front-end developer turning ideas and
              designs into clean, responsive web experiences. Are you curious
              about my skill? Take a tour.
            </p>
          </div>
          <div className="flex-1 flex flex-col text-sm py-5 max-md:px-5 w-full">
            <a
              target="_blank"
              className="max-md:block"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ayomide-asaniyan/"
            >
              {" "}
              {"[ LINKEDIN ]"}{" "}
            </a>
            {/* <span className="max-md:block"> {"[ INSTAGRAM ]"} </span>
            <span className="max-md:block"> {"[ X ]"} </span> */}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
