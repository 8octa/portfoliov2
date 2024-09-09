import { LiaReact } from "react-icons/lia";
import { FaRegMoon } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Button from "./Button";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleMenu = () => {
    setOpenNav((openNav) => !openNav);
  };

  return (
    <nav className="flex justify-between items-center p-10">
      <a
        href="#hero"
        className="text-orange transition-all duration-500 hover:text-pink"
      >
        <LiaReact size={50} className="cursor-pointer" />
      </a>

      <button
        className="block lg:hidden text-orange transition-all duration-500 hover:text-pink"
        onClick={handleMenu}
      >
        <FaHamburger size={50} className="cursor-pointer" />
      </button>

      <ul
        className={`flex items-center gap-5 cursor-pointer transition-all duration-500 ease-in-out ${
          openNav
            ? "absolute visible top-0 left-0 z-[10000] w-full h-full bg-background flex flex-col overflow-y-hidden justify-center items-center gap-10 text-center text-3xl"
            : "hidden lg:flex"
        }`}
      >
        {openNav ? <RemoveScrollBar /> : ""}
        <button
          className="block lg:hidden text-orange transition-all duration-500 hover:text-pink"
          onClick={handleMenu}
        >
          {openNav ? (
            <IoClose
              size={50}
              className="cursor-pointer absolute top-5 right-5"
            />
          ) : (
            <FaHamburger size={50} color="orange" className="cursor-pointer " />
          )}
        </button>
        <a href="#about">
          <li className="transition-all duration-500 hover:text-pink">About</li>
        </a>
        <a href="#contact">
          <li className="transition-all duration-500 hover:text-pink">
            Contact
          </li>
        </a>

        <li className="transition-all duration-500 hover:text-pink">|</li>

        <li className="transition-all duration-500 hover:text-pink">
          <button className="flex items-center justify-center">
            <FaRegMoon />
          </button>
        </li>

        <li>
          <Button
            className={`${openNav ? "text-xl" : "text-sm"}`}
            text="My Resume"
            href="/cv"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
