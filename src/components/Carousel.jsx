import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  console.log(data);
  return (
    <>
      <h2 className="container text-primary text-center font-bold text-lg lg:text-3xl">
        Image Carousel
      </h2>
      <div className="container relative flex flex-col justify-center items-center w-[600px] h-[400px]">
        <FaArrowAltCircleLeft
          onClick={prevSlide}
          size={25}
          className="absolute left-0 text-orange hover:text-pink cursor-pointer duration-0"
        />
        {data.map((item, idx) => {
          return (
            <img
              className={slide === idx ? "transition-all duration-5" : "hidden"}
              src={item.src}
              alt={item.alt}
              key={item.idx}
            />
          );
        })}
        <FaArrowAltCircleRight
          onClick={nextSlide}
          size={25}
          className="absolute right-0 text-orange hover:text-pink cursor-pointer"
        />
        <span className="flex absolute bottom-0 text-orange">
          {data.map((item, idx) => {
            return (
              <button onClick={() => setSlide(idx)}>
                <FaCircleDot
                  className={
                    slide === idx
                      ? "mx-1 text-green hover:text-pink cursor-pointer duration-0"
                      : "mx-1 text-orange hover:text-pink cursor-pointer duration-0"
                  }
                />
              </button>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default Carousel;
