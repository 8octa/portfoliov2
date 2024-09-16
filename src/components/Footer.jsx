import React from "react";

const Footer = () => {
  return (
    <section className="text-center text-gray relative pt-[10rem]">
      <p className="hover:text-orange">~ Tataru Octavian ~</p>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="fill-secondary hover:fill-orange"
          d="M0,160L48,154.7C96,149,192,139,288,117.3C384,96,480,64,576,90.7C672,117,768,203,864,250.7C960,299,1056,309,1152,314.7C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Footer;
