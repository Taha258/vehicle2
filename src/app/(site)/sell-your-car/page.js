//src\app\(site)\sell-your-car\page.js
import Image from 'next/image';
import { 
  ChevronRight, 
  Zap, 
  Shield, 
  HeadphonesIcon, 
  Handshake,
  Send
} from 'lucide-react';
import SellCarForm from './SellCarForm';

export const metadata = {
  title: 'Sell Your Car | Auto Multi Marche',
  description: 'Get the best value for your vehicle with our instant appraisal system',
};

export default function SellYourCarPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/selling-car-hero-bg.jpg"
            alt="Sell your car"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.6)] to-[rgba(250,193,4,0.15)]" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase tracking-wide mb-4 leading-tight">
            Sell Your <span className="text-[#FAC104]">Car</span>
          </h1>
          <p className="text-lg text-neutral-300 mb-8 font-light">
            Get the best value for your vehicle with our instant appraisal system
          </p>
          
          <nav className="flex items-center justify-center gap-3 text-sm text-neutral-400">
            <a href="/" className="hover:text-[#FAC104] transition-colors duration-300">Home</a>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#FAC104] font-medium">Sell Your Car</span>
          </nav>
        </div>
      </section>

      {/* ==================== MAIN FORM ==================== */}
      <div className="max-w-[1100px] mx-auto px-5 -mt-16 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] p-8 md:p-12">
          
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-neutral-900 uppercase tracking-wide mb-3">
              Get Your <span className="text-[#FAC104]">Instant Offer</span>
            </h2>
            <p className="text-neutral-500">
              Fill in your car details and we&apos;ll provide you with a competitive appraisal!
            </p>
          </div>

          <SellCarForm />
        </div>
      </div>

      {/* ==================== WHY SELL WITH US ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl font-bold text-neutral-900 uppercase mb-3">
              Why Sell With <span className="text-[#FAC104]">Us</span>
            </h2>
            <p className="text-neutral-500">Trusted by thousands of car sellers across Italy</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Instant Offer', desc: 'Get a competitive appraisal within minutes of submitting your details' },
              { icon: Handshake, title: 'Fair Pricing', desc: 'We ensure transparent and market-competitive pricing for every vehicle' },
              { icon: Shield, title: 'Secure Process', desc: 'Your data and vehicle information are protected with top-tier security' },
              { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Our dedicated team is available around the clock to assist you' },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-9 rounded-xl bg-neutral-100 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#FAC104] hover:bg-white group"
              >
                <div className="w-[60px] h-[60px] bg-[#FAC104] rounded-full flex items-center justify-center text-black mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-oswald text-base font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NEWSLETTER ==================== */}
      <section className="bg-neutral-950 py-16 relative overflow-hidden">
        <div className="absolute -top-1/2 -right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(250,193,4,0.08)_0%,transparent_70%)]" />
        
        <div className="max-w-[1100px] mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center lg:text-left">
            <h3 className="font-oswald text-2xl md:text-3xl text-white uppercase tracking-wide mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-neutral-400 text-sm">
              Get the latest vehicle arrivals, price drops, and exclusive automotive deals directly in your inbox.
            </p>
          </div>

          <form className="flex w-full lg:w-auto lg:min-w-[450px] max-w-[500px]">
            <input 
              type="email" 
              placeholder="Enter your email address..."
              required
              className="flex-1 px-6 py-4 border-[1.5px] border-neutral-700 rounded-l-full bg-neutral-900 text-white text-sm placeholder:text-neutral-500 focus:border-[#FAC104] outline-none transition-colors"
            />
            <button 
              type="submit"
              className="px-7 py-4 bg-[#FAC104] text-black font-oswald font-semibold text-sm uppercase tracking-wider rounded-r-full flex items-center gap-2 hover:bg-[#e0ac00] transition-colors whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}