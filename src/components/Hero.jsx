import Button from "./Button";
import { FaArrowCircleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="container pt-5 flex flex-col justify-center items-center text-center h-[100vh] gap-5 lg:pb-5"
      >
        <div className="border-8 border-secondary hover:border-pink rounded-full w-[15rem] h-[15rem]">
          <img className="rounded-full" src="/me.jpg" alt="picture of me" />
        </div>
        <h2 className="text-gray font-bold text-base lg:text-lg xl:text-4xl animate-jump-in animate-fill-both">
          Hello
          <div className="animate-wiggle-more animate-infinite inline-block">
            👋
          </div>
          , I am Tătaru Octavian
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold uppercase text-primary animate-jump-in animate-once animate-delay-[200ms] animate-fill-both">
          Front-End <br /> <strong className="text-secondary">Developer</strong>
        </h1>
        <p className="max-w-[60ch] py-5 text-base lg:text-lg text-primary animate-jump-in animate-once animate-delay-[600ms] animate-fill-both">
          Welcome to my portofolio page, this unknown land where I am infinitely
          adding new features and possibilities to my experience.👌Speaking of,
          I am currently working
          <strong className="text-secondary"> @OSF Digital</strong> as a
          <strong className="text-secondary">
            {" "}
            Junior Front-End Developer
          </strong>
          .Prior to this, at the same company I worked as a
          <strong className="text-secondary"> Webmaster</strong> for 3 years. My
          first job was as a{" "}
          <strong className="text-secondary">
            Junior Front-End Developer{" "}
          </strong>
          at a small company.
        </p>
        <Button
          href="mailto:tataruoctavian5@gmail.com"
          className="lg:text-xl animate-jump-in animate-once animate-delay-[1000ms] animate-fill-both"
          text="Contact Me!"
        />

        <Button
          href="https://www.linkedin.com/in/tataru-octavian/"
          target="_blank"
          className="lg:text-xl bg-[#2a56b6] animate-jump-in animate-once animate-delay-[1500ms] animate-fill-both"
          text="LinkedIn"
        />

        <div>
          <FaArrowCircleDown
            className="animate-[bounce_1s_infinite] mt-5 z-50 text-orange"
            size={25}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
