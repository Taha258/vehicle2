import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section - Logo + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          
          {/* Left: Logo + Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/WalCars - Logo Design - 01 (1).png"
                alt="MotorDeal"
                width={150}
                height={150}
                className="rounded-full"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
            </p>
          </div>

          {/* Right: Newsletter */}
          <div className="lg:text-right">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              JOIN OUR COMMUNITY!
            </h3>
            <div className="flex items-center bg-white rounded-lg overflow-hidden max-w-md lg:ml-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              />
              <button className="bg-[#FAC104] text-white text-sm font-semibold px-6 py-3 hover:bg-[#D4A203] transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Pages */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                PAGES
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-[#FAC104] text-sm hover:underline" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="/showroom" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    SHOWROOM
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    BLOG POSTS
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/923282677366?text=Hello,%20I%20am%20interested%20in%20your%20cars."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            {/* Template Pages */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                TEMPLATE PAGES
              </h4>
              <ul className="space-y-3">
                {['CARS TEMPLATE', 'CAR MAKES TEMPLATE', 'CAR TYPES TEMPLATE', 'CAR CONDITIONS TEMPLATE', 'BLOG POSTS TEMPLATE'].map((item) => (
                  <li key={item}>
                    <span className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Showrooms */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                SHOWROOMS
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  DUBAI SHOWROOM
                </li>
                <li className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ABU DHABI SHOWROOM
                </li>
                <li className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  MONDAY - THURSDAY
                </li>
                <li className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  09:00 AM - 05:00 PM
                </li>
                <li className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  FRIDAY - SATURDAY
                </li>
                <li className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  10:00 AM - 01:00 PM
                </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                UTILITY PAGES
              </h4>
              <ul className="space-y-3">
                {['STYLE GUIDE', 'LICENCES', 'CHANGELOG'].map((item) => (
                  <li key={item}>
                    <span className="text-gray-400 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                GET IN TOUCH
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  3282677366
                </li>
                <li className="text-gray-400 text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  walcarsit@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Copyright © 2025 MotorDeal
            </p>

            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Powered by <span className="text-[#FAC104]">AxisTechGroup</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
