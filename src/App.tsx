import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/context/LanguageContext";

import DirectorsDesk from "@/components/DirectorsDesk";
import AboutUs from "@/components/AboutUs";
import OrganisationPage from "@/pages/OrganizationPage";
import Header from "./components/Header";
import BackButton from "./components/BackButton";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import OrganizationalChart from "./components/FlowChart";
import RangePage from "./components/RangePage";
import ScrollToTop from "./components/ScrollToTop";
import TransferOrders from "./components/Circulers";
import Organisationtable1 from "./components/Organizationtable1";
import UnitDyspSp from "./components/UnitDyspSp";
import PhotoGallery from "./pages/PhotoGellary";
import UndertakingGallery from "./pages/UndertakingGellary";
import Training from "./pages/Training";
import SocialMediaFloatButton from "./components/SocialMediaFloatButton";
import GovermentLinks from "./components/GovermentLinks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <BackButton />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/directors-desk" element={<DirectorsDesk />} />
              <Route path="/aboutpage" element={<AboutUs />} />
              <Route path="/organizationpage" element={<OrganisationPage />} />
              <Route path="/organization-table" element={<Organisationtable1 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/organizational-chart" element={<OrganizationalChart />} />
              <Route path="/range/:id" element={<RangePage />} />
              <Route path="/unit-dysp" element={<UnitDyspSp />} />
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route path="/undertaking-gallery" element={<UndertakingGallery />} />
              <Route path="/training" element={<Training />} />
              <Route path="/transfer-orders" element={<TransferOrders />} />

              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            <GovermentLinks />
            <Footer />
            <SocialMediaFloatButton />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
