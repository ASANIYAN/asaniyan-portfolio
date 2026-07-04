import UnderlineAnimation from "@/components/UnderlineAnimation";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToSection(id: string) {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="w-full border-y border-y-black h-[71px]">
      <ul className="w-full h-full uppercase font-medium text-sm text-black grid grid-cols-4">
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation
            handleClick={() => scrollToSection("experience")}
          >
            Exp.
          </UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation handleClick={() => scrollToSection("works")}>
            Works
          </UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation handleClick={() => scrollToSection("contact")}>
            Contact
          </UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation handleClick={() => navigate("/blog")}>
            Blog
          </UnderlineAnimation>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
