// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import police1 from '../assets/images/police1.jpg';
// import police3 from '../assets/images/police3.jpg';
// import police6 from '../assets/images/police6.jpg';
// import police7 from '../assets/images/police7.jpg';
// import police4 from '../assets/images/police4.jpg';
// import police0 from '../assets/images/police0.jpg';

// interface SlideData {
//   id: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// const sliderData: SlideData[] = [
//   { id: 1, title: '', description: '', images: [police0] },
//   { id: 2, title: '', description: '', images: [police1] },
//   { id: 3, title: '', description: '', images: [police4] },
//   { id: 4, title: '', description: '', images: [police3] },
//   { id: 5, title: '', description: '', images: [police6] },
//   { id: 6, title: '', description: '', images: [police7] },
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative w-full h-96 md:h-[500px] lg:h-[550px] overflow-hidden bg-gray-900 rounded-xl shadow-lg flex items-center justify-center mt-2 ">
//       {sliderData.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         >
//           {/* Fixed Aspect Ratio Box */}
//           <div className="w-full h-full flex items-center justify-center bg-white">
//             <img
//               src={slide.images[0]}
//               alt={`Police slide ${slide.id}`}
//               className="max-h-full max-w-full object-contain rounded-lg shadow-md"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       ))}

//       {/* Left Arrow */}
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//       >
//         <ChevronLeft className="h-5 w-5 text-gray-700" />
//       </Button>

//       {/* Right Arrow */}
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//       >
//         <ChevronRight className="h-5 w-5 text-gray-700" />
//       </Button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
//         {sliderData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
//               index === currentSlide
//                 ? 'bg-blue-600 border-blue-600 scale-125 shadow-lg'
//                 : 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-100 hover:scale-110'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;



// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Shield, Star, Users, Award } from 'lucide-react';

// // Mock images - replace with your actual police images
// const mockImages = [
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23e3f2fd'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' text-anchor='middle' fill='%231976d2'%3EPolice Image 1%3C/text%3E%3C/svg%3E",
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f3e5f5'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' text-anchor='middle' fill='%237b1fa2'%3EPolice Image 2%3C/text%3E%3C/svg%3E",
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23e8f5e8'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' text-anchor='middle' fill='%23388e3c'%3EPolice Image 3%3C/text%3E%3C/svg%3E",
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23fff3e0'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' text-anchor='middle' fill='%23f57c00'%3EPolice Image 4%3C/text%3E%3C/svg%3E",
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23ffebee'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' text-anchor='middle' fill='%23d32f2f'%3EPolice Image 5%3C/text%3E%3C/svg%3E",
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23e1f5fe'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' text-anchor='middle' fill='%230277bd'%3EPolice Image 6%3C/text%3E%3C/svg%3E"
// ];

// interface SlideData {
//   id: number;
//   image: string;
// }

// const sliderData: SlideData[] = [
//   { id: 1, image: mockImages[0] },
//   { id: 2, image: mockImages[1] },
//   { id: 3, image: mockImages[2] },
//   { id: 4, image: mockImages[3] },
//   { id: 5, image: mockImages[4] },
//   { id: 6, image: mockImages[5] }
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered) return;
    
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [isHovered]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div 
//       className="relative w-full max-w-8xl mx-auto h-[580px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900  shadow-2xl"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:50px_50px]"></div>
//       </div>

//       {/* Image Container - Full Width Centered */}
//       <div className="relative h-full flex items-center justify-center px-8">
//         {sliderData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="w-full h-full flex items-center justify-center">
//               <div className="relative w-full h-full max-w-5xl">
//                 <img
//                   src={slide.image}
//                   alt={`Police slide ${slide.id}`}
//                   className="w-full h-full object-contain rounded-2xl shadow-2xl"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
//       >
//         <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-200" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
//       >
//         <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-200" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {sliderData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`relative transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 h-3 bg-blue-400 rounded-full'
//                 : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125'
//             }`}
//           >
//             {index === currentSlide && (
//               <div className="absolute inset-0 bg-blue-300 rounded-full animate-pulse"></div>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-10">
//         <div 
//           className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-linear"
//           style={{ 
//             width: `${((currentSlide + 1) / sliderData.length) * 100}%` 
//           }}
//         ></div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/10"></div>
//       <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full border border-blue-300/20"></div>
//     </div>
//   );
// };

// export default HeroSlider;









// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // ✅ Import your actual images
// import policeImg1 from "../assets/images/police0.jpg";
// import policeImg2 from "../assets/images/police1.jpg";
// import policeImg4 from "../assets/images/police3.jpg";
// import policeImg5 from "../assets/images/police4.jpg";
// import policeImg6 from "../assets/images/police5.jpg";
// import policeImg7 from "../assets/images/police7.jpg";

// interface SlideData {
//   id: number;
//   image: string;
// }

// const sliderData: SlideData[] = [
//   { id: 1, image: policeImg1 },
//   { id: 2, image: policeImg2 },
//   { id: 4, image: policeImg4 },
//   { id: 5, image: policeImg5 },
//   { id: 6, image: policeImg6 },
//   { id: 7, image: policeImg7 },
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // ✅ Auto-scroll logic (corrected)
//   useEffect(() => {
//     if (isHovered) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 4000); // 4 sec

//     return () => clearInterval(timer);
//   }, [isHovered]); // 🔑 remove currentSlide from dependency

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + sliderData.length) % sliderData.length
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div
//       className="relative w-full max-w-8xl mx-auto h-[580px] overflow-hidden bg-white shadow-2xl mt-28"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <div className="relative h-full flex items-center justify-center px-8">
//         {sliderData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={`Police slide ${slide.id}`}
//               className="w-full h-full object-contain rounded-2xl shadow-2xl"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full"
//       >
//         <ChevronLeft className="w-6 h-6 text-white" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full"
//       >
//         <ChevronRight className="w-6 h-6 text-white" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {sliderData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === currentSlide ? "bg-blue-500 scale-125" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;




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
      className={`relative w-full max-w-7xl mx-auto overflow-hidden transition-all duration-1000  mt-32
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
