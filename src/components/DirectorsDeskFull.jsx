import React from 'react';

export default function DirectorsDesk() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">From Director's Desk</h1>
        <div className="w-24 h-1 bg-yellow-400"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Section */}
        <div className="flex-shrink-0">
          <div className="text-center">
            {/* Profile Image */}
            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
              <img 
                src="https://via.placeholder.com/200x200/4A5568/FFFFFF?text=Profile" 
                alt="Director Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Mr. Deepak Shivanand Pandey (IPS)
            </h2>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>Additional Director General of Police</p>
              <p>and Director,</p>
              <p>Police Communication and</p>
              <p>Information Technology Department,</p>
              <p>Maharashtra State, Pune.</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex-1">
          {/* Opening Quote */}
          <div className="text-8xl text-orange-500 font-serif leading-none mb-4">"</div>
          
          <div className="text-gray-700 text-justify space-y-4 text-base leading-relaxed">
            <p>
              The Police Wireless Department prior to Police Communication and Information Technology Department typically handles 
              communication systems used by law enforcement authority that is Maharashtra State Police. This includes managing radio 
              frequencies, dispatching officers, and ensuring secure and efficient communication between police units in the field. 
              Uninterrupted 24×7 communication system is provided by our Department.
            </p>

            <p>
              The Police Communication and Information Technology Department plays a vital role in policing by ensuring effective 
              communication and coordination among officers with key functions such as <span className="font-semibold">real-time Communication</span> which facilitates 
              immediate contact between officers in the field and dispatch, <span className="font-semibold">crucial for timely responses</span> to incidents; <span className="font-semibold">Situational 
              Awareness</span> which provides officers with updates on ongoing situations, <span className="font-semibold">enhancing their ability to make informed decisions</span>; 
              <span className="font-semibold">Emergency Response</span> which enables quick coordination during emergencies, <span className="font-semibold">allowing for faster deployment of resources</span>; 
              <span className="font-semibold">Data Transmission</span> which supports the transfer of critical information, such as criminal records and intelligence, enhancing 
              investigative efforts; <span className="font-semibold">Safety and Security</span> which maintains secure communication channels to protect sensitive information and 
              officer safety.
            </p>

            <p>
              The Koyna earthquake on December 10, 1967 with a magnitude of 6.3 and the Killari earthquake on September 30, 1993 with a 
              magnitude of 6.04 occurred in Maharashtra state, India. It caused significant damage and resulted in over 200 deaths, largely 
              due to the collapse of buildings and infrastructure. The floods that followed on July 26, 2005, in Mumbai, were devastating. 
              Heavy rainfall led to widespread flooding, impacting transportation, displacing thousands, and causing numerous fatalities. The 
              city faced significant challenges in emergency response and infrastructure resilience during this disaster. 26/11 terrorist attack, 
              riots and blasts were happened in Maharashtra state. Wireless communication has played a crucial role in disaster 
              management and response during such crucial events when private network like mass communication, mobile network failed. 
              Hence effective wireless communication is essential for maintaining public safety and operational efficiency in policing.
            </p>
          </div>

          {/* Closing Quote */}
          <div className="flex justify-end">
            <div className="text-8xl text-orange-500 font-serif leading-none mt-4">"</div>
          </div>
        </div>
      </div>
    </div>
  );
}