


 import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react";

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
  const [direction, setDirection] = useState('next');
  const [transitionEffect, setTransitionEffect] = useState('slide');

  useEffect(() => {
    if (isPaused) return; // Only pause when button clicked, not on hover

    const timer = setInterval(() => {
      setDirection('next');
      // Cycle through different effects
      const effects = ['slide', 'zoom', 'flip'];
      setTransitionEffect(effects[Math.floor(Math.random() * effects.length)]);
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setDirection('next');
    const effects = ['slide', 'zoom', 'flip'];
    setTransitionEffect(effects[Math.floor(Math.random() * effects.length)]);
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };
  
  const prevSlide = () => {
    setDirection('prev');
    const effects = ['slide', 'zoom', 'flip'];
    setTransitionEffect(effects[Math.floor(Math.random() * effects.length)]);
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };
  
  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    const effects = ['slide', 'zoom', 'flip'];
    setTransitionEffect(effects[Math.floor(Math.random() * effects.length)]);
    setCurrentSlide(index);
  };
  
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
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5); }
        }
        @keyframes slide-in-right {
          from { 
            transform: translateX(100%) scale(0.8) rotateY(-25deg); 
            opacity: 0; 
            filter: blur(10px);
          }
          to { 
            transform: translateX(0) scale(1) rotateY(0deg); 
            opacity: 1; 
            filter: blur(0px);
          }
        }
        @keyframes slide-in-left {
          from { 
            transform: translateX(-100%) scale(0.8) rotateY(25deg); 
            opacity: 0; 
            filter: blur(10px);
          }
          to { 
            transform: translateX(0) scale(1) rotateY(0deg); 
            opacity: 1; 
            filter: blur(0px);
          }
        }
        @keyframes zoom-rotate {
          0% { transform: scale(0.5) rotate(-180deg); opacity: 0; filter: blur(20px); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; filter: blur(0px); }
        }
        @keyframes flip-in {
          0% { transform: perspective(1000px) rotateX(-90deg); opacity: 0; }
          100% { transform: perspective(1000px) rotateX(0deg); opacity: 1; }
        }
        @keyframes fade-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes border-dance {
          0% { border-color: rgba(59, 130, 246, 0.5); }
          33% { border-color: rgba(139, 92, 246, 0.5); }
          66% { border-color: rgba(236, 72, 153, 0.5); }
          100% { border-color: rgba(59, 130, 246, 0.5); }
        }
        .slide-animation {
          animation: ${
            transitionEffect === 'zoom' 
              ? 'zoom-rotate 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
              : transitionEffect === 'flip'
              ? 'flip-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              : direction === 'next' 
              ? 'slide-in-right 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'slide-in-left 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
          };
        }
        .text-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        .border-animated {
          animation: border-dance 3s linear infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .nav-button:hover {
          transform: scale(1.15);
        }
        .nav-button:active {
          transform: scale(0.95);
        }
      `}</style>

      {/* <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-20 mt-20"> */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden pt-[98px] mt-0">
        {/* Enhanced Background Video with Multiple Overlays */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-20"
            src="https://cdn.pixabay.com/video/2022/11/14/139162-771217463_large.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        {/* Animated Gears with Enhanced Styling */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
            <filter id="gearGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g fill="url(#gearGradient)" filter="url(#gearGlow)">
            <Gear size={320} teeth={24} x="50%" y="50%" speed={30} reverse={false} opacity={0.3} />
            <Gear size={220} teeth={18} x="50%" y="25%" speed={22} reverse={true} opacity={0.35} />
            <Gear size={200} teeth={16} x="70%" y="35%" speed={20} reverse={false} opacity={0.32} />
            <Gear size={190} teeth={15} x="75%" y="55%" speed={19} reverse={true} opacity={0.31} />
            <Gear size={210} teeth={17} x="65%" y="72%" speed={21} reverse={false} opacity={0.33} />
            <Gear size={200} teeth={16} x="45%" y="75%" speed={20} reverse={true} opacity={0.32} />
            <Gear size={190} teeth={15} x="28%" y="68%" speed={19} reverse={false} opacity={0.31} />
            <Gear size={200} teeth={16} x="22%" y="48%" speed={20} reverse={true} opacity={0.32} />
            <Gear size={210} teeth={17} x="30%" y="30%" speed={21} reverse={false} opacity={0.33} />
            <Gear size={160} teeth={13} x="15%" y="15%" speed={17} reverse={true} opacity={0.29} />
            <Gear size={150} teeth={12} x="85%" y="15%" speed={16} reverse={false} opacity={0.28} />
            <Gear size={155} teeth={13} x="15%" y="85%" speed={17} reverse={false} opacity={0.29} />
            <Gear size={160} teeth={13} x="85%" y="85%" speed={17} reverse={true} opacity={0.29} />
          </g>
        </svg>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(236, 72, 153, 0.8)'][Math.floor(Math.random() * 3)]
                }, transparent)`,
                boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
                animation: `float ${Math.random() * 10 + 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>

        {/* Animated Light Beams */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
              style={{
                left: `${(i + 1) * 20}%`,
                animation: `shimmer ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10" />

        {/* Slider Container with Enhanced Design */}
        <div 
          className={`relative w-full max-w-7xl mx-auto overflow-visible transition-all duration-1000 px-4 z-20
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative Corner Elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 border-t-4 border-l-4 border-blue-500/50 rounded-tl-3xl pointer-events-none"></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 border-t-4 border-r-4 border-purple-500/50 rounded-tr-3xl pointer-events-none"></div>

          {/* Enhanced Slide Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-animated" style={{ 
            borderWidth: '3px',
            borderStyle: 'solid',
            animation: 'border-dance 3s linear infinite, pulse-glow 2s ease-in-out infinite'
          }}>
            {/* Shimmer Effect Overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  animation: 'shimmer 3s infinite'
                }}
              />
            </div>

            <img
              key={currentSlide}
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="slide-animation w-full h-[500px] object-cover transition-all duration-700"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.7s ease-out'
              }}
            />

            {/* Enhanced Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30" />

            {/* Enhanced Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="nav-button absolute top-1/2 left-4 transform -translate-y-1/2 glass-effect hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
            >
              <ChevronLeft size={32} strokeWidth={3} />
            </button>
            <button
              onClick={nextSlide}
              className="nav-button absolute top-1/2 right-4 transform -translate-y-1/2 glass-effect hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
            >
              <ChevronRight size={32} strokeWidth={3} />
            </button>

            {/* Enhanced Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="nav-button absolute bottom-6 right-6 glass-effect hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
            >
              {isPaused ? <Play size={24} /> : <Pause size={24} />}
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-6 left-6 glass-effect px-4 py-2 rounded-full text-white font-bold text-sm">
              {currentSlide + 1} / {sliderData.length}
            </div>
          </div>

          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? "w-16 h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                    : "w-4 h-4 glass-effect hover:bg-white/40 hover:scale-125"
                }`}
              />
            ))}
          </div>

          {/* Decorative Bottom Corner Elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-4 border-l-4 border-blue-500/50 rounded-bl-3xl pointer-events-none"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-4 border-r-4 border-purple-500/50 rounded-br-3xl pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;