// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { LanguageToggle } from './LanguageToggle';
// import { ThemeToggle } from './ThemeToggle';
// import { useLanguage } from '@/hooks/useLanguage';
// import { translations } from '@/data/translations';
// import {
//   Menu,
//   Accessibility,
//   ExternalLink,
//   ChevronDown,
// } from 'lucide-react';

// import policelogo from "../assets/images/mahapolice-logo-removebg-preview.png";
// import Emblem from "../assets/images/Emblem12.png";
// import motorlogo from "../assets/images/mt-logo.jpeg";

// import { Link } from "react-router-dom";
// import EmployeeCorner from "@/components/MenuItemEmployeeCorner";

// declare global {
//   interface Window {
//     AccessibilityWidget?: {
//       init?: (config?: Record<string, unknown>) => void;
//       open?: () => void;
//       close?: () => void;
//     };
//   }
// }

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [employeeOpen, setEmployeeOpen] = useState(false);
//   const [sssDropdownOpen, setSssDropdownOpen] = useState(false);
//   const [mobileSssOpen, setMobileSssOpen] = useState(false);

//   const { language: lang } = useLanguage();

//   const [widgetReady] = useState(true);

//   const navItems = [
//     { key: 'home', href: '/' },
//     { key: 'about', href: '/aboutpage' },
//     { key: 'organization', href: '/organizationpage' },
//     { key: 'employee', href: '#employeecorner' },
//     {
//       key: 'sss',
//       href: 'https://117.222.38.165/SSS',
//       external: true,
//     },
//     { key: 'contact', href: '/contact' },
//   ];

//   const sssServices = [
//     'वाहनांची दुरुस्ती व देखभाल सेवा',
//     'वाहन ताफा व्यवस्थापन सेवा',
//     'चालक व तांत्रिक प्रशिक्षण सेवा',
//     'सागरी किनारा पेट्रोलिंग सेवा',
//     'RTI',
//     'SSS',
//   ];

//   const getNavLabel = (key: string) => {
//     if (key === 'sss') {
//       return lang === 'marathi'
//         ? 'सेवा विभाग'
//         : 'Services';
//     }

//     const item =
//       translations.nav[
//         key as keyof typeof translations.nav
//       ];

//     if (!item) return key.toUpperCase();

//     return item[lang] || key.toUpperCase();
//   };

//   return (
//     <header className="police-header fixed top-0 left-0 w-full z-50 bg-background shadow-md">
//       <div className="container mx-auto px-2 sm:px-4">

//         <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-3">

//           {/* Left Logos + Title */}
//           <div className="flex items-center gap-2 flex-shrink-0">

//             {/* Emblem */}
//             <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center">
//               <img
//                 src={Emblem}
//                 alt="Emblem"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Police Logo */}
//             <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden flex items-center justify-center">
//               <img
//                 src={policelogo}
//                 alt="Maharashtra Police Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Title */}
//             <div className="text-left max-w-[220px] sm:max-w-none">

//               <h1
//                 className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight ${
//                   lang === 'marathi'
//                     ? 'marathi-text'
//                     : 'english-text'
//                 }`}
//               >
//                 {lang === 'marathi' ? (
//                   'मोटार परिवहन विभाग, महाराष्ट्र राज्य पुणे'
//                 ) : (
//                   <>
//                     Motor Transport Department
//                     <br />
//                     Maharashtra State, Pune
//                   </>
//                 )}
//               </h1>

//               <p
//                 className={`text-xs sm:text-sm text-muted-foreground ${
//                   lang === 'marathi'
//                     ? 'marathi-text'
//                     : 'english-text'
//                 }`}
//               >
//                 {lang === 'marathi'
//                   ? 'महाराष्ट्र पोलीस अधिकृत संकेतस्थळ'
//                   : 'Official website of Maharashtra Police'}
//               </p>

//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6 relative">

//             {navItems.map((item) => {

//               // Employee Corner
//               if (item.key === 'employee') {
//                 return (
//                   <div
//                     key={item.key}
//                     className="relative"
//                   >
//                     <button
//                       onClick={() => setEmployeeOpen(true)}
//                       className={`police-nav-link flex items-center gap-1 ${
//                         lang === 'marathi'
//                           ? 'marathi-text'
//                           : 'english-text'
//                       }`}
//                     >
//                       {getNavLabel(item.key)}

//                       <ChevronDown className="w-4 h-4" />
//                     </button>
//                   </div>
//                 );
//               }

//               // SSS Dropdown
//               if (item.key === 'sss') {
//                 return (
//                   <div
//                     key={item.key}
//                     className="relative"
//                   >

//                     <button
//                       onClick={() =>
//                         setSssDropdownOpen(!sssDropdownOpen)
//                       }
//                       className={`police-nav-link flex items-center gap-1 ${
//                         lang === 'marathi'
//                           ? 'marathi-text'
//                           : 'english-text'
//                       }`}
//                     >
//                       {getNavLabel(item.key)}

//                       <ChevronDown className="w-4 h-4" />
//                     </button>

//                     {sssDropdownOpen && (
//                       <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-slide-down">

//                         <div className="px-4 py-2 font-bold text-gray-700 border-b">
//                           {getNavLabel(item.key)}
//                         </div>

//                         {sssServices.map((service, index) => {

//                           if (service === 'SSS') {
//                             return (
//                               <a
//                                 key={index}
//                                 href={item.href}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors rounded flex items-center justify-between"
//                               >
//                                 {service}

//                                 <ExternalLink className="w-4 h-4 text-gray-400" />
//                               </a>
//                             );
//                           }

//                           return (
//                             <div
//                               key={index}
//                               className="block px-4 py-2 text-gray-500 cursor-default"
//                             >
//                               {service}
//                             </div>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               // External Link
//               if (item.external) {
//                 return (
//                   <a
//                     key={item.key}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`police-nav-link flex items-center gap-1 ${
//                       lang === 'marathi'
//                         ? 'marathi-text'
//                         : 'english-text'
//                     }`}
//                   >
//                     {getNavLabel(item.key)}

//                     <ExternalLink className="w-4 h-4 text-gray-400" />
//                   </a>
//                 );
//               }

//               // Normal Link
//               return (
//                 <Link
//                   key={item.key}
//                   to={item.href}
//                   className={`police-nav-link ${
//                     lang === 'marathi'
//                       ? 'marathi-text'
//                       : 'english-text'
//                   }`}
//                 >
//                   {getNavLabel(item.key)}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-2 sm:gap-3">

//             {/* Accessibility */}
//             <Button
//               variant="ghost"
//               size="sm"
//               disabled={!widgetReady}
//               className="hover:bg-accent/10"
//               onClick={() =>
//                 window.AccessibilityWidget?.open?.()
//               }
//             >
//               <Accessibility
//                 size={20}
//                 className="text-primary"
//               />
//             </Button>

//             {/* Theme Toggle */}
//             <ThemeToggle />

//             {/* Language Toggle */}
//             <LanguageToggle />

//             {/* Mobile Menu */}
//             <Sheet
//               open={isOpen}
//               onOpenChange={setIsOpen}
//             >
//               <SheetTrigger
//                 asChild
//                 className="lg:hidden"
//               >
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                 >
//                   <Menu size={24} />
//                 </Button>
//               </SheetTrigger>

//               <SheetContent
//                 side="right"
//                 className="w-[300px] sm:w-[300px]"
//               >

//                 <nav className="flex flex-col gap-4 mt-8">

//                   {navItems.map((item) => {

//                     // Employee Button
//                     if (item.key === 'employee') {
//                       return (
//                         <button
//                           key={item.key}
//                           onClick={() => {
//                             setIsOpen(false);
//                             setEmployeeOpen(true);
//                           }}
//                           className="police-nav-link text-base py-2 text-left"
//                         >
//                           {getNavLabel(item.key)}
//                         </button>
//                       );
//                     }

//                     // SSS Dropdown
//                     if (item.key === 'sss') {
//                       return (
//                         <div
//                           key={item.key}
//                           className="flex flex-col gap-1"
//                         >

//                           <button
//                             onClick={() =>
//                               setMobileSssOpen(
//                                 !mobileSssOpen
//                               )
//                             }
//                             className="flex items-center justify-between px-4 py-2 font-semibold text-gray-600 border-b"
//                           >
//                             {getNavLabel(item.key)}

//                             <ChevronDown
//                               className={`w-4 h-4 transition-transform ${
//                                 mobileSssOpen
//                                   ? 'rotate-180'
//                                   : ''
//                               }`}
//                             />
//                           </button>

//                           {mobileSssOpen && (
//                             <div className="flex flex-col mt-1">

//                               {sssServices.map(
//                                 (service, idx) =>

//                                   service === 'SSS' ? (
//                                     <a
//                                       key={idx}
//                                       href={item.href}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="police-nav-link text-base py-2 flex items-center justify-between ml-4 hover:bg-blue-50 rounded transition-colors"
//                                     >
//                                       {service}

//                                       <ExternalLink className="w-4 h-4 text-gray-400" />
//                                     </a>
//                                   ) : (
//                                     <div
//                                       key={idx}
//                                       className="police-nav-link text-base py-2 ml-4 text-gray-500 cursor-default"
//                                     >
//                                       {service}
//                                     </div>
//                                   )
//                               )}
//                             </div>
//                           )}
//                         </div>
//                       );
//                     }

//                     // External Link
//                     if (item.external) {
//                       return (
//                         <a
//                           key={item.key}
//                           href={item.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="police-nav-link text-base py-2 flex items-center gap-1"
//                         >
//                           {getNavLabel(item.key)}

//                           <ExternalLink className="w-4 h-4 text-gray-400" />
//                         </a>
//                       );
//                     }

//                     // Normal Link
//                     return (
//                       <Link
//                         key={item.key}
//                         to={item.href}
//                         onClick={() => setIsOpen(false)}
//                         className="police-nav-link text-base py-2"
//                       >
//                         {getNavLabel(item.key)}
//                       </Link>
//                     );
//                   })}
//                 </nav>
//               </SheetContent>
//             </Sheet>

//             {/* Right Logo */}
//             <div className="hidden sm:flex w-14 h-14 sm:w-20 sm:h-20 rounded-full items-center justify-center overflow-hidden">
//               <img
//                 src={motorlogo}
//                 alt="Motor Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Employee Popup */}
//       <EmployeeCorner
//         open={employeeOpen}
//         onOpenChange={setEmployeeOpen}
//       />
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import {
  Menu,
  Accessibility,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

import policelogo from "../assets/images/mahapolice-logo-removebg-preview.png";
import Emblem from "../assets/images/Emblem12.png";
import motorlogo from "../assets/images/mt-logo.jpeg";

import { Link } from "react-router-dom";
import EmployeeCorner from "@/components/MenuItemEmployeeCorner";

declare global {
  interface Window {
    AccessibilityWidget?: {
      open?: () => void;
    };
  }
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [sssDropdownOpen, setSssDropdownOpen] = useState(false);
  const [mobileSssOpen, setMobileSssOpen] = useState(false);

  const { language: lang } = useLanguage();

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/aboutpage" },
    { key: "organization", href: "/organizationpage" },
    { key: "employee", href: "#employeecorner" },
    {
      key: "sss",
      href: "https://117.222.38.165/SSS",
      external: true,
    },
    { key: "contact", href: "/contact" },
  ];

  const sssServices = [
    "वाहनांची दुरुस्ती व देखभाल सेवा",
    "वाहन ताफा व्यवस्थापन सेवा",
    "चालक व तांत्रिक प्रशिक्षण सेवा",
    "सागरी किनारा पेट्रोलिंग सेवा",
    "RTI",
    "SSS",
  ];

  const getNavLabel = (key: string) => {
    if (key === "sss") {
      return lang === "marathi" ? "सेवा विभाग" : "Services";
    }

    const item = translations.nav[key as keyof typeof translations.nav];
    return item?.[lang] || key.toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md">
      <div className="container mx-auto px-2 sm:px-4">

        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-3">

          {/* LEFT SIDE LOGOS */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={Emblem} className="w-12 h-12 sm:w-16 sm:h-16" />
            <img src={policelogo} className="w-14 h-14 sm:w-20 sm:h-20" />

            <div className="text-left">
              <h1 className="text-sm sm:text-lg font-bold">
                Motor Transport Department, Maharashtra State, Pune
              </h1>
              <p className="text-xs text-muted-foreground">
                Official website of Maharashtra Police
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-6">

            {navItems.map((item) => {

              // EMPLOYEE
              if (item.key === "employee") {
                return (
                  <button
                    key={item.key}
                    onClick={() => setEmployeeOpen(true)}
                    className="flex items-center gap-1 font-medium"
                  >
                    {getNavLabel(item.key)}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                );
              }

              // SERVICES DROPDOWN (FIXED HOVER)
              if (item.key === "sss") {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setSssDropdownOpen(true)}
                    onMouseLeave={() => setSssDropdownOpen(false)}
                  >

                    <button className="flex items-center gap-1 font-medium">
                      {getNavLabel(item.key)}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {sssDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50">

                        <div className="px-4 py-2 font-bold border-b text-gray-700">
                          {getNavLabel(item.key)}
                        </div>

                        {sssServices.map((service, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 cursor-pointer"
                          >
                            {service}
                          </div>
                        ))}

                      </div>
                    )}
                  </div>
                );
              }

              // EXTERNAL LINK
              if (item.external) {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    {getNavLabel(item.key)}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                );
              }

              // NORMAL LINK
              return (
                <Link key={item.key} to={item.href}>
                  {getNavLabel(item.key)}
                </Link>
              );
            })}

          </nav>

          {/* RIGHT SIDE CONTROLS */}
          <div className="flex items-center gap-2">

            <Button
              variant="ghost"
              onClick={() => window.AccessibilityWidget?.open?.()}
            >
              <Accessibility />
            </Button>

            <ThemeToggle />
            <LanguageToggle />

            {/* MOBILE MENU */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">

                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {getNavLabel(item.key)}
                    </Link>
                  ))}

                  {/* MOBILE SERVICES */}
                  <div>
                    <button
                      onClick={() => setMobileSssOpen(!mobileSssOpen)}
                      className="flex justify-between w-full font-bold"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSssOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileSssOpen &&
                      sssServices.map((s, i) => (
                        <div key={i} className="py-2 text-gray-700">
                          {s}
                        </div>
                      ))}
                  </div>

                </nav>
              </SheetContent>
            </Sheet>

            <img src={motorlogo} className="w-14 h-14 hidden sm:block" />
          </div>

        </div>
      </div>

      {/* EMPLOYEE POPUP */}
      <EmployeeCorner
        open={employeeOpen}
        onOpenChange={setEmployeeOpen}
      />
    </header>
  );
};

export default Header;