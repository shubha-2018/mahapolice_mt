import React, { useState } from 'react';
import { X, Heart, Maximize2, Award } from 'lucide-react';
import { useLanguage } from "@/hooks/useLanguage";

// ✅ Your locally imported images
import img1 from "../assets/images/u1.jpg";
import img2 from "../assets/images/u7.jpg";
import img3 from "../assets/images/u3.jpg";
import img4 from "../assets/images/u4.jpg";
import img5 from "../assets/images/u5.jpg";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());
  const { language } = useLanguage();

  const galleryData = {
    featured: [
      { id: 1, url: img1, title: { marathi: '', english: '' } },
      { id: 2, url: img2, title: { marathi: '', english: '' } },
      { id: 3, url: img3, title: { marathi: '', english: '' } },
      { id: 4, url: img4, title: { marathi: '', english: '' } },
      { id: 5, url: img5, title: { marathi: '', english: '' } }
    ]
  };

  const translations = {
    pageTitle: { marathi: 'उपक्रम फोटो गॅलरी', english: 'Photo Gallery' },
    pageSubtitle: { marathi: 'मोटार परिवहन विभागाच्या महत्त्वाच्या कार्यक्रमांचे फोटो', english: 'Documenting Important Events of Maharashtra Police Department' },
    maharashtraPolice: { marathi: '', english: '' },
    featuredTitle: { marathi: 'सेवा  निवृत्ती कार्यक्रम', english: 'Retirement Ceremony' },
    galleryDescription: { 
      marathi: 'हा फोटो सर्व उपक्रम दर्शवतो.', 
      english: 'This gallery represents all events.' 
    },
    viewButton: { marathi: 'पहा', english: 'VIEW' },
    likeText: { marathi: 'आवडले', english: 'Liked' },
    likeBtn: { marathi: 'आवडते', english: 'Like' },
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
      className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 shadow-lg"
      onClick={() => setSelectedImage(photo)}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={photo.url}
          alt={photo.title[language]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500 mt-20">

      {/* Hero Section */}
      <div className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-blue-200 font-semibold text-sm">{t('maharashtraPolice')}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('pageTitle')}</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">{t('pageSubtitle')}</p>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6">{t('featuredTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {galleryData.featured.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>

        {/* ✅ Single description below the grid */}
        <p className="mt-4 text-gray-700 text-sm md:text-base">{t('galleryDescription')}</p>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-4 bg-white/10 rounded-full hover:bg-white/20"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={selectedImage.url} alt={selectedImage.title[language]} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <h3 className="text-white text-lg font-semibold mb-2">{selectedImage.title[language]}</h3>
                <button
                  onClick={(e) => toggleLike(selectedImage.id, e)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30"
                >
                  <Heart
                    className={`w-5 h-5 ${likedImages.has(selectedImage.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                  />
                  <span className="text-white text-sm">{likedImages.has(selectedImage.id) ? t('likeText') : t('likeBtn')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
