import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import EventBoxes from '@/components/EventBoxes';
import OurImpact from '@/components/OurImpact';
import Leadership from '@/components/Leadership';
import IGPMessage from '@/components/IGPMessage';
import AboutSection from '@/components/AboutSection';
import QuickAccess from '@/components/QuickAccess';
import LatestUpdates from '@/components/LatestUpdates';
import DirectorsDesk from  '@/components/IPSMessage';
import { Link } from "react-router-dom";


import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      
      {/* Hero Section with Slider and Event Boxes */}
      <div className="relative">
        <EventBoxes />
      </div>

      {/* Our Impact Section */}
      <OurImpact />

      {/* Leadership Section */}
      <Leadership />


      <DirectorsDesk />

      {/* Special IGP's Message */}
      <IGPMessage />

      {/* About Motor Transport & What's New */}
      <AboutSection />

      {/* Quick Access */}
      <QuickAccess />

      {/* Latest Updates */}
      <LatestUpdates />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
