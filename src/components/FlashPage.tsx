import React, { useState } from 'react';
import { Shield, Car, AlertTriangle, Settings, Fuel, FileText, Calendar, Users, Bell, Plus, Eye, Edit, Clock, MapPin, Phone } from 'lucide-react';

const PoliceFlashSystem = () => {
  const [activeTab, setActiveTab] = useState('urgent');
  const [showAddForm, setShowAddForm] = useState(false);

  const categories = [
    {
      id: 'urgent',
      title: 'तातडीचे आदेश',
      subtitle: 'Emergency Vehicle Deployment',
      icon: AlertTriangle,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      items: [
        { 
          id: 1, 
          title: 'मुंबई पोलीस स्टेशन - तातडी गस्त', 
          description: '5 पेट्रोल वाहनं दादर-माटुंगा क्षेत्रासाठी',
          time: '10:30 AM', 
          priority: 'high',
          location: 'मुंबई',
          officer: 'PI शर्माजी'
        },
        { 
          id: 2, 
          title: 'पुणे जिल्हा - अतिरिक्त बंदोबस्त', 
          description: 'राजकीय सभेसाठी सुरक्षा व्यवस्था',
          time: '11:15 AM', 
          priority: 'high',
          location: 'पुणे',
          officer: 'DCP पाटील'
        }
      ]
    },
    {
      id: 'registration',
      title: 'नवीन वाहन नोंदणी',
      subtitle: 'Vehicle Registration & Allocation',
      icon: Car,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      items: [
        { 
          id: 3, 
          title: '10 नवीन स्कॉर्पिओ वाटप', 
          description: 'यूनिट-A (चेंबूर पोलीस स्टेशन)',
          time: '09:45 AM', 
          priority: 'medium',
          location: 'चेंबूर',
          officer: 'ASI मेहता'
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'वाहन देखभाल',
      subtitle: 'Vehicle Maintenance & Repair',
      icon: Settings,
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      items: [
        { 
          id: 4, 
          title: 'MH-12-AB-1234 सर्व्हिसिंग', 
          description: 'मोठी दुरुस्ती - गॅरेजमध्ये पाठवा',
          time: '12:00 PM', 
          priority: 'high',
          location: 'वर्कशॉप',
          officer: 'हेड कॉन्स्टेबल जोशी'
        }
      ]
    },
    {
      id: 'fuel',
      title: 'इंधन व्यवस्थापन',
      subtitle: 'Fuel & Resource Management',
      icon: Fuel,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      items: [
        { 
          id: 5, 
          title: 'नवीन फ्युएल कार्ड सिस्टम', 
          description: 'सर्व युनिट्ससाठी डिजिटल फ्युएल ट्रॅकिंग',
          time: '01:15 PM', 
          priority: 'medium',
          location: 'सर्व ठाणे',
          officer: 'ASP कुलकर्णी'
        }
      ]
    },
    {
      id: 'accidents',
      title: 'अपघात अहवाल',
      subtitle: 'Accident Reports & Insurance',
      icon: FileText,
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      items: [
        { 
          id: 6, 
          title: 'गस्ती गाडीचा अपघात', 
          description: 'MH-14-CD-5678 - मायनर डैमेज, बीमा क्लेम',
          time: '04:20 PM', 
          priority: 'high',
          location: 'बांद्रा',
          officer: 'PC राजे'
        }
      ]
    },
    {
      id: 'events',
      title: 'विशेष मोहीम',
      subtitle: 'Special Operations & VIP Duty',
      icon: Calendar,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      items: [
        { 
          id: 7, 
          title: 'व्हीआयपी सुरक्षा ड्युटी', 
          description: '15 वाहनं मुख्यमंत्री दौऱ्यासाठी',
          time: '06:30 PM', 
          priority: 'high',
          location: 'राजभवन',
          officer: 'ACP शिंदे'
        }
      ]
    },
    {
      id: 'staff',
      title: 'कर्मचारी सूचना',
      subtitle: 'Staff Notifications & Training',
      icon: Users,
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      items: [
        { 
          id: 8, 
          title: 'ड्रायव्हर प्रशिक्षण शिबिर', 
          description: 'सेफ्टी ड्रायविंग कोर्स - सर्व चालकांना',
          time: '08:00 AM', 
          priority: 'medium',
          location: 'प्रशिक्षण केंद्र',
          officer: 'PI देसाई'
        }
      ]
    }
  ];

  const activeCategory = categories.find(cat => cat.id === activeTab);

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              {/* Government Logo */}
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">महाराष्ट्र पोलीस</h1>
                  <p className="text-sm text-gray-600">MAHARASHTRA POLICE</p>
                </div>
              </div>
              
              <div className="h-12 w-px bg-gray-300"></div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Bell className="h-6 w-6 text-white animate-bounce" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">🚨 फ्लॅश सिस्टम</h2>
                  <p className="text-sm text-gray-600">वाहन व्यवस्थापन केंद्र</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">दिनांक</p>
                <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString('mr-IN')}</p>
                <p className="text-sm text-gray-500">{new Date().toLocaleTimeString('mr-IN', {hour: '2-digit', minute: '2-digit'})}</p>
              </div>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>नवीन आदेश</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <span>🚁 कुल वाहने: 1,247</span>
              <span>🚗 सक्रिय: 1,089</span>
              <span>🔧 दुरुस्तीत: 34</span>
              <span>⛽ इंधन: 87%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>सिस्टम ऑनलाइन</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                विभाग निवडा
              </h3>
              <nav className="space-y-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`w-full text-left transition-all duration-200 rounded-lg ${
                        activeTab === category.id 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3 p-3">
                        <div className={`p-2 rounded-md ${
                          activeTab === category.id ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`h-4 w-4 ${
                            activeTab === category.id ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{category.title}</p>
                          <p className={`text-xs ${
                            activeTab === category.id ? 'text-blue-200' : 'text-gray-500'
                          }`}>
                            {category.items.length} सूचना
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 rounded-xl p-4 mt-6 border border-red-200">
              <h4 className="font-bold text-red-800 mb-3 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                तातडीचे संपर्क
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-red-700">कंट्रोल रूम: <strong>100</strong></p>
                <p className="text-red-700">गॅरेज: <strong>022-2345-6789</strong></p>
                <p className="text-red-700">फ्युएल डेपो: <strong>022-2345-6790</strong></p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-600">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${activeCategory.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <activeCategory.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{activeCategory.title}</h2>
                      <p className="text-white/80 text-sm">{activeCategory.subtitle}</p>
                      <p className="text-white/70 text-sm mt-1">कुल {activeCategory.items.length} आइटम</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-2xl font-bold">{activeCategory.items.length}</span>
                      <p className="text-white/80 text-sm">सक्रिय</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="p-6">
                <div className="space-y-4">
                  {activeCategory.items.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200 hover:border-blue-300 bg-white">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {/* Header with badges */}
                          <div className="flex items-center space-x-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityBadge(item.priority)}`}>
                              {item.priority === 'high' ? '🔴 तातडीचे' : item.priority === 'medium' ? '🟡 मध्यम' : '🟢 कमी'}
                            </span>
                            <div className="flex items-center text-gray-500 text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {item.time}
                            </div>
                            <div className="flex items-center text-gray-500 text-xs">
                              <MapPin className="h-3 w-3 mr-1" />
                              {item.location}
                            </div>
                          </div>

                          {/* Content */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          
                          {/* Footer info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>जबाबदार: <strong className="text-gray-700">{item.officer}</strong></span>
                            </div>
                            <div className="text-xs text-gray-400">
                              ID: #{item.id.toString().padStart(4, '0')}
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center space-x-2 ml-4">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="तपशील पाहा">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="संपादित करा">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {activeCategory.items.length === 0 && (
                  <div className="text-center py-16">
                    <div className={`${activeCategory.bgColor} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <activeCategory.icon className={`h-12 w-12 ${activeCategory.textColor}`} />
                    </div>
                    <p className="text-xl text-gray-500 font-semibold">कोणतीही सूचना नाही</p>
                    <p className="text-gray-400 mt-2">या विभागात सध्या कोणतीही सूचना उपलब्ध नाही</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl border-t-4 border-blue-600">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">नवीन आदेश/सूचना जोडा</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">विभाग निवडा *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">-- विभाग निवडा --</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">आदेश/सूचना शीर्षक *</label>
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="उदा. तातडीची गस्त आवश्यक"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">तपशीलवार माहिती</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  rows="3"
                  placeholder="संपूर्ण माहिती येथे लिहा..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">प्राधान्य *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="high">🔴 तातडीचे</option>
                    <option value="medium">🟡 मध्यम</option>
                    <option value="low">🟢 कमी</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">स्थान</label>
                  <input 
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="उदा. मुंबई"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">जबाबदार अधिकारी</label>
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="उदा. PI शर्माजी"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button 
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                रद्द करा
              </button>
              <button 
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                आदेश जारी करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoliceFlashSystem;