// // import { Toaster } from "@/components/ui/toaster";
// // import { Toaster as Sonner } from "@/components/ui/sonner";
// // import { TooltipProvider } from "@/components/ui/tooltip";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { ThemeProvider } from "next-themes";
// // import Index from "./pages/Index";
// // import NotFound from "./pages/NotFound";
// // import { LanguageProvider } from "@/context/LanguageContext";
// // import DirectorsDesk from "../src/components/DirectorsDesk";
// // import AboutUs from "../src/components/AboutUs";


// // const queryClient = new QueryClient();

// // const App = () => (
// //   <QueryClientProvider client={queryClient}>
// //     <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
// //       <LanguageProvider>
// //         <TooltipProvider>
// //           <Toaster />
// //           <Sonner />
// //           <BrowserRouter>
// //             <Routes>
// //               <Route path="/" element={<Index />} />
// //               <Route path="/directors-desk" element={<DirectorsDesk />} />
// //                   <Route path="/aboutpage" element={<AboutUs />} />
             

               

// //               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
// //               <Route path="*" element={<NotFound />} />
// //             </Routes>
// //           </BrowserRouter>
// //         </TooltipProvider>
// //       </LanguageProvider>
// //     </ThemeProvider>
// //   </QueryClientProvider>
// // );

// // export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "next-themes";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import { LanguageProvider } from "@/context/LanguageContext";
// import DirectorsDesk from "@/components/DirectorsDesk";
// import AboutUs from "@/components/AboutUs";   // ✅ correct import
// import Header from "./components/Header";
// import OrganisationPage from "@/pages/OrganizationPage";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
//       <LanguageProvider>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//           <Routes>
//               <Route path="/" element={<Index />} />    
           
//           </Routes>
//             <Routes>
//               {/* <Route path="/" element={<Index />} />     */}
//               <Route path="/directors-desk" element={<DirectorsDesk />} />
//               <Route path="/aboutpage" element={<AboutUs />} />  {/* ✅ visible now */}
//               <Route path="/organizationpage" element= {<OrganisationPage/>}/>
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </TooltipProvider>
//       </LanguageProvider>
//     </ThemeProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/context/LanguageContext";
import DirectorsDesk from "@/components/DirectorsDesk";
import AboutUs from "@/components/AboutUs";
import OrganisationPage from "@/pages/OrganizationPage";
import Header from "./components/Header"; // ✅ Navbar
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import FlashPage from "./components/FlashPage";
import TransferOrder from "../src/components/TransferOrder"
import IGOfficeOrders from "../src/components/IGOfficeOrders"
import Circular from "../src/components/Circulers"

// import Phone from "../components/Phone";
import { ThemeProvider } from "next-themes";
// import PageAccessibilityChanger from "./components/accessibility/PageAccessibilityChanger";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" 	enableSystem={false}>
      		{/* <PageAccessibilityChanger /> */}
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* ✅ Header always visible */}
            <Header />

            {/* ✅ Routes below Header */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/directors-desk" element={<DirectorsDesk />} />
              <Route path="/aboutpage" element={<AboutUs />} />
              <Route path="/organizationpage" element={<OrganisationPage />} />
              <Route path="/contact" element={<Contact />} />
                {/* <Route path="/flash" element={<FlashPage />} /> */}
                {/* <Route path="/transfer-orders" element={<TransferOrder/>} /> */}
                {/* <Route path="//dgp-orders" element={<IGOfficeOrders/>} /> */}
                {/* <Route path="/circulars" element={<Circular/>} /> */}


  
              {/* <Route path="/employeecorner" element={<EmployeeCorner/>}/> */}

              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
