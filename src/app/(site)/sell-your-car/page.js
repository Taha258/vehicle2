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
  title: 'Vendi la tua Auto | Auto Multi Marche',
  description: 'Ottieni il miglior valore per il tuo veicolo con il nostro sistema di valutazione istantanea',
};

export default function SellYourCarPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/selling-car-hero-bg.jpg"
            alt="Vendi la tua auto"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.6)] to-[rgba(250,193,4,0.15)]" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <h1
            className="uppercase tracking-tight mb-4"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(26px, 4.5vw, 48px)",
              fontWeight: 651,
              lineHeight: "1.15",
              color: "#fff",
            }}
          >
            Vendi la tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">Auto</span>
          </h1>
          <p className="text-lg text-neutral-300 mb-8 font-light">
            Ottieni il miglior valore per il tuo veicolo con il nostro sistema di valutazione istantanea
          </p>
          
          <nav className="flex items-center justify-center gap-3 text-sm text-neutral-400">
            <a href="/" className="hover:text-[#FAC104] transition-colors duration-300">Home</a>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#FAC104] font-medium">Vendi la tua Auto</span>
          </nav>
        </div>
      </section>

      {/* ==================== MAIN FORM ==================== */}
      <div className="max-w-[1100px] mx-auto px-5 -mt-16 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] p-8 md:p-12">
          
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-neutral-900 uppercase tracking-wide mb-3">
              Ricevi la tua <span className="text-[#FAC104]">Offerta Istantanea</span>
            </h2>
            <p className="text-neutral-500">
              Inserisci i dettagli della tua auto e ti forniremo una valutazione competitiva!
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
              Perché Vendere a <span className="text-[#FAC104]">Noi</span>
            </h2>
            <p className="text-neutral-500">Scelto da migliaia di venditori di auto in tutta Italia</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Offerta Istantanea', desc: 'Ottieni una valutazione competitiva in pochi minuti dopo aver inviato i tuoi dati' },
              { icon: Handshake, title: 'Prezzi Equi', desc: 'Garantiamo prezzi trasparenti e competitivi sul mercato per ogni veicolo' },
              { icon: Shield, title: 'Processo Sicuro', desc: 'I tuoi dati e le informazioni del veicolo sono protetti con i massimi standard di sicurezza' },
              { icon: HeadphonesIcon, title: 'Supporto 24/7', desc: 'Il nostro team dedicato è disponibile 24 ore su 24 per assisterti' },
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

    </main>
  );
}