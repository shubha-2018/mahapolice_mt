import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguageContext();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  // Hide on home page
  if (location.pathname === "/") return null;

  return (
    <div className="fixed top-4 left-4 z-[9999]">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all duration-200 text-sm sm:text-base md:text-base mt-32"
        style={{ minWidth: '80px' }}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-medium">{language === "marathi" ? "मागे जा" : "Back"}</span>
      </button>
    </div>
  );
};

export default BackButton;
