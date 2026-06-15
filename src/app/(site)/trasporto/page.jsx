// src/app/trasporto/page.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TrasportoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: '',
    vehicleCondition: '',
    pickupCity: '',
    pickupProvince: '',
    pickupPostal: '',
    deliveryCity: '',
    deliveryProvince: '',
    deliveryPostal: '',
    preferredDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <main className="bg-[#0f172a] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/transport-car1.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0f172a]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#FAC104]/20 backdrop-blur-md rounded-full border border-[#FAC104]/30 mb-4">
            <span className="text-[#FAC104] text-xs font-bold tracking-[0.2em] uppercase">Logistica di lusso</span>
          </div>
          <h1
            className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            TRASPORTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">E CONSEGNA</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Servizio di trasporto sicuro e affidabile per le tue auto più preziose, in tutta Italia e all&apos;estero.
          </p>
        </div>
      </section>

      {/* Transport Request Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl">
            <h2
              className="text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              TRANSPORT <span className="text-[#FAC104]">REQUEST FORM</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-[#FAC104] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-4">
                <h3 className="text-[#FAC104] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                  Vehicle Information
                </h3>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Vehicle Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['Car', 'Van', 'Camper', 'Motorcycle', 'Other'].map((type) => (
                      <label
                        key={type}
                        className={`cursor-pointer px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          formData.vehicleType === type
                            ? 'bg-[#FAC104] text-[#0f172a] border-[#FAC104]'
                            : 'bg-white/10 text-gray-300 border-white/20 hover:border-[#FAC104]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="vehicleType"
                          value={type}
                          checked={formData.vehicleType === type}
                          onChange={handleChange}
                          required
                          className="hidden"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Vehicle Condition <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['Running', 'Not Running', 'Damaged', 'Accident Vehicle'].map((condition) => (
                      <label
                        key={condition}
                        className={`cursor-pointer px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          formData.vehicleCondition === condition
                            ? 'bg-[#FAC104] text-[#0f172a] border-[#FAC104]'
                            : 'bg-white/10 text-gray-300 border-white/20 hover:border-[#FAC104]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="vehicleCondition"
                          value={condition}
                          checked={formData.vehicleCondition === condition}
                          onChange={handleChange}
                          required
                          className="hidden"
                        />
                        {condition}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transport Details */}
              <div className="space-y-4">
                <h3 className="text-[#FAC104] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2">
                  Transport Details
                </h3>
                
                {/* Pickup Location */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="pickupCity"
                      value={formData.pickupCity}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="pickupProvince"
                      value={formData.pickupProvince}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Province"
                    />
                    <input
                      type="text"
                      name="pickupPostal"
                      value={formData.pickupPostal}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>

                {/* Delivery Location */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Delivery Location <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="deliveryProvince"
                      value={formData.deliveryProvince}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Province"
                    />
                    <input
                      type="text"
                      name="deliveryPostal"
                      value={formData.deliveryPostal}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Preferred Transport Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Additional Notes
                  </label>
                  <p className="text-gray-500 text-xs mb-2">(Access restrictions, urgency, special requirements, etc.)</p>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors resize-none"
                    placeholder="Enter any additional information..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Upload Photos of the Vehicle <span className="text-gray-500">(optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="w-full bg-white/10 border border-white/20 border-dashed rounded-xl px-4 py-8 text-gray-400 focus:outline-none focus:border-[#FAC104] transition-colors file:hidden cursor-pointer text-center"
                      onChange={(e) => console.log('Files:', e.target.files)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-gray-500 text-sm">Click to upload or drag and drop images here</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#FAC104] text-[#0f172a] py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#FBDB5C] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#FAC104]/25"
                >
                  Request a Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1">
            <Image
              src="/images/67210d3c6c5dda52abf0e1de_lamborghini-urus-p-1600.jpg"
              alt="Transport Service"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Sicurezza Garantita
            </h2>
            <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Il nostro servizio di trasporto è studiato per garantire la massima protezione del veicolo. Utilizziamo mezzi moderni e personale altamente qualificato per assicurarci che la tua auto arrivi a destinazione in condizioni perfette.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-[#FAC104] font-bold uppercase text-sm mb-2">Copertura Totale</h3>
                <p className="text-gray-400 text-xs">Assicurazione completa durante tutto il tragitto.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-[#FAC104] font-bold uppercase text-sm mb-2">Monitoraggio GPS</h3>
                <p className="text-gray-400 text-xs">Controlla la posizione del tuo veicolo in tempo reale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}