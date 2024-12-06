import React, { useState, useEffect } from 'react';

const CarousalSlider = () => {
  const slides = [
    {
      image: '/assets/s1.png',
      heading: 'Improve Rural Education',
      paragraph:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, corporis natus nisi possimus harum magnam similique, fugit dolore explicabo debitis et! Modi ad minus placeat excepturi, fugiat labore alias ipsum.',
    },
    {
      image: '/assets/s2.jpeg',
      heading: 'Heading 2',
      paragraph: 'This is the description for the second slide.',
    },
    {
      image: '/assets/s3.png',
      heading: 'Heading 3',
      paragraph: 'This is the description for the third slide.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // Direction: 'next' or 'prev'
  const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

  // Change slide every 5 seconds (5000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageLoaded) {
        if (direction === 'next') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        }
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
  }, [currentIndex, direction, slides.length, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true); // Set image as loaded when the image is ready
  };

  return (
    <div className="relative w-full overflow-hidden max-h-52 sm:max-h-screen mb-4 sm:mb-0">
      <div
        className="flex transition-transform - duration-1000 ease-in-out"
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
              onLoad={handleImageLoad} // Trigger onLoad when image is loaded
            />

            {/* Overlay text */}
            <div className="absolute top-1/4 left-14 max-w-[300px] md:max-w-[600px]  transform md:-translate-y-1/2 text-white ">
              <h2 className="text-xl  md:text-4xl font-bold mb-2 bg-[#676838] bg-opacity-60 md:p-4 p-2 pl-4 rounded-full">
                {slide.heading}
              </h2>
              <p className="text-sm md:text-lg hidden sm:block bg-black bg-opacity-50 p-4 rounded-md">
                {slide.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarousalSlider;
