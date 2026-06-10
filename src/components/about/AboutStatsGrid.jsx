import Image from 'next/image';

export default function AboutStatsGrid() {
  const stats = [
    { label: 'Anni di Esperienza', value: '10+', type: 'dark' },
    { image: '/images/dubai-building.jpg', type: 'image' },
    { label: 'Auto Vendute', value: '500+', type: 'green' },
    { label: 'Auto Acquistate', value: '300+', type: 'green' },
    { image: '/images/Red-car.jpg', type: 'image' },
    { label: 'Trasporti Completati', value: '200+', type: 'dark' },
  ];

  return (
    <section className="py-24 px-4 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((item, i) => (
            <div 
              key={i} 
              className={`relative h-[300px] rounded-[3rem] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2
                ${item.type === 'dark' ? 'bg-[#0f172a] p-10 flex flex-col items-center justify-center text-center' : ''}
                ${item.type === 'green' ? 'bg-[#FAC104] p-10 flex flex-col items-center justify-center text-center shadow-[#FAC104]/20' : ''}
                ${item.type === 'image' ? 'border border-gray-100' : ''}
              `}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.image}
                  alt="Gallery"
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-1000"
                />
              ) : (
                <>
                  <h3
                    className={`text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight
                      ${item.type === 'dark' ? 'text-white' : 'text-white'}
                    `}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {item.value}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em]
                    ${item.type === 'dark' ? 'text-gray-400' : 'text-white/80'}
                  `}>
                    {item.label}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}