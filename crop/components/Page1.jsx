import { useState } from 'react';

const images = [
  'drone1.jpg',
  'drone2.jpg',
  'drone3.jpg',
  'drone4.jpeg',
  'drone5.jpg',
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative">
          <img
            src={`/${images[currentSlide]}`}
            alt="carousel slide"
            className="w-80 h-40 object-cover"
          />
          {currentSlide === 0 && (
            <div className="mt-12 absolute inset-0 items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-xl text-center font-bold">
                CROP SPRAYING 
              </h2>
              <p className="text-center text-white">Spray smarter with Drone Technology</p>
              <div className="flex space-x-2 text-center ml-10">
                <p className="font-bold text-center text-white">STARTS AT 999/HR</p>
                <button className=" bg-red-600 text-center w-24 rounded-3xl text-white">RENT NOW</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-4 inset-x-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full mx-2 ${
              index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
