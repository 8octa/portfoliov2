import { LiaReact } from "react-icons/lia";
import { FaRegMoon, FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleMenu = () => {
    setOpenNav((openNav) => !openNav);
  };

  const [light, setLight] = useState(false);

  const handleMode = () => {
    setLight((light) => !light);
  };

  const closeMenu = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [light]);

  return (
    <nav className="h-5 flex justify-between items-center p-10 text-md font-extrabold">
      <a href="#hero">
        <LiaReact
          className="text-orange hover:text-pink cursor-pointer duration-0 animate-spin"
          size={50}
        />
      </a>

      <button
        className="block lg:hidden text-orange hover:text-pink"
        onClick={handleMenu}
      >
        <FaHamburger
          size={50}
          className="text-orange hover:text-pink cursor-pointer duration-0"
        />
      </button>

      <ul
        className={`flex items-center gap-5 cursor-pointer ${
          openNav
            ? "fixed top-0 left-0 z-[10000] w-full h-full bg-background flex flex-col overflow-y-hidden justify-center items-center gap-10 text-center text-3xl"
            : "hidden lg:flex"
        }`}
      >
        {openNav ? <RemoveScrollBar /> : ""}
        <button
          className="block lg:hidden text-orange hover:text-pink"
          onClick={handleMenu}
        >
          {openNav ? (
            <IoClose
              size={50}
              className="text-orange hover:text-pink cursor-pointer duration-0 absolute top-5 right-5"
            />
          ) : (
            <FaHamburger size={50} color="orange" className="cursor-pointer" />
          )}
        </button>
        <a href="#about" onClick={closeMenu}>
          <li className="text-primary hover:text-pink">About</li>
        </a>
        {/* <a href="#contact" onClick={closeMenu}>
          <li className="text-primary hover:text-pink">Contact</li>
        </a> */}

        <li className="text-primary">|</li>

        <li>
          <FaRegMoon
            onClick={handleMode}
            className="text-primary text-orange hover:text-pink cursor-pointer duration-0"
          />
        </li>

        {/* <Link className="text-primary" to="/resume" target="_blank">
          <Button
            className={`${
              openNav ? "text-xl" : "text-sm"
            } font-extrabold w-[10rem]`}
            text="My Resume"
          />
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
