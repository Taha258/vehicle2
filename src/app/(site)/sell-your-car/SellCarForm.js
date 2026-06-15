// src\app\(site)\sell-your-car\SellCarForm.js
'use client';

import { useState, useRef } from 'react';
import { 
  Car, 
  User, 
  Camera, 
  Send, 
  CloudUpload,
  X
} from 'lucide-react';

export default function SellCarForm() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if (files.length + selectedFiles.length > 8) {
      alert('You can only upload up to 8 images.');
      return;
    }

    selectedFiles.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} exceeds 5MB limit.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviews(prev => [...prev, event.target.result]);
        setFiles(prev => [...prev, file]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const dataTransfer = new DataTransfer();
    droppedFiles.forEach(file => dataTransfer.items.add(file));
    
    if (fileInputRef.current) {
      fileInputRef.current.files = dataTransfer.files;
      handleFileSelect({ target: fileInputRef.current });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Offer request sent successfully!');
    setIsSubmitting(false);
    setFiles([]);
    setPreviews([]);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      
      {/* Vehicle Information */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-neutral-200 relative">
          <div className="w-9 h-9 bg-[#FAC104] rounded-lg flex items-center justify-center text-black">
            <Car className="w-4 h-4" />
          </div>
          <h3 className="font-oswald text-base font-semibold text-neutral-900 uppercase tracking-wider">
            Vehicle Information
          </h3>
          <div className="absolute bottom-[-2px] left-0 w-20 h-0.5 bg-[#FAC104]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Make <span className="text-[#FAC104]">*</span>
            </label>
            <input type="text" name="make" required placeholder="e.g. BMW"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Model <span className="text-[#FAC104]">*</span>
            </label>
            <input type="text" name="model" required placeholder="e.g. 3 Series"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Year <span className="text-[#FAC104]">*</span>
            </label>
            <select name="year" required defaultValue=""
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 bg-white focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300 appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' }}>
              <option value="" disabled>Select Year</option>
              {[2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010].map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Mileage (KM) <span className="text-[#FAC104]">*</span>
            </label>
            <input type="number" name="mileage" required placeholder="e.g. 50000"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Fuel Type <span className="text-[#FAC104]">*</span>
            </label>
            <select name="fuel_type" required defaultValue=""
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 bg-white focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300 appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' }}>
              <option value="" disabled>Select Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
              <option value="lpg">LPG</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Transmission <span className="text-[#FAC104]">*</span>
            </label>
            <select name="transmission" required defaultValue=""
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 bg-white focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300 appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' }}>
              <option value="" disabled>Select</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              <option value="semi-automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Location</label>
            <input type="text" name="location" placeholder="City, Region"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Your Information */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-neutral-200 relative">
          <div className="w-9 h-9 bg-[#FAC104] rounded-lg flex items-center justify-center text-black">
            <User className="w-4 h-4" />
          </div>
          <h3 className="font-oswald text-base font-semibold text-neutral-900 uppercase tracking-wider">
            Your Information
          </h3>
          <div className="absolute bottom-[-2px] left-0 w-20 h-0.5 bg-[#FAC104]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Name <span className="text-[#FAC104]">*</span>
            </label>
            <input type="text" name="name" required placeholder="Your Name"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Email <span className="text-[#FAC104]">*</span>
            </label>
            <input type="email" name="email" required placeholder="your@email.com"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
              Telephone <span className="text-[#FAC104]">*</span>
            </label>
            <input type="tel" name="telephone" required placeholder="+39 xxx xxx xxxx"
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300" />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
            <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">Additional Message</label>
            <textarea name="message" rows={4} placeholder="Any additional information about your car..."
              className="w-full px-4 py-3.5 border-[1.5px] border-neutral-300 rounded-xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#FAC104] focus:shadow-[0_0_0_4px_rgba(250,193,4,0.15)] outline-none transition-all duration-300 resize-y min-h-[110px]" />
          </div>
        </div>
      </div>

      {/* Vehicle Photos */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-neutral-200 relative">
          <div className="w-9 h-9 bg-[#FAC104] rounded-lg flex items-center justify-center text-black">
            <Camera className="w-4 h-4" />
          </div>
          <h3 className="font-oswald text-base font-semibold text-neutral-900 uppercase tracking-wider">
            Vehicle Photos
          </h3>
          <div className="absolute bottom-[-2px] left-0 w-20 h-0.5 bg-[#FAC104]" />
        </div>

        <p className="text-[0.65rem] uppercase tracking-wider text-neutral-500 mb-4">
          Upload photos of your car (Optional, up to 8 images · JPG/PNG/WEBP · Max 5MB each)
        </p>

        <div 
          className="border-2 border-dashed border-neutral-300 rounded-xl p-12 text-center cursor-pointer transition-all duration-300 hover:border-[#FAC104] hover:bg-[#fff3c4] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(250,193,4,0.1)] group relative overflow-hidden"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(250,193,4,0.03)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          <CloudUpload className="w-10 h-10 text-[#FAC104] mx-auto mb-4" />
          <h4 className="text-base font-semibold text-neutral-700 mb-1.5">Click to upload or drag & drop</h4>
          <p className="text-sm text-neutral-500">Add clear photos: front, back, sides & interior</p>
          
          <input 
            type="file" 
            ref={fileInputRef}
            id="carPhotos" 
            name="car_photos" 
            multiple 
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>

        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-neutral-200 group">
                <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#FAC104] text-black font-oswald text-base font-semibold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 hover:bg-[#e0ac00] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(250,193,4,0.3)] active:translate-y-0 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin relative z-10" />
            <span className="relative z-10">Processing...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Get Your Instant Offer</span>
          </>
        )}
      </button>
    </form>
  );
}