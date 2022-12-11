import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className=" font-semibold text-2xl">
      <h1>Gallery</h1>
      <div>
        {slides.map((slide, i) => {
          return (
            <div
              key={i}
              className={
                i === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={20}
                className="absolute top-[58%]  cursor-pointer select-none z-[2] text-white"
              />
              {i === current && (
                <Image
                  src={slide.image}
                  width={500}
                  height={500}
                  className="p-6 my-auto"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={20}
                className=" absolute left-[54.3%] top-[58%] cursor-pointer select-none z-[2] text-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
