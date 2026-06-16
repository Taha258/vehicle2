// src/app/(site)/trasporto/page.jsx
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Send, CloudUpload, X, Car, User, Camera, MessageSquare, MapPin, Truck } from 'lucide-react';

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

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [base64Photos, setBase64Photos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ File ko Base64 mein convert karein
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if (files.length + selectedFiles.length > 8) {
      alert('Puoi caricare fino a 8 immagini.');
      return;
    }

    for (const file of selectedFiles) {
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} supera il limite di 5MB.`);
        continue;
      }

      const base64 = await fileToBase64(file);
      
      setBase64Photos(prev => [...prev, base64]);
      setPreviews(prev => [...prev, base64]);
      setFiles(prev => [...prev, file]);
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
    setBase64Photos(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    for (const file of droppedFiles) {
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} supera il limite di 5MB.`);
        continue;
      }
      
      const base64 = await fileToBase64(file);
      setBase64Photos(prev => [...prev, base64]);
      setPreviews(prev => [...prev, base64]);
      setFiles(prev => [...prev, file]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        vehicleType: formData.vehicleType,
        vehicleCondition: formData.vehicleCondition,
        pickupLocation: `${formData.pickupCity}, ${formData.pickupProvince} ${formData.pickupPostal}`,
        deliveryLocation: `${formData.deliveryCity}, ${formData.deliveryProvince} ${formData.deliveryPostal}`,
        pickupCity: formData.pickupCity,
        pickupProvince: formData.pickupProvince,
        pickupPostal: formData.pickupPostal,
        deliveryCity: formData.deliveryCity,
        deliveryProvince: formData.deliveryProvince,
        deliveryPostal: formData.deliveryPostal,
        preferredDate: formData.preferredDate,
        notes: formData.notes,
        vehicle_photos: base64Photos,
      };

      const response = await fetch('/api/send-transport-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Richiesta di trasporto inviata con successo! Ti contatteremo presto.');
        // Reset form
        setFormData({
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
        setFiles([]);
        setPreviews([]);
        setBase64Photos([]);
      } else {
        alert('❌ Errore nell\'invio. Riprova più tardi.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('❌ Errore nell\'invio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
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
              MODULO DI <span className="text-[#FAC104]">RICHIESTA TRASPORTO</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-[#FAC104] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Informazioni Personali
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nome Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Inserisci il tuo nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Numero di Telefono <span className="text-red-500">*</span>
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
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Indirizzo Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="tua@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-4">
                <h3 className="text-[#FAC104] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Informazioni sul Veicolo
                </h3>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Tipo di Veicolo <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Auto', value: 'Car' },
                      { label: 'Furgone', value: 'Van' },
                      { label: 'Camper', value: 'Camper' },
                      { label: 'Moto', value: 'Motorcycle' },
                      { label: 'Altro', value: 'Other' }
                    ].map((type) => (
                      <label
                        key={type.value}
                        className={`cursor-pointer px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          formData.vehicleType === type.value
                            ? 'bg-[#FAC104] text-[#0f172a] border-[#FAC104]'
                            : 'bg-white/10 text-gray-300 border-white/20 hover:border-[#FAC104]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="vehicleType"
                          value={type.value}
                          checked={formData.vehicleType === type.value}
                          onChange={handleChange}
                          required
                          className="hidden"
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Condizioni del Veicolo <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Marciante', value: 'Running' },
                      { label: 'Non Marciante', value: 'Not Running' },
                      { label: 'Danneggiato', value: 'Damaged' },
                      { label: 'Veicolo Incidentato', value: 'Accident Vehicle' }
                    ].map((condition) => (
                      <label
                        key={condition.value}
                        className={`cursor-pointer px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          formData.vehicleCondition === condition.value
                            ? 'bg-[#FAC104] text-[#0f172a] border-[#FAC104]'
                            : 'bg-white/10 text-gray-300 border-white/20 hover:border-[#FAC104]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="vehicleCondition"
                          value={condition.value}
                          checked={formData.vehicleCondition === condition.value}
                          onChange={handleChange}
                          required
                          className="hidden"
                        />
                        {condition.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transport Details */}
              <div className="space-y-4">
                <h3 className="text-[#FAC104] text-sm font-bold uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dettagli del Trasporto
                </h3>
                
                {/* Pickup Location */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Luogo di Ritiro <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="pickupCity"
                      value={formData.pickupCity}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Città"
                    />
                    <input
                      type="text"
                      name="pickupProvince"
                      value={formData.pickupProvince}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Provincia"
                    />
                    <input
                      type="text"
                      name="pickupPostal"
                      value={formData.pickupPostal}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="CAP"
                    />
                  </div>
                </div>

                {/* Delivery Location */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Luogo di Consegna <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Città"
                    />
                    <input
                      type="text"
                      name="deliveryProvince"
                      value={formData.deliveryProvince}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="Provincia"
                    />
                    <input
                      type="text"
                      name="deliveryPostal"
                      value={formData.deliveryPostal}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors"
                      placeholder="CAP"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Data di Trasporto Preferita
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
                  <label className="block text-gray-300 text-sm font-medium mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Note Aggiuntive
                  </label>
                  <p className="text-gray-500 text-xs mb-2">(Restrizioni di accesso, urgenza, requisiti speciali, ecc.)</p>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAC104] transition-colors resize-none"
                    placeholder="Inserisci eventuali informazioni aggiuntive..."
                  />
                </div>

                {/* Photo Upload - Fixed with previews */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Carica Foto del Veicolo <span className="text-gray-500">(opzionale)</span>
                  </label>
                  <div 
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="relative border-2 border-dashed border-white/20 rounded-xl hover:border-[#FAC104]/50 transition-colors bg-white/5 cursor-pointer"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center py-10 px-4">
                      <CloudUpload className="w-10 h-10 text-gray-500 mb-3" />
                      <p className="text-gray-400 text-sm font-medium">Clicca per caricare o trascina qui</p>
                      <p className="text-gray-600 text-xs mt-1">Max 8 foto, 5MB ciascuna</p>
                      {files.length > 0 && (
                        <p className="text-[#FAC104] text-xs mt-2 font-medium">{files.length} file selezionati</p>
                      )}
                    </div>
                  </div>

                  {/* Previews */}
                  {previews.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                      {previews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={preview} 
                            alt={`Anteprima ${index + 1}`}
                            className="w-full h-28 object-cover rounded-lg border border-white/20"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                          <span className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded">
                            {index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FAC104] text-[#0f172a] py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#FBDB5C] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#FAC104]/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0f172a] border-t-transparent rounded-full animate-spin relative z-10" />
                      <span className="relative z-10">Invio in corso...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Richiedi un Preventivo</span>
                    </>
                  )}
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
              alt="Servizio di Trasporto"
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
