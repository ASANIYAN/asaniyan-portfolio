import InfiniteMarquee from "@/components/InfiniteMarquee";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useEffect } from "react";

const workOptions = [
  "JavaScript  ",
  "*",
  "Tailwind",
  "*",
  "React",
  "*",
  "TypeScript",
  "*",
  "Next.js",
  "*",
  "NodeJS",
  "*",
];

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    gsap.to("#dojaText", {
      scrollTrigger: {
        trigger: "#dojaText",
        start: "top 90%",
      },
      duration: 1,
      text: `Doja Studio explores the intersection of creativity and commerce, using innovative design and strategic thinking to evoke meaningful connections between brands and their audiences.`,
    });

    gsap.to("#canadaText", {
      scrollTrigger: {
        trigger: "#canadaText",
        start: "top 90%",
      },
      duration: 1,
      opacity: 1,
      // text: `SoftCanada bridges the gaps for seamless Canadian transitions, providing newcomers with essential resources and support to settle, succeed, and thrive in their new home.`,
    });

    gsap.to("#auditbarText", {
      scrollTrigger: {
        trigger: "#auditbarText",
        start: "top 90%",
      },
      duration: 1,
      text: `Auditbar turns invoicing headaches and simplifies inventory management into effortless growth, giving small businesses the tools to sell, track, and scale beyond their daily struggles.`,
    });
  }, []);

  return (
    <section className="mt-[72px] md:mt-[200px] w-full max-w-[1400px] mx-auto">
      <div className="border-y border-y-black">
        <InfiniteMarquee
          images={[]}
          duration={8}
          texts={workOptions}
          textClassName="text-black text-[92px] uppercase"
        />
      </div>

      <section className="space-y-10 mt-32">
        <section className="flex flex-col h-fit md:flex-row text-black">
          <div className="w-full md:w-1/2 overflow-clip">
            <div
              style={{
                padding: "54.72% 0 0 0",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/c9MwU8sbbG0"
                allow="autoplay;"
                allowFullScreen
                title="Doja demo"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />

              {/* <iframe
                src="https://player.vimeo.com/video/1088693434?h=9afbbff12c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              /> */}
            </div>
          </div>

          <div className="px-5 md:px-8 py-8 flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
            <div className="max-lg:w-full h-fit lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.doja.studio/"
                className="lg:[writing-mode:sideways-lr] text-gray-400"
              >
                {" "}
                {"[ View Site ]"}{" "}
              </a>
              <p className="lg:[writing-mode:sideways-lr] font-medium">
                {"[ DOJA STUDIO ]"}
              </p>
            </div>

            <p
              id="dojaText"
              className="w-full lg:max-w-[380px] ml-auto font-light"
            >
              {/* Doja Studio explores the intersection of creativity and commerce,
              using innovative design and strategic thinking to evoke meaningful
              connections between brands and their audiences. */}
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row text-black h-fit">
          <div className="px-5 md:px-8 py-8 flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
            <p
              id="canadaText"
              className="w-full lg:max-w-[380px] mr-auto font-light opacity-0"
            >
              SoftCanada bridges the gaps for seamless Canadian transitions,
              providing newcomers with essential resources and support to
              settle, succeed, and thrive in their new home.
            </p>

            <div className="max-lg:w-full h-fit lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mysoftcanada.ca/"
                className="lg:[writing-mode:sideways-lr] text-gray-400"
              >
                {" "}
                {"[ View Site ]"}{" "}
              </a>
              <p className="lg:[writing-mode:sideways-lr] font-medium">
                {" "}
                {"[ SoftCanada ]"}{" "}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 overflow-clip">
            <div style={{ padding: "54.72% 0 0 0", position: "relative" }}>
              <iframe
                src="https://www.youtube.com/embed/Up7oCDZbha0"
                allow="autoplay;"
                allowFullScreen
                title="Softcanada demo"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row text-black h-fit">
          <div className="w-full md:w-1/2 overflow-clip">
            <div style={{ padding: "54.72% 0 0 0", position: "relative" }}>
              <iframe
                src="https://www.youtube.com/embed/GC0zG_FNauM"
                allow="autoplay;"
                allowFullScreen
                title="Auditbar Demo"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>

          <div className="px-5 md:px-8 py-8 flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
            <div className="max-lg:w-full lg:h-full flex flex-row lg:flex-col justify-start lg:justify-end gap-3 lg:gap-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://auditbar.com/"
                className="lg:[writing-mode:sideways-lr] text-gray-400"
              >
                {" "}
                {"[ View Site ]"}{" "}
              </a>
              <p className="lg:[writing-mode:sideways-lr] font-medium">
                {"[ Auditbar ]"}
              </p>
            </div>

            <p
              id="auditbarText"
              className="w-full lg:max-w-[380px] ml-auto font-light"
            >
              {/* Auditbar turns invoicing headaches and simplifies inventory
              management into effortless growth, giving small businesses the
              tools to sell, track, and scale beyond their daily struggles. */}
            </p>
          </div>
        </section>

        {/* <section className="flex flex-col-reverse md:flex-row text-black">
          <div className="px-5 md:px-8 py-8 md:h-[450px] flex max-lg:gap-2.5 flex-col lg:flex-row justify-end lg:justify-between items-end flex-1">
            <p className="w-full lg:max-w-[380px] mr-auto font-light">
              Forma is a collection of minimalist, functional designs created
              for digital experiences. Focused on clean lines and effortless
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
          <div className="w-full h-[390px] md:w-1/2 md:h-[450px] overflow-clip">
            <img src={dummyImgFour} alt="dummyImgFour" className="" />
          </div>
        </section> */}
      </section>
    </section>
  );
};

export default Works;
