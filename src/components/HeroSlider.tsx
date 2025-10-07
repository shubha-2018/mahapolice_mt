



  import { useState, useEffect } from "react";
  import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

  // ✅ Import local images from assets
  // import policeImg1 from "../assets/images/police0.jpg";
  import policeImg2 from "../assets/images/police1.jpg";
  import policecar from "../assets/images/office1.jpg";
  import policeImg3 from "../assets/images/police10.jpg";
  import policeImg4 from "../assets/images/police4.jpg";
  import policeImg5 from "../assets/images/police5.jpg";
  import policeImg6 from "../assets/images/police7.jpg";
  import policecar2 from "../assets/images/PoliceCar2.jpg";
  import car4 from "../assets/images/car4.jpg"
  import boat1 from "../assets/images/boat1.jpg"
  import boat3 from "../assets/images/boat3.jpg"
  import police1 from "../assets/images/police1.jpg"
  import allpoliceteam  from "../assets/images/allpoliceteam.jpg"
  import police2 from "../assets/images/police22.jpg"
  import police11 from "../assets/images/igoffice.jpg"
  import car11 from "../assets/images/car11.jpg"
  import bus1 from "../assets/images/bus1.jpg"
  import kaman from "../assets/images/bus2.jpg"
  import kaman1 from "../assets/images/prashikshanoffice1.jpg"

  // import kaman from "../assets/images/prashikshanoffice1.jpgx"











  interface SlideData {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    description: string;
  }

  const sliderData: SlideData[] = [
    // { 
    //   id: 1, 
    //   image: policeImg1,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
    // { 
    //   id: 1, 
    //   image: policeImg2,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
    { 
      id:3 , 
      image: police1,
      title: "",
      subtitle: "",
      description: ""
    },
  
     { 
      id:3 , 
      image: police2,
      title: "",
      subtitle: "",
      description: ""
    },
     { 
      id:2 , 
      image: police11,
      title: "",
      subtitle: "",
      description: ""
    },
      { 
      id:2 , 
      image: car11,
      title: "",
      subtitle: "",
      description: ""
    },
    //  { 
    //   id: 4, 
    //   image: policecar2,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
    { 
      id: 4, 
      image: bus1,
      title: "",
      subtitle: "",
      description: ""
    },
    // { 
    //   id: 5, 
    //   image: car4,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
     { 
      id: 5, 
      image:kaman,
      title: "",
      subtitle: "",
      description: ""
    },
    //  { 
    //   id: 5, 
    //   image:kaman1,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
    
    // { 
    //   id: 5, 
    //   image: boat1,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
  
    { 
      id: 9, 
      image: policeImg5,
      title: "",
      subtitle: "",
      description: ""
    },
    { 
      id: 10, 
      image: policeImg6,
      title: "",
      subtitle: "",
      description: ""
    },
    //  { 
    //   id: 5, 
    //   image: boat3,
    //   title: "",
    //   subtitle: "",
    //   description: ""
    // },
  
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
        className={`relative w-full max-w-7xl mx-auto overflow-hidden transition-all duration-1000  mt-36
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slide image */}
        <img
          src={currentSlideData.image}
          alt={currentSlideData.title}
          className="w-full h-[500px] object-cover rounded-lg"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-6">
          <h2 className="text-3xl md:text-5xl font-bold">{currentSlideData.title}</h2>
          <h3 className="text-lg md:text-2xl mt-2">{currentSlideData.subtitle}</h3>
          <p className="mt-4 max-w-2xl">{currentSlideData.description}</p>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 bg-white/60 hover:bg-white text-black p-2 rounded-full shadow"
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
        </button>
      </div>
    );
  };

  export default HeroSlider;









