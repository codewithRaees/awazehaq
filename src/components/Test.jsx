import React, { useState, useEffect } from 'react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.jpeg';
import s3 from '../assets/s3.png';

const Test = () => {
  const slides = [
    {
      image: s1,
      heading: 'Improve Rural Education',
          paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, corporis natus nisi possimus harum magnam similique, fugit dolore explicabo debitis et! Modi ad minus placeat excepturi, fugiat labore alias ipsum.',
    },
    {
      image: s2,
      heading: 'Heading 2',
      paragraph: 'This is the description for the second slide.',
    },
    {
      image: s3,
      heading: 'Heading 3',
      paragraph: 'This is the description for the third slide.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // Direction: 'next' or 'prev'

  // Change slide every 5 seconds (5000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      }
    }, 5000);

    // Reverse direction when the last or first slide is reached
    if (currentIndex === slides.length - 1) {
      setDirection('prev');
    } else if (currentIndex === 0) {
      setDirection('next');
    }

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, direction, slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="relative flex-none w-full" key={index}>
            {/* Slide image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover -translate-y-10"
            />

            {/* Overlay text */}
            <div className="absolute top-1/4 max-w-[300px] md:max-w-[600px] left-4 transform md:-translate-y-1/2 text-white ">
              <h2 className="text-xl md:text-4xl font-bold mb-2 bg-[#676838] bg-opacity-60 md:p-4 p-2 pl-4 rounded-full">{slide.heading}</h2>
              <p className="text-sm md:text-lg bg-black bg-opacity-50 p-4 rounded-md">{slide.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
