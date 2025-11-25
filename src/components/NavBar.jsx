import { useState, useEffect } from "react";
import { FaGithub, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close mobile menu if left open while resizing to desktop width - should only happen if someone is trying to break it
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between items-center text-white max-w-screen-lg mx-auto mt-4 bg-black px-2 fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
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
            ? "flex flex-col absolute top-7 right-0 gap-3 w-full bg-black opacity-90 z-50"
            : "hidden"
        } md:flex md:flex-row md:gap-15 items-center md:mx-15`}
      >
        <a
          href="/#about"
          className="hover:bg-white hover:text-black m-0 px-2 py-1"
        >
          about_me
        </a>
        <a
          href="/#projects"
          className="hover:bg-white hover:text-black m-0 px-2 py-1"
        >
          projects
        </a>
        <a
          href="https://drive.google.com/file/d/1LXy2iYbLg9eOCckeBmM_-TxFp8dhi3gu/view?usp=drive_link"
          className="hover:bg-white hover:text-black m-0 px-2 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        <a
          href="/#programmerlog"
          className="hover:bg-white hover:text-black m-0 px-2 py-1"
        >
          programmer.log
        </a>
        <a
          href="https://github.com/bweppl1"
          className="hover:bg-white hover:text-black m-0 p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
