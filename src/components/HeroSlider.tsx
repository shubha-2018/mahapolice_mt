import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import local images from assets
import policeImg2 from "../assets/images/police1.jpg";
import policecar from "../assets/images/office1.jpg";
import policeImg3 from "../assets/images/police10.jpg";
import policeImg4 from "../assets/images/police4.jpg";
import policeImg5 from "../assets/images/police5.jpg";
import policeImg6 from "../assets/images/police7.jpg";
import policecar2 from "../assets/images/PoliceCar2.jpg";
import car4 from "../assets/images/car4.jpg";
import boat1 from "../assets/images/boat1.jpg";
import boat3 from "../assets/images/boat3.jpg";
import police1 from "../assets/images/police1.jpg";
import allpoliceteam from "../assets/images/allpoliceteam.jpg";
import police2 from "../assets/images/police22.jpg";
import police11 from "../assets/images/igoffice.jpg";
import car11 from "../assets/images/car11.jpg";
import bus1 from "../assets/images/bus1.jpg";
import kaman from "../assets/images/bus2.jpg";
import kaman1 from "../assets/images/prashikshanoffice1.jpg";

const Gear = ({ size, teeth, x, y, speed, reverse, opacity = 0.15 }) => {
  const radius = size / 2;
  const innerRadius = radius * 0.6;
  const toothHeight = radius * 0.2;

  let path = '';
  for (let i = 0; i < teeth; i++) {
    const angle1 = (i * 2 * Math.PI) / teeth;
    const angle2 = ((i + 0.4) * 2 * Math.PI) / teeth;
    const angle3 = ((i + 0.6) * 2 * Math.PI) / teeth;
    const angle4 = ((i + 1) * 2 * Math.PI) / teeth;
    const outerRadius = radius + toothHeight;

    if (i === 0) path += `M ${radius * Math.cos(angle1)} ${radius * Math.sin(angle1)} `;
    path += `L ${outerRadius * Math.cos(angle1)} ${outerRadius * Math.sin(angle1)} `;
    path += `L ${outerRadius * Math.cos(angle2)} ${outerRadius * Math.sin(angle2)} `;
    path += `L ${radius * Math.cos(angle2)} ${radius * Math.sin(angle2)} `;
    path += `L ${radius * Math.cos(angle4)} ${radius * Math.sin(angle4)} `;
  }
  path += 'Z';

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{
        animation: `${reverse ? 'rotateReverse' : 'rotate'} ${speed}s linear infinite`,
        transformOrigin: 'center',
      }}
      opacity={opacity}
    >
      <path d={path} fill="currentColor" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <circle cx="0" cy="0" r={innerRadius} fill="currentColor" opacity="0.7" />
      <circle cx="0" cy="0" r={innerRadius * 0.3} fill="currentColor" opacity="1" />
    </g>
  );
};

const sliderData = [
  { 
    id: 1, 
    image: police1,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 2, 
    image: police2,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 3, 
    image: police11,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 4, 
    image: car11,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 5, 
    image: bus1,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 6, 
    image: kaman,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 7, 
    image: policeImg5,
    title: "",
    subtitle: "",
    description: ""
  },
  { 
    id: 8, 
    image: policeImg6,
    title: "",
    subtitle: "",
    description: ""
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isHovered || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isPaused]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  const goToSlide = (index) => setCurrentSlide(index);
  const togglePlayPause = () => setIsPaused(!isPaused);

  const currentSlideData = sliderData[currentSlide];

  return (
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
        }
      `}</style>

      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-20 mt-20">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-25"
            src="https://cdn.pixabay.com/video/2022/11/14/139162-771217463_large.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        {/* Animated Gears - Only in slider section */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
            </linearGradient>
            <filter id="gearGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g fill="url(#gearGradient)" filter="url(#gearGlow)">
            {/* Center large gear */}
            <Gear size={320} teeth={24} x="50%" y="50%" speed={30} reverse={false} opacity={0.25} />
            
            {/* Surrounding gears in circle pattern */}
            <Gear size={220} teeth={18} x="50%" y="25%" speed={22} reverse={true} opacity={0.3} />
            <Gear size={200} teeth={16} x="70%" y="35%" speed={20} reverse={false} opacity={0.28} />
            <Gear size={190} teeth={15} x="75%" y="55%" speed={19} reverse={true} opacity={0.27} />
            <Gear size={210} teeth={17} x="65%" y="72%" speed={21} reverse={false} opacity={0.29} />
            <Gear size={200} teeth={16} x="45%" y="75%" speed={20} reverse={true} opacity={0.28} />
            <Gear size={190} teeth={15} x="28%" y="68%" speed={19} reverse={false} opacity={0.27} />
            <Gear size={200} teeth={16} x="22%" y="48%" speed={20} reverse={true} opacity={0.28} />
            <Gear size={210} teeth={17} x="30%" y="30%" speed={21} reverse={false} opacity={0.29} />
            
            {/* Additional corner gears */}
            <Gear size={160} teeth={13} x="15%" y="15%" speed={17} reverse={true} opacity={0.25} />
            <Gear size={150} teeth={12} x="85%" y="15%" speed={16} reverse={false} opacity={0.24} />
            <Gear size={155} teeth={13} x="15%" y="85%" speed={17} reverse={false} opacity={0.25} />
            <Gear size={160} teeth={13} x="85%" y="85%" speed={17} reverse={true} opacity={0.25} />
          </g>
        </svg>

        {/* Floating Particles - Only in slider section */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 8 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: 0.5
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10" />

        {/* Slider Container */}
        <div 
          className={`relative w-full max-w-7xl mx-auto overflow-hidden transition-all duration-1000 px-4 z-20
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slide Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{currentSlideData.title}</h2>
              <h3 className="text-xl md:text-3xl mb-2 drop-shadow-md">{currentSlideData.subtitle}</h3>
              <p className="text-base md:text-lg mt-4 max-w-2xl drop-shadow-md">{currentSlideData.description}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-white/30"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-white/30"
            >
              <ChevronRight size={28} />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-white/30"
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3 bg-blue-500 shadow-lg shadow-blue-500/50"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;