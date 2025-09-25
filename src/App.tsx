


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
import OrganizationalChart from "./components/FlowChart";
import RangePage from "./components/RangePage";
import BruhMumbai from "./components/BruhMumbai"
import ScrollToTop from "./components/ScrollToTop"


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
           <ScrollToTop />
            {/* ✅ Header always visible */}
            <Header />

            {/* ✅ Routes below Header */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/directors-desk" element={<DirectorsDesk />} />
              <Route path="/aboutpage" element={<AboutUs />} />
              <Route path="/organizationpage" element={<OrganisationPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<OrganizationalChart />} />
              <Route path="/range/:id" element={<RangePage />} />
                <Route path="/extra-card" element={<BruhMumbai />} />

              
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
