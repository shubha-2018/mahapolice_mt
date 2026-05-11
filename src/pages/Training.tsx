// import React, { useState } from 'react';
// import { X, Heart, Maximize2, Award } from 'lucide-react';
// import { useLanguage } from "@/hooks/useLanguage";

// // ✅ Import all images
// import img1 from "../assets/images/tr1.jpg";
// import img2 from "../assets/images/ss1.jpg";
// import img3 from "../assets/images/ss2.jpg";
// import img4 from "../assets/images/ss3.jpg";
// import img5 from "../assets/images/ss4.jpg";

// // import img6 from "../assets/images/
// // import img7 from "../assets/images/pp2.jpg";   
// // import img8 from "../assets/images/pp3.jpg";   
// // import img9 from "../assets/images/pp4.jpg";   
// // import img10 from "../assets/images/pp5.jpg";

// import img11 from "../assets/images/pp6.jpg";   
// import img12 from "../assets/images/pp7.jpg";   
// import img13 from "../assets/images/pp8.jpg";   
// import img14 from "../assets/images/pp9.jpg";   
// import img15 from "../assets/images/pp10.jpg";  

// import img16 from "../assets/images/pp11.jpg";   
// import img17 from "../assets/images/pp12.jpg";   
// import img18 from "../assets/images/pp13.jpg";   
// import img19 from "../assets/images/pp14.jpg";   
// import img20 from "../assets/images/pp15.jpg";

// import img21 from "../assets/images/pp16.jpg";   
// import img22 from "../assets/images/pp17.jpg";   
// import img23 from "../assets/images/pp18.jpg";   
// import img24 from "../assets/images/pp19.jpg";   
// import img25 from "../assets/images/pp20.jpg";

// export default function PhotoGallery() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [likedImages, setLikedImages] = useState(new Set());
//   const { language } = useLanguage();

//   const galleryData = {
//     featured: [ 
//       { id: 1, url: img1, title: { marathi: '', english: '' } },
//       { id: 2, url: img2, title: { marathi: '', english: '' } },
//       { id: 3, url: img3, title: { marathi: '', english: '' } },
//       { id: 4, url: img4, title: { marathi: '', english: '' } },
//       { id: 5, url: img5, title: { marathi: '', english: '' } }
//     ],
//     // second: [
//     //   { id: 6, url: img6, title: { marathi: '', english: '' } },
//     //   { id: 7, url: img7, title: { marathi: '', english: '' } },
//     //   { id: 8, url: img8, title: { marathi: '', english: '' } },
//     //   { id: 9, url: img9, title: { marathi: '', english: '' } },
//     //   { id: 10, url: img10, title: { marathi: '', english: '' } }
//     // ],
//     third: [
//       { id: 11, url: img11, title: { marathi: '', english: '' } },
//       { id: 12, url: img12, title: { marathi: '', english: '' } },
//       { id: 13, url: img13, title: { marathi: '', english: '' } },
//       { id: 14, url: img14, title: { marathi: '', english: '' } },
//       { id: 15, url: img15, title: { marathi: '', english: '' } }
//     ],
//     fourth: [
//       { id: 16, url: img16, title: { marathi: '', english: '' } },
//       { id: 17, url: img17, title: { marathi: '', english: '' } },
//       { id: 18, url: img18, title: { marathi: '', english: '' } },
//       { id: 19, url: img19, title: { marathi: '', english: '' } },
//       { id: 20, url: img20, title: { marathi: '', english: '' } }
//     ],
//     fifth: [
//       { id: 21, url: img21, title: { marathi: '', english: '' } },
//       { id: 22, url: img22, title: { marathi: '', english: '' } },
//       { id: 23, url: img23, title: { marathi: '', english: '' } },
//       { id: 24, url: img24, title: { marathi: '', english: '' } },
//       { id: 25, url: img25, title: { marathi: '', english: '' } }
//     ]
//   };

//   const translations = {
//     pageTitle: { marathi: 'प्रशिक्षण फोटो गॅलरी', english: 'Photo Gallery' },
//     pageSubtitle: { marathi: 'मोटार परिवहन विभागाच्या प्रशिक्षणाचे फोटो', english: 'Documenting Important Events of Maharashtra Police Department' },
//     maharashtraPolice: { marathi: '', english: '' },
//     featuredTitle: { marathi: 'चालक प्रशिक्षण', english: 'Driver Training' },
//     secondTitle: { marathi: 'पोलीस चालक प्रशिक्षण सत्र ७१', english: 'Police Driver Training Session 71' },
//     fourthTitle: { marathi: 'पोलीस चालक प्रशिक्षण सत्र ७२', english: 'Police Driver Training Session 72' },
//     viewButton: { marathi: 'पाहा', english: 'VIEW' },
//     likeText: { marathi: 'आवडले', english: 'Liked' },
//     likeBtn: { marathi: 'आवडते', english: 'Like' },
//     firstRowDescription: { marathi: 'हा फोटो पहिल्या प्रशिक्षण सत्राचा संच दर्शवतो.', english: 'This gallery represents the first training session.' },
//     thirdRowDescription: { marathi: 'हा फोटो तिसऱ्या प्रशिक्षण सत्राचा संच दर्शवतो.', english: 'This gallery represents the third training session.' },
//     lastRowDescription: { marathi: 'हा फोटो अंतिम प्रशिक्षण सत्राचा संच दर्शवतो.', english: 'This gallery represents the last training session.' }
//   };

//   const t = (key) => translations[key][language];

//   const toggleLike = (id, e) => {
//     e.stopPropagation();
//     const newLiked = new Set(likedImages);
//     if (newLiked.has(id)) newLiked.delete(id);
//     else newLiked.add(id);
//     setLikedImages(newLiked);
//   };

//   const PhotoCard = ({ photo }) => (
//     <div
//       key={photo.id}
//       className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 shadow-lg"
//       onClick={() => setSelectedImage(photo)}
//     >
//       <div className="aspect-[4/3] relative overflow-hidden">
//         <img
//           src={photo.url}
//           alt={photo.title[language]}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
//       </div>
//     </div>
//   );

//   const renderRow = (rowData, titleKey = null) => (
//     <div className="max-w-7xl mx-auto px-4 mb-4">
//       {titleKey && (
//         <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">{t(titleKey)}</h2>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//         {rowData.map((photo) => (
//           <PhotoCard key={photo.id} photo={photo} />
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500 mt-20">
      
//       {/* Hero Section */}
//       <div className="relative py-10 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900" />
//         <div className="relative max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full">
//             <Award className="w-4 h-4 text-yellow-400" />
//             <span className="text-blue-200 font-semibold text-sm">{t('maharashtraPolice')}</span>
//           </div>
//           <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('pageTitle')}</h1>
//           <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">{t('pageSubtitle')}</p>
//         </div>
//       </div>

//       {/* First row with description */}
//       {renderRow(galleryData.featured, 'featuredTitle')}
//       <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
//         <p className="text-gray-700 text-sm md:text-base">{t('firstRowDescription')}</p>
//       </div>

//       {/* Second row */}
//       {/* {renderRow(galleryData.second, 'secondTitle')} */}

//       {/* Third row with description */}
//       {renderRow(galleryData.third)}
//       <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
//         <p className="text-gray-700 text-sm md:text-base">{t('thirdRowDescription')}</p>
//       </div>

//       {/* Fourth row */}
//       {renderRow(galleryData.fourth, 'fourthTitle')}

//       {/* Last row with description */}
//       {renderRow(galleryData.fifth)}
//       <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
//         <p className="text-gray-700 text-sm md:text-base">{t('lastRowDescription')}</p>
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             onClick={() => setSelectedImage(null)}
//             className="absolute top-6 right-6 p-4 bg-white/10 rounded-full hover:bg-white/20"
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>
//           <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img src={selectedImage.url} alt={selectedImage.title[language]} />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
//                 <button
//                   onClick={(e) => toggleLike(selectedImage.id, e)}
//                   className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30"
//                 >
//                   <Heart
//                     className={`w-5 h-5 ${
//                       likedImages.has(selectedImage.id)
//                         ? 'fill-red-500 text-red-500'
//                         : 'text-white'
//                     }`}
//                   />
//                   <span className="text-white text-sm">
//                     {likedImages.has(selectedImage.id) ? t('likeText') : t('likeBtn')}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState } from 'react';
import { X, Heart, Award } from 'lucide-react';
import { useLanguage } from "@/hooks/useLanguage";

// ✅ Import all available images
import img1 from "../assets/images/tr1.jpg";
import img2 from "../assets/images/ss1.jpg";
import img3 from "../assets/images/ss2.jpg";
import img4 from "../assets/images/ss3.jpg";
import img5 from "../assets/images/ss4.jpg";

// ✅ Only keep images that actually exist in folder
import img11 from "../assets/images/pp6.jpg";
import img12 from "../assets/images/pp7.jpg";
import img13 from "../assets/images/pp8.jpg";
import img14 from "../assets/images/pp9.jpg";
import img15 from "../assets/images/pp10.jpg";

import img16 from "../assets/images/pp11.jpg";
import img17 from "../assets/images/pp12.jpg";
import img18 from "../assets/images/pp13.jpg";
import img19 from "../assets/images/pp14.jpg";
import img20 from "../assets/images/pp15.jpg";

import img21 from "../assets/images/pp16.jpg";
import img22 from "../assets/images/pp17.jpg";
import img23 from "../assets/images/pp18.jpg";
import img24 from "../assets/images/pp19.jpg";
import img25 from "../assets/images/pp20.jpg";

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
    ],

    third: [
      { id: 11, url: img11, title: { marathi: '', english: '' } },
      { id: 12, url: img12, title: { marathi: '', english: '' } },
      { id: 13, url: img13, title: { marathi: '', english: '' } },
      { id: 14, url: img14, title: { marathi: '', english: '' } },
      { id: 15, url: img15, title: { marathi: '', english: '' } }
    ],

    fourth: [
      { id: 16, url: img16, title: { marathi: '', english: '' } },
      { id: 17, url: img17, title: { marathi: '', english: '' } },
      { id: 18, url: img18, title: { marathi: '', english: '' } },
      { id: 19, url: img19, title: { marathi: '', english: '' } },
      { id: 20, url: img20, title: { marathi: '', english: '' } }
    ],

    fifth: [
      { id: 21, url: img21, title: { marathi: '', english: '' } },
      { id: 22, url: img22, title: { marathi: '', english: '' } },
      { id: 23, url: img23, title: { marathi: '', english: '' } },
      { id: 24, url: img24, title: { marathi: '', english: '' } },
      { id: 25, url: img25, title: { marathi: '', english: '' } }
    ]
  };

  const translations = {
    pageTitle: {
      marathi: 'प्रशिक्षण फोटो गॅलरी',
      english: 'Photo Gallery'
    },

    pageSubtitle: {
      marathi: 'मोटार परिवहन विभागाच्या प्रशिक्षणाचे फोटो',
      english: 'Documenting Important Events of Maharashtra Police Department'
    },

    featuredTitle: {
      marathi: 'चालक प्रशिक्षण',
      english: 'Driver Training'
    },

    fourthTitle: {
      marathi: 'पोलीस चालक प्रशिक्षण सत्र ७२',
      english: 'Police Driver Training Session 72'
    },

    firstRowDescription: {
      marathi: 'हा फोटो पहिल्या प्रशिक्षण सत्राचा संच दर्शवतो.',
      english: 'This gallery represents the first training session.'
    },

    thirdRowDescription: {
      marathi: 'हा फोटो तिसऱ्या प्रशिक्षण सत्राचा संच दर्शवतो.',
      english: 'This gallery represents the third training session.'
    },

    lastRowDescription: {
      marathi: 'हा फोटो अंतिम प्रशिक्षण सत्राचा संच दर्शवतो.',
      english: 'This gallery represents the last training session.'
    },

    likeText: {
      marathi: 'आवडले',
      english: 'Liked'
    },

    likeBtn: {
      marathi: 'आवडते',
      english: 'Like'
    }
  };

  const t = (key) => translations[key][language];

  const toggleLike = (id, e) => {
    e.stopPropagation();

    const newLiked = new Set(likedImages);

    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }

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

  const renderRow = (rowData, titleKey = null) => (
    <div className="max-w-7xl mx-auto px-4 mb-4">
      {titleKey && (
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">
          {t(titleKey)}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {rowData.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 mt-20">

      <div className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900" />

        <div className="relative max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full">
            <Award className="w-4 h-4 text-yellow-400" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {t('pageTitle')}
          </h1>

          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>

        </div>
      </div>

      {renderRow(galleryData.featured, 'featuredTitle')}

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-gray-700 text-sm md:text-base">
          {t('firstRowDescription')}
        </p>
      </div>

      {renderRow(galleryData.third)}

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-gray-700 text-sm md:text-base">
          {t('thirdRowDescription')}
        </p>
      </div>

      {renderRow(galleryData.fourth, 'fourthTitle')}

      {renderRow(galleryData.fifth)}

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-gray-700 text-sm md:text-base">
          {t('lastRowDescription')}
        </p>
      </div>

    </div>
  );
}