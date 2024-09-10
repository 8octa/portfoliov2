import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaPager,
  FaSalesforce,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiVercel, SiVisualstudiocode } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-5 lg:gap-5 container pt-5 text-primary font-semibold lg:pt-[10rem]"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-primary font-bold text-3xl lg:text-4xl py-5">
          About
        </h2>
        <p className="text-orange font-bold pb-1">Education:</p>
        <p className="text-primary">Târgoviște University of Valahia</p>
        <p className="text-primary">
          Bachelors Degree in Technologies & Telecommunication Systems
        </p>
        <p className="text-primary">2018-2022</p>
        <p className="text-orange font-bold pt-5 pb-1">Technologies:</p>
        <ul className="flex flex-col gap-0 lg:flex-row lg:justify-between">
          <div>
            <li className="flex items-center gap-1 text-primary">
              <FaHtml5 className="text-[#e34c26]" /> HTML 5
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaCss3 className="text-[#264de4]" />
              CSS 3
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaJs className="text-[#f0db4f]" /> JS(ES6+)
            </li>
            <li className="flex items-center gap-1 text-primary">
              <RiTailwindCssFill className="text-[#06b6d4]" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaBootstrap className="text-[#7410F0]" />
              Bootstrap 5
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaReact className="animate-spin text-[#5ED5F6]" /> React (w/
              Hooks, Libraries)
            </li>
          </div>
          <div>
            {" "}
            <li className="flex items-center gap-1 text-primary">
              <SiVite className="text-[#6C92F7]" />
              Vite
            </li>
            <li className="flex items-center gap-1 text-primary">
              <SiVercel className="text-primary duration-0" />
              Vercel
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaGithub className="text-primary duration-0" />
              Github
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaPager className="text-primary duration-0" />
              Page Builders
            </li>
            <li className="flex items-center gap-1 text-primary">
              <FaSalesforce className="text-[#009CD9]" />
              SFCC
            </li>
            <li className="flex items-center gap-1 text-primary">
              <SiVisualstudiocode className="text-[#0078d7]" />
              Visual Studio Code
            </li>
          </div>
        </ul>
      </div>
      <div>
        <img loading="lazy" src="me-2.jpg" alt="me" width={300} />
      </div>
    </section>
  );
};

export default About;
