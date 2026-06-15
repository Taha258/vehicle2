'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="pt-20"> {/* Top padding added */}
      
      {/* Contact Form Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#b2b2b2' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden">
            
            {/* Left: Dark Info */}
            <div className="bg-[#0f172a] p-10 md:p-12 flex flex-col justify-between relative">
              <div>
                <h2
                  className="text-white text-xl font-bold uppercase tracking-wide mb-6"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  GET IN TOUCH
                </h2>
                <p
                  className="text-gray-400 text-sm leading-relaxed max-w-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
              </div>

              <div className="space-y-3 mt-10">
                <div className="bg-[#e8e8e8] rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAC104]/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#FAC104]" />
                  </div>
                  <div>
                    <p className="text-[#0f172a] text-xs font-medium">Email</p>
                    <p className="text-[#FAC104] text-sm font-medium">example@email.com</p>
                  </div>
                </div>

                <div className="bg-[#e8e8e8] rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAC104]/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#FAC104]" />
                  </div>
                  <div>
                    <p className="text-[#0f172a] text-xs font-medium">Phone</p>
                    <p className="text-[#FAC104] text-sm font-medium">3282677366</p>
                    <p className="text-[#FAC104] text-sm font-medium">walcarsit@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#d6d6d6] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0f172a] text-xs font-medium mb-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-[#c0c0c0] text-[#0f172a] px-3 py-2.5 rounded-lg text-xs outline-none border border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0f172a] text-xs font-medium mb-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-[#c0c0c0] text-[#0f172a] px-3 py-2.5 rounded-lg text-xs outline-none border border-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0f172a] text-xs font-medium mb-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#c0c0c0] text-[#0f172a] px-3 py-2.5 rounded-lg text-xs outline-none border border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0f172a] text-xs font-medium mb-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="3282677366"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#c0c0c0] text-[#0f172a] px-3 py-2.5 rounded-lg text-xs outline-none border border-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0f172a] text-xs font-medium mb-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Provide details of your enquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-[#c0c0c0] text-[#0f172a] px-3 py-2.5 rounded-lg text-xs outline-none border border-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FAC104] text-white text-xs font-semibold px-6 py-2.5 rounded-lg hover:bg-[#D4A203] transition-colors uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  SUBMIT
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
