import{ useState, useEffect } from 'react';
import data from '../Data/data'; // Importing the slides array

const CarousalSlider = () => {
  const {slides} = data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageLoaded) {
        if (direction === 'next') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        }
      }
    }, 5000);

    if (currentIndex === slides.length - 1) {
      setDirection('prev');
    } else if (currentIndex === 0) {
      setDirection('next');
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, direction, slides.length, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full overflow-hidden max-h-52 sm:max-h-screen mb-4 sm:mb-0">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="relative flex-none w-full" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover -translate-y-10"
              onLoad={handleImageLoad}
            />
            <div className="absolute top-1/4 left-14 max-w-[300px] md:max-w-[600px] transform md:-translate-y-1/2 text-white">
              <h2 className="text-xl md:text-4xl font-bold mb-2 bg-[#676838] bg-opacity-60 md:p-4 p-2 pl-4 rounded-full">
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
