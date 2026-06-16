'use client';

import { useState, useRef } from 'react';
import { 
  Send, 
  CloudUpload, 
  X, 
  Car, 
  User, 
  Camera, 
  MessageSquare, 
  MapPin,
  DollarSign,
  Gauge,
  Palette,
  Hash,
  Tag,
  FileText,
  Image,
  Settings2,
  Activity,
  HelpCircle
} from 'lucide-react';

export default function SellCarForm() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [base64Photos, setBase64Photos] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [features, setFeatures] = useState([]);
  const [featureInput, setFeatureInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessingFiles, setIsProcessingFiles] = useState(false);
  const fileInputRef = useRef(null);
  const mainImageRef = useRef(null);
  const galleryInputRef = useRef(null);

  // ===== FILE HANDLING =====
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error(`Failed to read ${file.name}`));
      reader.readAsDataURL(file);
    });
  };

  const processFiles = async (fileList, isMainImage = false) => {
    const newFiles = Array.from(fileList);
    
    if (!isMainImage && files.length + newFiles.length > 5) {
      alert('Puoi caricare fino a 5 immagini per la galleria.');
      return;
    }

    setIsProcessingFiles(true);
    
    try {
      for (const file of newFiles) {
        if (file.size > 5 * 1024 * 1024) {
          alert(`${file.name} supera il limite di 5MB.`);
          continue;
        }

        try {
          const base64 = await fileToBase64(file);
          
          if (isMainImage) {
            setMainImage(base64);
            setMainImagePreview(base64);
          } else {
            setBase64Photos(prev => [...prev, base64]);
            setPreviews(prev => [...prev, base64]);
            setFiles(prev => [...prev, file]);
          }
        } catch (err) {
          console.error('File processing error:', err);
          alert(`Errore nel caricamento di ${file.name}`);
        }
      }
    } finally {
      setIsProcessingFiles(false);
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
    setBase64Photos(prev => prev.filter((_, i) => i !== index));
  };

  const removeMainImage = () => {
    setMainImage(null);
    setMainImagePreview(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e, isMainImage = false) => {
    e.preventDefault();
    e.stopPropagation();
    processFiles(e.dataTransfer.files, isMainImage);
  };

  // ===== FEATURES HANDLING =====
  const addFeature = (e) => {
    if (e.key === 'Enter' && featureInput.trim()) {
      e.preventDefault();
      if (!features.includes(featureInput.trim())) {
        setFeatures(prev => [...prev, featureInput.trim()]);
      }
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    setFeatures(prev => prev.filter((_, i) => i !== index));
  };

  // ===== SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate main image is uploaded
    if (!mainImage) {
      alert("⚠️ Per favore carica un'immagine principale dell'auto.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      
      const data = {
        // === OLD FIELDS (same names) ===
        make: formData.get('make'),
        model: formData.get('model'),
        year: formData.get('year'),
        mileage: formData.get('mileage'),
        fuel_type: formData.get('fuel_type'),
        transmission: formData.get('transmission'),
        location: formData.get('location') || '',
        name: formData.get('name'),
        email: formData.get('email'),
        telephone: formData.get('telephone'),
        message: formData.get('message') || '',
        
        // === NEW REQUIRED FIELDS ===
        price: formData.get('price'),
        car_type: formData.get('car_type'),
        car_condition: formData.get('car_condition'),
        body_color: formData.get('body_color'),
        main_car_image: mainImage,
        
        // === NEW OPTIONAL FIELDS ===
        engine: formData.get('engine') || '',
        cylinders: formData.get('cylinders') || '',
        horsepower: formData.get('horsepower') || '',
        stock_id: formData.get('stock_id') || '',
        overview: formData.get('overview') || '',
        features: features,
        gallery_images: base64Photos,
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Richiesta inviata con successo! Ti contatteremo presto.');
        e.target.reset();
        setFiles([]);
        setPreviews([]);
        setBase64Photos([]);
        setMainImage(null);
        setMainImagePreview(null);
        setFeatures([]);
      } else {
        alert("❌ Errore nell'invio. Riprova più tardi.");
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert("❌ Errore nell'invio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      
      {/* ==================== VEHICLE INFORMATION ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
          <Car className="w-6 h-6 text-[#FAC104]" />
          Informazioni sul Veicolo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Marca (OLD - Required) */}
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
              Marca * <span className="text-gray-400 text-xs">(es. Toyota)</span>
            </label>
            <input 
              id="make" 
              name="make" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. Toyota" 
            />
          </div>

          {/* Modello (OLD - Required) */}
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
              Modello * <span className="text-gray-400 text-xs">(es. Corolla)</span>
            </label>
            <input 
              id="model" 
              name="model" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. Corolla" 
            />
          </div>

          {/* Prezzo (NEW - REQUIRED) */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <DollarSign className="w-4 h-4" /> Prezzo Richiesto *
            </label>
            <input 
              id="price" 
              name="price" 
              type="number" 
              min="0" 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. 25000" 
            />
          </div>

          {/* Anno (OLD - Required) */}
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Anno *</label>
            <input 
              id="year" 
              name="year" 
              type="number" 
              min="1900" 
              max="2026" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. 2020" 
            />
          </div>

          {/* Tipo di Auto (NEW - REQUIRED) */}
          <div>
            <label htmlFor="car_type" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo di Auto *
            </label>
            <select 
              id="car_type" 
              name="car_type" 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none"
            >
              <option value="">Seleziona tipo</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
              <option value="Wagon">Wagon</option>
              <option value="Pickup">Pickup</option>
              <option value="Van">Van</option>
            </select>
          </div>

          {/* Condizione (NEW - REQUIRED) */}
          <div>
            <label htmlFor="car_condition" className="block text-sm font-medium text-gray-700 mb-1">
              Condizione *
            </label>
            <select 
              id="car_condition" 
              name="car_condition" 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none"
            >
              <option value="">Seleziona condizione</option>
              <option value="New">Nuova</option>
              <option value="Used">Usata</option>
              <option value="Like New">Come Nuova</option>
            </select>
          </div>

          {/* Carburante (OLD - Required) */}
          <div>
            <label htmlFor="fuel_type" className="block text-sm font-medium text-gray-700 mb-1">Tipo di Carburante *</label>
            <select 
              id="fuel_type" 
              name="fuel_type" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none"
            >
              <option value="">Seleziona carburante</option>
              <option value="Petrol">Benzina</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Ibrida</option>
              <option value="Electric">Elettrica</option>
              <option value="LPG">GPL</option>
            </select>
          </div>

          {/* Trasmissione (OLD - Required) */}
          <div>
            <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">Trasmissione *</label>
            <select 
              id="transmission" 
              name="transmission" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none"
            >
              <option value="">Seleziona trasmissione</option>
              <option value="Manual">Manuale</option>
              <option value="Automatic">Automatica</option>
              <option value="Semi-Automatic">Semiautomatica</option>
            </select>
          </div>

          {/* Motore (NEW - Optional) */}
          <div>
            <label htmlFor="engine" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Settings2 className="w-4 h-4" /> Motore
              <span className="ml-2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
            </label>
            <input 
              id="engine" 
              name="engine" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. 4.0L V8" 
            />
          </div>

          {/* Chilometraggio (OLD - Required) */}
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Gauge className="w-4 h-4" /> Chilometraggio (km) *
            </label>
            <input 
              id="mileage" 
              name="mileage" 
              type="number" 
              min="0" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. 50000" 
            />
          </div>

          {/* Cilindri (NEW - Optional) */}
          <div>
            <label htmlFor="cylinders" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              Cilindri
              <HelpCircle className="w-3.5 h-3.5 text-gray-400" title="Numero di cilindri del motore" />
              <span className="ml-2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
            </label>
            <input 
              id="cylinders" 
              name="cylinders" 
              type="number" 
              min="1" 
              max="16" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. 4, 6, 8, 12" 
            />
          </div>

          {/* Cavalli (NEW - Optional) */}
          <div>
            <label htmlFor="horsepower" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Activity className="w-4 h-4" /> Cavalli (HP)
              <span className="ml-2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
            </label>
            <input 
              id="horsepower" 
              name="horsepower" 
              type="number" 
              min="1" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. 200" 
            />
          </div>

          {/* Colore (NEW - REQUIRED) */}
          <div>
            <label htmlFor="body_color" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Palette className="w-4 h-4" /> Colore Carrozzeria *
            </label>
            <input 
              id="body_color" 
              name="body_color" 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. Nero, Bianco, Rosso" 
            />
          </div>

          {/* Stock ID (NEW - Optional) */}
          <div>
            <label htmlFor="stock_id" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Hash className="w-4 h-4" /> Stock ID
              <span className="ml-2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
            </label>
            <input 
              id="stock_id" 
              name="stock_id" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. ABC1234" 
            />
          </div>

          {/* Posizione (OLD - Optional) */}
          <div className="md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Posizione
            </label>
            <input 
              id="location" 
              name="location" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="es. Milano, Italia" 
            />
          </div>
        </div>
      </div>

      {/* ==================== OVERVIEW (NEW - Optional) ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-3">
          <FileText className="w-6 h-6 text-[#FAC104]" />
          Descrizione dell&apos;Auto
          <span className="ml-2 text-sm text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
        </h2>
        <textarea 
          id="overview"
          name="overview" 
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none resize-none"
          placeholder="Descrivi la tua auto (condizioni, optional, storia di manutenzione, difetti noti...)"
        ></textarea>
      </div>

      {/* ==================== FEATURES (NEW - Optional) ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-3">
          <Tag className="w-6 h-6 text-[#FAC104]" />
          Caratteristiche / Optional
          <span className="ml-2 text-sm text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
        </h2>
        <div className="mb-3">
          <input
            type="text"
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
            onKeyDown={addFeature}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none"
            placeholder="Scrivi una caratteristica e premi INVIO... (es. Bluetooth, GPS, 360° Camera)"
          />
          <p className="text-xs text-gray-400 mt-1">Premi INVIO per aggiungere ogni caratteristica</p>
        </div>
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span 
                key={index} 
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FAC104]/10 text-gray-800 rounded-full text-sm border border-[#FAC104]/30"
              >
                {feature}
                <button 
                  type="button" 
                  onClick={() => removeFeature(index)}
                  className="ml-1 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ==================== MAIN CAR IMAGE (NEW - REQUIRED) ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-3">
          <Image className="w-6 h-6 text-[#FAC104]" />
          Immagine Principale *
        </h2>
        
        {!mainImagePreview ? (
          <div 
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, true)}
            onClick={() => mainImageRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[#FAC104] hover:bg-yellow-50 transition-all duration-300"
          >
            <input
              ref={mainImageRef}
              type="file"
              accept="image/*"
              onChange={(e) => processFiles(e.target.files, true)}
              className="hidden"
            />
            <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 font-medium">Clicca o trascina l&apos;immagine principale qui *</p>
            <p className="text-sm text-gray-400 mt-2">Max 5MB, formato immagine</p>
          </div>
        ) : (
          <div className="relative group max-w-md mx-auto">
            <img 
              src={mainImagePreview} 
              alt="Main car"
              className="w-full h-64 object-cover rounded-xl border-2 border-[#FAC104] shadow-lg"
            />
            <button
              type="button"
              onClick={removeMainImage}
              className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="absolute top-3 left-3 bg-[#FAC104] text-black text-xs font-bold px-3 py-1 rounded-full">
              IMMAGINE PRINCIPALE
            </span>
          </div>
        )}
      </div>

      {/* ==================== GALLERY IMAGES (NEW - Optional, max 5) ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-3">
          <Camera className="w-6 h-6 text-[#FAC104]" />
          Galleria Immagini ({files.length}/5)
          <span className="ml-2 text-sm text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Opzionale</span>
        </h2>
        
        <div 
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, false)}
          onClick={() => !isProcessingFiles && galleryInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
            isProcessingFiles 
              ? 'border-gray-200 bg-gray-50 cursor-not-allowed' 
              : 'border-gray-300 hover:border-[#FAC104] hover:bg-yellow-50'
          }`}
        >
          <input
            ref={galleryInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => processFiles(e.target.files, false)}
            className="hidden"
            disabled={isProcessingFiles}
          />
          {isProcessingFiles ? (
            <div className="w-8 h-8 border-2 border-[#FAC104] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          ) : (
            <CloudUpload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          )}
          <p className="text-gray-600 font-medium">
            {isProcessingFiles ? 'Elaborazione in corso...' : 'Trascina le foto qui o clicca per selezionare'}
          </p>
          <p className="text-sm text-gray-400 mt-2">Max 5 foto, 5MB ciascuna</p>
        </div>

        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative group">
                <img 
                  src={preview} 
                  alt={`Gallery ${index + 1}`}
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

      {/* ==================== SELLER INFORMATION (OLD - Same names) ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
          <User className="w-6 h-6 text-[#FAC104]" />
          Informazioni del Venditore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
            <input 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="Il tuo nome completo" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="tua@email.com" 
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
            <input 
              id="telephone" 
              name="telephone" 
              type="tel" 
              required 
              pattern="[+]?[0-9\s\-\(\)]{10,}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none" 
              placeholder="+39 123 456 7890" 
            />
          </div>
        </div>
      </div>

      {/* ==================== MESSAGE (OLD - Same name) ==================== */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-3">
          <MessageSquare className="w-6 h-6 text-[#FAC104]" />
          Messaggio Aggiuntivo
        </h2>
        <textarea 
          id="message"
          name="message" 
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAC104] focus:border-transparent outline-none resize-none"
          placeholder="Raccontaci di più sulla tua auto (condizioni, optional, aspettativa di prezzo...)"
        ></textarea>
      </div>

      {/* ==================== SUBMIT BUTTON ==================== */}
      <button 
        type="submit"
        disabled={isSubmitting || isProcessingFiles}
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