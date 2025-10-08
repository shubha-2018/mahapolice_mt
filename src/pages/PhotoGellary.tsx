import React, { useState } from 'react';
import { X, Heart, Maximize2 } from 'lucide-react';
import { useLanguage } from "@/hooks/useLanguage";

// ✅ Import all images
import photo1 from '../assets/images/t1.jpg';
import photo2 from '../assets/images/t2.jpg';
import photo3 from '../assets/images/t3.jpg';
import photo4 from '../assets/images/t4.jpg';
import photo5 from '../assets/images/t5.jpg';
import photo6 from '../assets/images/m11.jpg';
import photo7 from '../assets/images/m12.jpg';
import photo8 from '../assets/images/m13.jpg';
import photo9 from '../assets/images/m14.jpg';
import photo10 from '../assets/images/m15.jpg';
import photo11 from '../assets/images/a1.jpg';
import photo12 from '../assets/images/a2.jpg';
import photo13 from '../assets/images/a3.jpg';
import photo14 from '../assets/images/karmachari.jpg';
import photo15 from '../assets/images/t6.jpg';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());
  const { language } = useLanguage();

  // Photo data using imported images
  const galleryData = {
    featured: [
      { id: 1, url: photo1, title: { marathi: '', english: '' } },
      { id: 2, url: photo2, title: { marathi: '', english: '' } },
      { id: 3, url: photo3, title: { marathi: '', english: '' } },
      { id: 4, url: photo4, title: { marathi: '', english: '' } },
      { id: 5, url: photo5, title: { marathi: '', english: '' } }
    ],
    policeSection1: [
      { id: 6, url: photo6, title: { marathi: '', english: '' } },
      { id: 7, url: photo7, title: { marathi: '', english: '' } },
      { id: 8, url: photo8, title: { marathi: '', english: '' } },
      { id: 9, url: photo9, title: { marathi: '', english: '' } },
      { id: 10, url: photo10, title: { marathi: '', english: '' } }
    ],
    policeSection2: [
      { id: 14, url: photo14, title: { marathi: '', english: '' } },
      { id: 11, url: photo11, title: { marathi: '', english: '' } },
      { id: 12, url: photo12, title: { marathi: '', english: '' } },
      { id: 13, url: photo13, title: { marathi: '', english: '' } },
      { id: 15, url: photo15, title: { marathi: '', english: '' } }
    ]
  };

  const translations = {
    pageTitle: { marathi: 'फोटो गॅलरी', english: 'Photo Gallery' },
    pageSubtitle: { marathi: '', english: '' },
    maharashtraPolice: { marathi: '', english: '' },
    section1Title: { marathi: 'महिंद्रा कंपनी भेट', english: 'Police Events & Ceremonies' },
    section2Title: { marathi: 'आढावा बैठक / उत्कृष्ठ मोटार परिवहन विभाग पुरस्कार वितरण', english: 'Police Training & Operations' },
    viewButton: { marathi: 'पहा', english: 'VIEW' },
    closeText: { marathi: 'बाहेर क्लिक करा बंद करण्यासाठी', english: 'Click outside to close' }
  };

  const t = (key) => translations[key][language];

  const toggleLike = (id, e) => {
    e.stopPropagation();
    const newLiked = new Set(likedImages);
    if (newLiked.has(id)) newLiked.delete(id);
    else newLiked.add(id);
    setLikedImages(newLiked);
  };

  const PhotoCard = ({ photo }) => (
    <div
      key={photo.id}
      className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10"
      onClick={() => setSelectedImage(photo)}
    >
      <div className="aspect-[4/3] relative">
        <img
          src={photo.url}
          alt={photo.title[language]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-semibold text-base mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {photo.title[language]}
        </h3>
        <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <button onClick={(e) => toggleLike(photo.id, e)} className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            <Heart className={`w-5 h-5 transition-all ${likedImages.has(photo.id) ? 'fill-red-500 text-red-500 scale-110' : 'text-white'}`} />
          </button>
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            <Maximize2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {t('viewButton')}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500 mt-28">
      
      {/* Hero Header */}
      <div className="relative py-8 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-2 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-blue-200 font-medium text-sm">{t('maharashtraPolice')}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{t('pageTitle')}</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">{t('pageSubtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Featured Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{language === 'marathi' ? 'टाटा मोटर्स भेट' : 'Featured Photos'}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {galleryData.featured.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
          </div>
          <h1 className='mt-4 text-gray-700 text-sm md:text-base'>{language === 'marathi' ? 'मा . अप्पर पोलीस महासंचालक श्री दीपक  पाण्डेय्  सर यांची टाटा मोटर येथे भेट सोबत टाटा मोटर चे अधिकारी' : 'Hon. ADGP Mr. Deepak Pandey visiting Tata Motors with their officials'}</h1>
        </div>

        {/* Police Section 1 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t('section1Title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {galleryData.policeSection1.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
          </div>
          <h1 className='mt-4 text-gray-700 text-sm md:text-base'>{language === 'marathi' ? 'महिंद्रा कंपनी भेट कार्यक्रमातील फोटो' : 'Photos from Mahindra Company Visit'}</h1>
        </div>

        {/* Police Section 2 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t('section2Title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {galleryData.policeSection2.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
          </div>
          <h1 className='mt-4 text-gray-700 text-sm md:text-base'>{language === 'marathi' ? 'आढावा बैठक आणि उत्कृष्ठ मोटार परिवहन विभाग पुरस्कार वितरण कार्यक्रमातील फोटो' : 'Photos from Police Training & Operations Awards'}</h1>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all group">
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div className="max-w-6xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedImage.url} alt={selectedImage.title[language]} className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}
