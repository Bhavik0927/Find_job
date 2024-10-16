import { useState, useEffect } from 'react';

const jobTypes = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "Graphic Designer",
  "Marketing Specialist",
  "Sales Executive",
  "HR Manager",
];

const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTypes.length);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {jobTypes.map((job, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 text-center py-12 bg-blue-500 text-white rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold">{job}</h2>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {jobTypes.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
