'use client';

import { useState, useRef } from 'react';
import { Send, CloudUpload, X, Car, User, Camera, MessageSquare, MapPin } from 'lucide-react';

export default function SellCarForm() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [base64Photos, setBase64Photos] = useState([]); // ✅ Base64 images store hongi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // ✅ File ko Base64 mein convert karein
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // "data:image/jpeg;base64,..."
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

      // ✅ Base64 convert karo
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
      const formData = new FormData(e.target);
      
      // ✅ Base64 photos bhejo
      const data = {
        make: formData.get('make'),
        model: formData.get('model'),
        year: formData.get('year'),
        mileage: formData.get('mileage'),
        fuel_type: formData.get('fuel_type'),
        transmission: formData.get('transmission'),
        location: formData.get('location'),
        name: formData.get('name'),
        email: formData.get('email'),
        telephone: formData.get('telephone'),
        message: formData.get('message'),
        car_photos: base64Photos, // ✅ Yeh base64 images hain!
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Richiesta inviata con successo! Ti contatteremo presto.');
        e.target.reset();
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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      
      {/* Vehicle Information Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Car className="w-5 h-5 text-[#FAC104]" />
          Vehicle Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Make *</label>
            <input name="make" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="e.g. Toyota" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Model *</label>
            <input name="model" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="e.g. Corolla" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
            <input name="year" type="number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="e.g. 2020" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mileage (km) *</label>
            <input name="mileage" type="number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="e.g. 50000" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type *</label>
            <select name="fuel_type" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none">
              <option value="">Select fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
              <option value="LPG">LPG</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Transmission *</label>
            <select name="transmission" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none">
              <option value="">Select transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Location
            </label>
            <input name="location" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="e.g. Milano, Italy" />
          </div>
        </div>
      </div>

      {/* Seller Information Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-[#FAC104]" />
          Seller Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="your@email.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Telephone *</label>
            <input name="telephone" type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" placeholder="+39 123 456 7890" />
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#FAC104]" />
          Additional Message
        </h2>
        <textarea 
          name="message" 
          rows="4" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none resize-none"
          placeholder="Tell us more about your car (condition, features, price expectation...)"
        ></textarea>
      </div>

      {/* Photo Upload Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#FAC104]" />
          Car Photos
        </h2>
        
        <div 
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[#FAC104] hover:bg-yellow-50 transition-all duration-300"
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <CloudUpload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 font-medium">Trascina le foto qui o clicca per selezionare</p>
          <p className="text-sm text-gray-400 mt-2">Max 8 foto, 5MB ciascuna</p>
        </div>

        {/* Previews */}
        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative group">
                <img 
                  src={preview} 
                  alt={`Preview ${index + 1}`}
                  className="w-full h-28 object-cover rounded-lg border border-gray-200"
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

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#FAC104] text-black font-bold text-lg uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:bg-[#e0ac00] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(250,193,4,0.3)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin relative z-10" />
            <span className="relative z-10">Invio in corso...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Richiedi la tua Offerta</span>
          </>
        )}
      </button>
    </form>
  );
}