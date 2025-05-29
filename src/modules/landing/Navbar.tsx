import UnderlineAnimation from "@/components/UnderlineAnimation";

const Navbar = () => {
  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="w-full border-y border-y-black h-[71px]">
      <ul className="w-full h-full uppercase font-medium text-sm text-black grid grid-cols-3">
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation handleClick={() => scrollToSection("works")}>
            Works
          </UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation handleClick={() => scrollToSection("oss")}>
            OSS
          </UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation handleClick={() => scrollToSection("contact")}>
            Contact
          </UnderlineAnimation>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
