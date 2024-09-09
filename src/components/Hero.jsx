import Button from "./Button";
import { FaArrowCircleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="container px-5 flex flex-col justify-center items-center text-center h-[100vh] text-primary gap-4"
      >
        <div className="border-8 border-secondary rounded-full w-[15rem] h-[15rem]">
          <img className="rounded-full" src="/me.jpg" alt="picture of me" />
        </div>
        <h2 className="text-gray font-bold text-base lg:text-lg xl:text-4xl">
          Tătaru Mihail-Octavian
        </h2>
        <h1 className="text-5xl lg:text-6xl xl:text-9xl font-extrabold uppercase">
          Webmaster <br />
          <strong className="text-secondary">@OSF Digital</strong>
        </h1>
        <p className="max-w-[60ch] py-5 text-base lg:text-lg">
          Since
          <strong className="text-secondary"> 2021</strong> I started working as
          a Webmaster at OSF Digital, and one year earlier, at my first job, I
          was a <strong className="text-secondary">Front End Developer</strong>{" "}
          at a company called eDezvoltator. <br /> This is my portofolio page.
        </p>
        <Button
          href="mailto:tataruoctavian5@gmail.com"
          className="lg:text-xl"
          text="Contact Me!"
        />

        <FaArrowCircleDown className="animate-bounce mt-5" size={25} />
      </section>
    </>
  );
};

export default Hero;
