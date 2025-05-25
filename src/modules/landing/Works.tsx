import InfiniteMarquee from "@/components/InfiniteMarquee";
import dummyImgOne from "@/assets/dummyImgOne.webp";
import dummyImgTwo from "@/assets/dummyImgTwo.webp";
import dummyImgThree from "@/assets/dummyImgThree.webp";
import dummyImgFour from "@/assets/dummyImgFour.webp";

const Works = () => {
  const workOptions = ["Works", "*", "Works", "*", "Works", "*"];
  return (
    <section className="mt-[72px] md:mt-[200px] w-full max-w-[1400px] mx-auto">
      <div className="border-y border-y-black">
        <InfiniteMarquee
          images={[]}
          duration={5}
          texts={workOptions}
          textClassName="text-black text-[92px] uppercase"
        />
      </div>

      <section className="flex flex-col md:flex-row text-black">
        <div className="w-full h-[390px] md:w-1/2 md:h-[600px] overflow-clip">
          <img src={dummyImgOne} alt="dummyImgOne" className="" />
        </div>

        <div className="px-5 md:px-8 py-8 md:h-[600px] flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
          <div className="max-lg:w-full h-fit lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
            <p className="lg:[writing-mode:sideways-lr] text-gray-400">
              {" "}
              {"[ 2025 ]"}{" "}
            </p>
            <p className="lg:[writing-mode:sideways-lr] font-medium">
              {"[ LUMINA ]"}
            </p>
          </div>

          <p className="w-full lg:max-w-[380px] ml-auto font-light">
            Lumina explores the relationship between light and human emotion,
            using soft gradients and bold contrasts to evoke a sense of
            introspection.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row text-black">
        <div className="px-5 md:px-8 py-8 md:h-[600px] flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
          <p className="w-full lg:max-w-[380px] mr-auto font-light">
            A fusion of geometric shapes, Morphic was created to challenge
            traditional perceptions of space and structure. This project was a
            collaboration with a leading design firm and later adapted for an
            animated installation.
          </p>

          <div className="max-lg:w-full h-fit lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
            <p className="lg:[writing-mode:sideways-lr] text-gray-400">
              {" "}
              {"[ 2022 ]"}{" "}
            </p>
            <p className="lg:[writing-mode:sideways-lr] font-medium">
              {" "}
              {"[ MORPHIC ]"}{" "}
            </p>
          </div>
        </div>

        <div className="w-full h-[390px] md:w-1/2 md:h-[600px] overflow-clip">
          <img src={dummyImgTwo} alt="dummyImgTwo" className="" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row text-black">
        <div className="w-full h-[390px] md:w-1/2 md:h-[600px] overflow-clip">
          <img src={dummyImgThree} alt="dummyImgThree" className="" />
        </div>

        <div className="px-5 md:px-8 py-8 md:h-[600px] flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
          <div className="max-lg:w-full h-fit lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
            <p className="lg:[writing-mode:sideways-lr] text-gray-400">
              {" "}
              {"[ 2025 ]"}{" "}
            </p>
            <p className="lg:[writing-mode:sideways-lr] font-medium">
              {"[ NEBULAE ]"}
            </p>
          </div>

          <p className="w-full lg:max-w-[380px] ml-auto font-light">
            Inspired by the vastness of the universe, Nebulae merges digital
            techniques to create a sense of infinite wonder.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row text-black">
        <div className="px-5 md:px-8 py-8 md:h-[600px] flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
          <p className="w-full lg:max-w-[380px] mr-auto font-light">
            Forma is a collection of minimalist, functional designs created for
            digital experiences. Focused on clean lines and effortless
            usability, this project bridges the gap between art and intuitive
            interaction.
          </p>

          <div className="max-lg:w-full h-fit lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
            <p className="lg:[writing-mode:sideways-lr] text-gray-400">
              {" "}
              {"[ 2022 ]"}{" "}
            </p>
            <p className="lg:[writing-mode:sideways-lr] font-medium">
              {" "}
              {"[ FORMA ]"}{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-[390px] md:w-1/2 md:h-[600px] overflow-clip">
          <img src={dummyImgFour} alt="dummyImgFour" className="" />
        </div>
      </section>
    </section>
  );
};

export default Works;
