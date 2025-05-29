import UnderlineAnimation from "@/components/UnderlineAnimation";

const Navbar = () => {
  return (
    <nav className="w-full border-y border-y-black h-[71px]">
      <ul className="w-full h-full uppercase font-medium text-sm text-black grid grid-cols-3">
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation>Works</UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation>Contributions</UnderlineAnimation>
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          <UnderlineAnimation>Contacts</UnderlineAnimation>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
