import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/hooks/useLanguage";
import IMG1 from "@/assets/footer/1.webp";
import IMG2 from "@/assets/footer/2.webp";
import IMG3 from "@/assets/footer/3.webp";
import IMG4 from "@/assets/footer/4.webp";
import IMG5 from "@/assets/footer/5.webp";
import IMG6 from "@/assets/footer/6.webp";

const GovernmentLinks: React.FC = () => {
  const { language } = useLanguage();
  const [api, setApi] = React.useState(null);

  // Continuous auto-scroll effect
  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Reset to start when reaching the end
        api.scrollTo(0);
      }
    }, 2000); // Scroll every 2 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [api]);

  const items = [
    {
      href: "https://acbmaharashtra.gov.in/",
      src: IMG1,
      alt:
        language === "marathi"
          ? "अँटी करप्शन ब्युरो महाराष्ट्र"
          : "ACB Maharashtra",
    },
    {
      href: "https://mpanashik.gov.in/",
      src: IMG2,
      alt:
        language === "marathi"
          ? "महाराष्ट्र पोलीस अकॅडमी, नाशिक"
          : "Maharashtra Police Academy, Nashik",
    },
    {
      href: "https://aaplesarkar.mahaonline.gov.in/",
      src: IMG3,
      alt: language === "marathi" ? "आपले सरकार" : "Aaple Sarkar",
    },
    {
      href: "https://www.mahapolice.gov.in/",
      src: IMG4,
      alt: language === "marathi" ? "महाराष्ट्र पोलीस" : "Maharashtra Police",
    },
    {
      href: "https://www.startupindia.gov.in/",
      src: IMG5,
      alt: language === "marathi" ? "स्टार्टअप इंडिया" : "Startup India",
    },
    {
      href: "https://digitalindia.gov.in/",
      src: IMG6,
      alt: language === "marathi" ? "डिजिटल इंडिया" : "Digital India",
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent className="items-center">
            {[...items, ...items].map((item, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={item.alt}
                  title={item.alt}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default GovernmentLinks;