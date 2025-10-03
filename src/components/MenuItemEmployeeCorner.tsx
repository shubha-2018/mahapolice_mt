import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguageContext } from "@/context/LanguageContext";
import DgpImg from '../assets/images/morale_sir.jpg'; 

interface EmployeeCornerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmployeeCorner: React.FC<EmployeeCornerProps> = ({ open, onOpenChange }) => {
  const { language } = useLanguageContext();

  const t = (textObj: { marathi: string; english: string }) =>
    language === "marathi" ? textObj.marathi : textObj.english;

  // Navigation links
  const navItems = [
    { label: t({ marathi: "बदली आदेश / पदस्थापना", english: "Transfer Orders" }), path: "/transfer-orders" },
    { label: t({ marathi: "सेवा ज्येष्ठता यादी", english: "Seniority List" }), path: "/seniority-list" },
    { label: t({ marathi: "कार्यालयीन आदेश व परिपत्रक", english: "DGP Orders" }), path: "/dgp-orders" },
    { label: t({ marathi: "प्रशिक्षण", english: "Training" }), path: "/training" },
    { label: t({ marathi: "फोटो गॅलरी", english: "Photo Gallery" }), path: "/photo-gallery" },
    { label: t({ marathi: "उपक्रम", english: "Undertaking Gellary" }), path: "/undertaking-gellary" },

  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-0 overflow-hidden transition-colors duration-500">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-20 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={t({ marathi: "बंद करा", english: "Close" })}
        >
          <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>

        <DialogHeader className="p-0">
          <div className="bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-500" style={{ minHeight: "400px" }}>
            {/* Decorative Stripes */}
            <div className="absolute top-0 right-0 w-32 h-full">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-600 via-white to-blue-600 dark:via-gray-900 transform skew-x-12 origin-top-right"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start p-6 md:p-8 gap-6 md:gap-8">
              {/* Left Navigation */}
              <div className="flex flex-col w-full md:w-1/4">
                <nav className="space-y-2">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => onOpenChange(false)}
                      className="block text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-base md:text-lg border-b border-gray-300 dark:border-gray-600 pb-2 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Center Profile */}
              <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-red-600 via-white to-blue-600 dark:via-gray-900 transition-colors">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1">
                    <img
                      src={DgpImg}
                      alt={t({ marathi: "डीजीपी पोलीस", english: "Police DGP" })}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://www.vanjariworld.com/wp-content/uploads/2018/04/Ashok-Morale.jpeg";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Quote */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-4 -left-4 text-6xl md:text-8xl text-gray-300 dark:text-gray-600 font-serif leading-none select-none">"</div>
                <div className="relative z-10 pl-4 md:pl-8">
                  <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-relaxed mb-6 font-medium">
                    {t({
                      marathi:
                        "महाराष्ट्र पोलीस मोटार  परिवहन विभाग राज्यभरातील पोलीस बलांचा मेरुदंड आहे. आमचे आधुनिक वाहन संच आणि तांत्रिक सुविधा पोलीस कार्यक्षमता वाढवण्यात महत्त्वपूर्ण भूमिका बजावतात. पर्यावरण संरक्षणासाठी इलेक्ट्रिक वाहनांचा वापर वाढवून आम्ही भविष्याच्या दिशेने वाटचाल करत आहोत. आमच्या कुशल ड्रायव्हर्स आणि तांत्रिक कर्मचार्‍यांचे योगदान अतुलनीय आहे",
                      english:
                        "Maharashtra Police Motor Transport Department is the backbone of police forces across the state. Our modern fleet and technical facilities play a key role in enhancing police efficiency. Increasing use of electric vehicles supports environmental protection. Our skilled drivers and technical staff contributions are unmatched.",
                    })}
                  </p>

                  <div className="flex justify-end items-start">
                    <div className="text-right">
                      <div className="text-3xl md:text-4xl text-gray-300 dark:text-gray-500 font-serif leading-none mb-2 select-none">"</div>
                      <div className="text-blue-900 dark:text-blue-400 font-bold text-base md:text-lg">श्री अशोक मोराळे</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {t({
                          marathi:
                            "विशेष पोलीस महानिरीक्षक\nमोटार  परिवहन विभाग\nमहाराष्ट्र राज्य, पुणे",
                          english:
                            "Special Inspector General of Police\nMotor Transport Department\nMaharashtra State, Pune",
                        })
                          .split("\n")
                          .map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 right-0 h-2 w-full">
              <div className="h-full bg-gradient-to-r from-transparent via-red-600 to-blue-600 dark:via-gray-700 transition-colors"></div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeCorner;