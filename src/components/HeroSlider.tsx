import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  description: string;
  images: string[]; // multiple images support
}

const slides: SlideData[] = [
  {
    id: 1,
    title: 'पोलीस वाहन व्यवस्थापन',
    description: 'कार्यक्षम ताफा, सतत सेवा',
    images: [
      "https://images.indianexpress.com/2024/03/187-RTO-Interceptor-vehicles-of-RTO-launch-by-Maharashtra-CM-Eknath-Shinde-today-morning-in-Mumbai.Express-Photo-by-Amit-Chakravarty.jpg",
      
    ]
  },
  {
    id: 2,
    title: 'दुरुस्ती व देखभाल उत्कृष्टता',
    description: 'प्रत्येक वाहन सज्ज, प्रत्येक मिशन यशस्वी',
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Mumbai_Police_Mahindra_Bolero_Patrol_Car.jpg"
    ]
  },
  {
    id: 3,
    title: 'हरित पोलीस वाहतूक',
    description: 'पर्यावरणपूरक वाहनं – सुरक्षित भविष्यासाठी',
    images: [
      "https://www.hindustantimes.com/ht-img/img/2025/05/15/550x309/Pune--Police-personnel-guard-at-the-Swargate-Bus-S_1747336825931.jpg"
    ]
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden bg-gradient-to-br from-primary to-navy">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Show first image as background */}
            <img
              src={slide.images[0]}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="container mx-auto px-4 h-full flex items-end pb-12">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 opacity-90 animate-fade-in-up">
                    {slide.description}
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="police-button-accent animate-fade-in-up button-visible button-hover-effect"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Thumbnails / extra images below */}
            {slide.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/40 p-2 rounded-lg">
                {slide.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumbnail-${i}`}
                    className="w-16 h-12 object-cover rounded cursor-pointer hover:scale-105 transition"
                    onClick={() => window.open(img, "_blank")}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
      >
        <ChevronLeft size={32} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
      >
        <ChevronRight size={32} />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-glow' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
