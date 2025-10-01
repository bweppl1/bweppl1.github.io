import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center text-white max-w-screen-lg mx-auto mt-4 bg-black px-2">
      <h1 className="text-lg">
        <a href="/" className="m-0 p-0">
          BRENT WEPPLER
        </a>
      </h1>
      <FaBars className="md:hidden" onClick={toggleMenu} />
      <div
        id="menu"
        className={`${
          menuOpen
            ? "flex flex-col absolute top-11 right-0 gap-3 w-full bg-black opacity-90 z-50"
            : "hidden"
        } md:flex md:flex-row md:gap-15 items-center md:mx-15`}
      >
        <a href="#about" className="hover:bg-white hover:text-black m-0 px-2">
          about_me
        </a>
        <a
          href="#projects"
          className="hover:bg-white hover:text-black m-0 px-2"
        >
          projects
        </a>
        <a href="#contact" className="hover:bg-white hover:text-black m-0 px-2">
          contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
