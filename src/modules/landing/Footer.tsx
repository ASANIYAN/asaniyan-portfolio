import UnderlineAnimation from "@/components/UnderlineAnimation";
import { Asterisk } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-[80px]">
      <div className="py-[93px] md:py-[96px] text-[82px] sm:text-[92px] md:text-[120px] text-black text-center font-light">
        <Asterisk size={92} className="mx-auto" />
        <h4 className="leading-[88px]"> Asaniyan </h4>
      </div>

      <section className="w-full border-t border-t-black md:border-y md:border-y-black h-[178px]">
        <ul className="w-full h-full uppercase font-medium text-sm text-black grid grid-cols-1 md:grid-cols-3">
          <li className="max-md:h-[146px] border-b border-b-black md:border-r md:border-r-black flex justify-center items-center">
            <ul className="space-y-5">
              <UnderlineAnimation>WORKS</UnderlineAnimation>
              <UnderlineAnimation>CONTRIBUTIONS</UnderlineAnimation>
              <UnderlineAnimation>CONTACT</UnderlineAnimation>
            </ul>
          </li>
          <li className="border-b border-b-black md:border-r lowercase md:border-r-black flex justify-center items-center max-md:h-[86px]">
            <a href="mailto:ayomidepaulasaniyan@gmail.com">
              {`[ ayomidepaulasaniyan@gmail.com ]`}
            </a>
          </li>
          <li className="flex justify-center items-center max-md:h-[86px]">
            {"[ © ]"} {"[ 2025 ]"}{" "}
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
