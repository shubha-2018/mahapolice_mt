import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Car, Shield, Users, Settings, Award, Globe } from 'lucide-react';

const ContactPage = () => {
  const contacts = [
    {
      title: 'Motor Transport Department, Maharashtra State Pune',
      address: 'Special Inspecter Genral Of Police,Motor Transport,Maharashtra State, Aundh,Pune.411007',
      phone: '02025880718',
      email: 'igmtpune@gmail.com',
      // department: 'Police Vehicle Management'
    }
  ];

  const services = [
    { icon: Car, title: 'Vehicle Maintenance', desc: 'Ensuring all police vehicles are functional', color: 'from-emerald-400 to-emerald-600' },
    { icon: Shield, title: 'Emergency Response', desc: 'Vehicles ready for disaster and law-and-order situations', color: 'from-red-400 to-red-600' },
    { icon: Settings, title: 'Technological Upgrades', desc: 'Adoption of new technologies for efficient management', color: 'from-purple-400 to-purple-600' },
    { icon: Users, title: 'Staff Training', desc: 'Training programs for vehicle operators and maintenance staff', color: 'from-blue-400 to-blue-600' },
    { icon: Award, title: 'Quality Assurance', desc: 'Regular inspections and quality control measures', color: 'from-amber-400 to-amber-600' },
    { icon: Globe, title: 'State-wide Coverage', desc: 'Coordinating vehicle management across Maharashtra', color: 'from-teal-400 to-teal-600' }
  ];

  const stats = [
    { number: '500+', label: 'Police Vehicles' },
    { number: '24/7', label: 'Emergency Support' },
    { number: '15+', label: 'Service Centers' },
    { number: '98%', label: 'Vehicle Uptime' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      {/* <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">MTD Maharashtra</h1>
              <p className="text-xs text-gray-600">Motor Transport Department</p>
            </div>
          </div>
          <a href="tel:020-26058080" className="hidden sm:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Emergency Contact</span>
          </a>
        </div>
      </div> */}

      {/* Hero Section - Split Design */}
     

     

      {/* Contact Section */}
      <div id="contact" className="py-20 px-6 bg-white mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Reach out for any assistance or inquiries</p>
          </div>

          {contacts.map((contact, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Contact Info Side */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                    <p className="text-blue-600 font-semibold text-lg">{contact.department}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                        <p className="text-gray-600">{contact.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Phone Number</h4>
                        <a href={`tel:${contact.phone}`} className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email Address</h4>
                        <a href={`mailto:${contact.email}`} className="text-purple-600 hover:text-purple-700 font-semibold break-all transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    
                    {/* <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                        <p className="text-orange-600 font-semibold text-lg">{contact.hours}</p>
                      </div>
                    </div> */}
                  </div>
                </div>
                
                {/* Map/Visual Side */}
                <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Located in the heart of Pune, our office is easily accessible and equipped with modern facilities.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="https://maps.google.com?q=Anna+Saheb+Nagar+Pune+Maharashtra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View on Maps
                      </a>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center justify-center w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Directly
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactPage;