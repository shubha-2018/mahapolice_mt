import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Add this import

interface EmployeeCornerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmployeeCorner: React.FC<EmployeeCornerProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-7xl bg-white rounded-2xl shadow-lg p-0 overflow-hidden"
      >
        {/* ✅ Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-20 rounded-full bg-gray-200 hover:bg-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <DialogHeader className="p-0">
          {/* Main Container with Background */}
          <div
            className="bg-gray-50 relative overflow-hidden"
            style={{ minHeight: "400px" }}
          >
            {/* Red-Blue diagonal stripe decoration */}
            <div className="absolute top-0 right-0 w-32 h-full">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-600 via-white to-blue-600 transform skew-x-12 origin-top-right"></div>
            </div>

            <div className="relative z-10 flex items-start p-8 gap-8">
              {/* ✅ Left Navigation Menu */}
              <div className="flex flex-col w-1/4 min-w-max">
                <nav className="space-y-3">
                  {[
                    { label: "फ्लॅश", path: "/flash" },
                    { label: "बदली आदेश / पदस्थापना", path: "/transfer-orders" },
                    { label: "मा. विशेष पोलीस महानिरीक्षक कार्यालय आदेश ", path: "/dgp-orders" },
                    { label: "उपक्रम ", path: "/circulars" },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => onOpenChange(false)} // ✅ close dialog on nav
                      className="block text-blue-900 hover:text-blue-700 font-medium text-lg border-b border-gray-300 pb-2 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Center Profile Image */}
              <div className="flex flex-col items-center justify-center w-1/4">
                <div className="relative">
                  {/* Circular border with red-blue gradient */}
                  <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-r from-red-600 via-white to-blue-600">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <img
                        src="/images/dgp.jpg"
                        alt="Police DGP"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.src ="https://www.vanjariworld.com/wp-content/uploads/2018/04/Ashok-Morale.jpeg"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Quote Section */}
              <div className="w-1/2 relative">
                {/* Large opening quote */}
                <div className="absolute -top-4 -left-4 text-8xl text-gray-300 font-serif leading-none select-none">
                  "
                </div>

                <div className="relative z-10 pl-8">
                  <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
                    महाराष्ट्र पोलीस मोटर परिवहन विभाग राज्यभरातील पोलीस बलांचा मेरुदंड आहे. आमचे आधुनिक वाहन संच आणि तांत्रिक सुविधा पोलीस कार्यक्षमता वाढवण्यात महत्त्वपूर्ण भूमिका बजावतात. पर्यावरण संरक्षणासाठी इलेक्ट्रिक वाहनांचा वापर वाढवून आम्ही भविष्याच्या दिशेने वाटचाल करत आहोत. आमच्या कुशल ड्रायव्हर्स आणि तांत्रिक कर्मचार्‍यांचे योगदान अतुलनीय आहे
                  </p>

                  {/* Closing quote and attribution */}
                  <div className="flex justify-end items-start">
                    <div className="text-right">
                      <div className="text-4xl text-gray-300 font-serif leading-none mb-2 select-none">
                        "
                      </div>
                      <div className="text-blue-900 font-bold text-lg">
                        श्री अशोक मोराळे  (IPS)
                      </div>
                     <div className="text-gray-600 text-sm">
                     विशेष पोलीस महानिरीक्षक <br />
                      मोटर परिवहन विभाग <br />
                      महाराष्ट्र राज्य, पुणे
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative stripe */}
            <div className="absolute bottom-0 right-0 h-2 w-full">
              <div className="h-full bg-gradient-to-r from-transparent via-red-600 to-blue-600"></div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeCorner;
