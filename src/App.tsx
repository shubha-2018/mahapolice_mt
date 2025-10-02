


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
import TransferOrders from "./components/Circulers";
import { ThemeProvider } from "next-themes";
import Organisationtable1 from "./components/Organizationtable1";
import UnitDyspSp   from "./components/UnitDyspSp";
import PhotoGallery  from "./pages/PhotoGellary";
import UndertakingGellary  from "./pages/UndertakingGellary";
import Training from "./pages/Training";


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
  <Route path="/organizational-chart" element={<OrganizationalChart />} /> {/* avoid duplicate "/" */}
  <Route path="/range/:id" element={<RangePage />} />
   <Route path="/" element={<Organisationtable1 />} />
  <Route path="/unit-dysp" element={<UnitDyspSp />} />
   <Route path="/photo-gallery" element={<PhotoGallery />} />
   <Route path="/undertaking-gellary" element={  <UndertakingGellary />} />
   <Route path="/training" element={  <Training />} />


         

  {/* Add Transfer Orders */}
  <Route path="/transfer-orders" element={<TransferOrders />} />


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
