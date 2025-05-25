import dummyHero from "@/assets/dummyHero.png";
import { ArrowRight } from "iconsax-react";

const Hero = () => {
  return (
    <section className="w-full">
      <h1 className="font-light text-[80px] md:text-[248px] text-black text-center py-5">
        {" "}
        Asaniyan{" "}
      </h1>
      <section className="w-full bg-[#C43030] relative px-5 py-2.5">
        <section className="relative w-full max-w-[1300px] mx-auto">
          <div className="w-full md:w-[85%] mx-auto">
            <img src={dummyHero} alt="dummyHero" className="object-cover" />
          </div>

          <section className="hidden md:flex flex-col justify-between items-center w-[100px] h-full top-0 right-0 absolute py-14">
            <p className="text-sm text-white sideways-lr">
              {" "}
              {"[ PART OF THE SKY ]"}{" "}
            </p>
            <ArrowRight size="32" color="#fff" className="sideways-lr" />
            <p className="text-sm sideways-lr text-white"> {"[ 2025 ]"} </p>
          </section>

          <section className="flex justify-between md:hidden mt-6">
            <div className="flex flex-col">
              <p className="text-sm text-white"> {"[ PART OF THE SKY ]"} </p>
              <p className="text-sm  text-white"> {"[ 2025 ]"} </p>
            </div>
            <ArrowRight size="32" color="#fff" />
          </section>
        </section>
      </section>

      <section className="w-full border-b border-b-black">
        <section className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-5 text-black">
          <div className="w-full md:w-[73.3%] max-md:px-5 max-md:border-b max-md:border-b-black md:border-r md:border-r-black py-5">
            <p className="w-full max-w-[427px] text-xl font-light">
              I create art that captivates both visually and emotionally, while
              designing user interfaces that feel effortlessly intuitive.
            </p>
          </div>
          <div className="flex-1 flex flex-col text-sm py-5 max-md:px-5 w-full">
            <span className="max-md:block"> {"[ DRIBBLE ]"} </span>
            <span className="max-md:block"> {"[ INSTAGRAM ]"} </span>
            <span className="max-md:block"> {"[ X ]"} </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
