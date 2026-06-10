import Image from 'next/image';

const team = [
  {
    name: 'Ryan Thompson',
    role: 'Founder & Managing Director',
    image: '/images/men.jpg',
  },
  {
    name: 'Ethan Caldwell',
    role: 'Global Sales Director',
    image: '/images/Ethan Caldwell.jpg',
  },
  {
    name: 'Sofia Anderson',
    role: 'Head of Finance',
    image: '/images/Sofia Anderson.jpg',
  },
  {
    name: 'Marcus Fields',
    role: 'Senior Client Relations',
    image: '/images/Marcus Fields.jpg',
  },
];

export default function AboutTeam() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="bg-red-600 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#FAC104]" />
              Experts
            </div>
            <h2
              className="text-[#0f172a] text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              MEET THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">SPECIALISTS</span>
            </h2>
          </div>
          <p
            className="text-gray-500 text-lg font-medium leading-relaxed max-w-md"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            A diverse group of passionate automotive experts dedicated to finding your perfect vehicle.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Member Image Card */}
              <div className="relative h-[450px] rounded-[3rem] overflow-hidden mb-8 shadow-2xl border border-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-[#FAC104] transition-colors border border-white/10 text-white font-bold">
                      in
                    </button>
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-[#FAC104] transition-colors border border-white/10 text-white font-bold">
                      @
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1 px-4">
                <h3
                  className="text-[#0f172a] text-2xl font-bold uppercase tracking-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[#FAC104] text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
