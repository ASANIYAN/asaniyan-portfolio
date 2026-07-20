// import dummyHero from "@/assets/dummyHero.png";
import gsap from "gsap";
import { SplitText } from "gsap/all";
// import { ArrowRight } from "iconsax-react";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    SplitText.create("#heroHeading", {
      type: "chars",
      charsClass: "char",
    });

    gsap.to(".char", {
      y: 0,
      stagger: 0.04,
      duration: 0.2,
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
              <p className="text-sm text-white"> {"[ 2025 ]"} </p>
            </div>
            <ArrowRight size="32" color="#fff" />
          </section>
        </section>
      </section> */}

      <section className="w-full border border-black">
        <section className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-5 text-black">
          <div className="w-full md:w-[73.3%] max-md:px-5 max-md:border-b max-md:border-b-black md:border-r md:border-r-black py-5">
            <p className="w-full max-w-[427px] text-xl font-light">
              I'm Ayomide Asaniyan, a Software Engineer with 3+ years of
              experience building production web applications with React,
              Next.js, NestJS, and PostgreSQL. I build features end to end, from
              designing database schemas and APIs to delivering polished user
              interfaces and production deployments.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 text-sm py-5 max-md:px-5 w-full label-mono">
            <a
              target="_blank"
              className="press hover-ink w-fit"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ayomide-asaniyan/"
            >
              {"[ LINKEDIN ]"}
            </a>
            <a
              target="_blank"
              className="press hover-ink w-fit"
              rel="noopener noreferrer"
              href="https://github.com/ASANIYAN"
            >
              {"[ GITHUB ]"}
            </a>
            <a
              className="press hover-ink w-fit"
              href="/Asaniyan_Ayomide_Paul_CV.pdf"
              download="Asaniyan_Ayomide_Paul_CV.pdf"
            >
              {"[ RESUME ]"}
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
