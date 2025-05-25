const Navbar = () => {
  return (
    <nav className="w-full border-y border-y-black h-[71px]">
      <ul className="w-full h-full uppercase font-medium text-sm text-black grid grid-cols-3">
        <li className="border-r border-r-black flex justify-center items-center">
          Works
        </li>
        <li className="border-r border-r-black flex justify-center items-center">
          Awards
        </li>
        <li className="flex justify-center items-center">Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
