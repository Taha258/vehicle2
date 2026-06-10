// src/app/(site)/layout.js
// Yeh layout sirf website pages ke liye hai — studio par apply nahi hoga
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export default function SiteLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}