// src/app/layout.js
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import WhatsAppButton from '@/src/components/WhatsAppButton';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'WalCars - MotorDeal Showroom',
  description: 'Best car deals',
  icons: {
    icon: '/images/WalCars---Logo-Design---FF--Favicon.png',
    shortcut: '/images/WalCars---Logo-Design---FF--Favicon.png',
    apple: '/images/WalCars---Logo-Design---FF--Favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}