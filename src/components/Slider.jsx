// src/components/Slider.js
import React, { useState, useEffect } from "react";
import { GrNext,GrPrevious } from "react-icons/gr";
import s1 from '../assets/1.png';
import s2 from '../assets/2.png';
import s3 from '../assets/3.png';
import s4 from '../assets/4.png';

// Sample images (replace with your images)
const images = [
  s1,s2,s3,s4
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" w-full  mx-auto overflow-hidden">
      {/* Slider Slides */}
      <div className=" rounded-lg shadow-lg">
        <div className="relative   overflow-hidden  ">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className=" w-screen max-h-92 object-cover transition-all duration-1000 ease-in-out opacity-100"
          />
           {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 bg-[#676838] -translate-y-1/2 text-3xl text-white bg-opacity-50 p-2 rounded-full focus:outline-none"
      >
        <GrPrevious/>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 bg-[#676838]  right-2 -translate-y-1/2 text-3xl text-white bg-opacity-50  p-2 rounded-full focus:outline-none"
      >
        <GrNext/>
      </button>
        </div>
        
      </div>

     

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
