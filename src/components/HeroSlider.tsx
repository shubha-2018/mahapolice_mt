import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// ✅ Import local images
import policeImg2 from "../assets/images/police1.jpg";
import policeImg3 from "../assets/images/police10.jpg";
import policeImg4 from "../assets/images/police4.jpg";
import policeImg5 from "../assets/images/police5.jpg";
import policeImg6 from "../assets/images/police7.jpg";
import policecar2 from "../assets/images/PoliceCar2.jpg";
import policecar from "../assets/images/police8.jpg";

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const sliderData: SlideData[] = [
  { id: 1, image: policeImg2, title: "", subtitle: "", description: "" },
  { id: 2, image: policecar2, title: "", subtitle: "", description: "" },
  { id: 3, image: policecar, title: "", subtitle: "", description: "" },
  { id: 4, image: policeImg3, title: "", subtitle: "", description: "" },
  { id: 5, image: policeImg4, title: "", subtitle: "", description: "" },
  { id: 6, image: policeImg5, title: "", subtitle: "", description: "" },
  { id: 7, image: policeImg6, title: "", subtitle: "", description: "" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-scroll
  useEffect(() => {
    if (isHovered || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isPaused]);

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  const goToSlide = (index: number) => setCurrentSlide(index);
  const togglePlayPause = () => setIsPaused(!isPaused);

  const currentSlideData = sliderData[currentSlide];

  return (
    <div 
      className={`relative w-full mx-auto overflow-hidden transition-all duration-1000 mt-32
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide image */}
      <img
        src={currentSlideData.image}
        alt={currentSlideData.title}
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">{currentSlideData.title}</h2>
        <h3 className="text-sm sm:text-lg md:text-xl mt-1 sm:mt-2">{currentSlideData.subtitle}</h3>
        <p className="mt-2 sm:mt-4 max-w-xs sm:max-w-md md:max-w-2xl">{currentSlideData.description}</p>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 sm:p-3 rounded-full shadow"
      >
        <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 sm:p-3 rounded-full shadow"
      >
        <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Play/Pause button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/50 hover:bg-white text-black p-2 sm:p-3 rounded-full shadow"
      >
        {isPaused ? <Play size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Pause size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />}
      </button>
    </div>
  );
};

export default HeroSlider;
