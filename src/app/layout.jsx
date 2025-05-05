import { Geist, Geist_Mono } from "next/font/google";
import ContextProvider from "@/context/ContextProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});








export const metadata = {
  title: 'Brightlancer Academy – Empowering E-Commerce Excellence in Bannu',
  description: 'Brightlancer Academy offers comprehensive e-commerce training programs in Bannu, Pakistan...',
  keywords: ['Brightlancer Academy', 'E-commerce Training Bannu',"Brightlancers ecommerce","Brightlancers bannu", "Ecommerce Academy in bannu" , "Brightlancer", "Brightlancer website" ],

  authors: [
    { name: 'Brightlancer Academy', url: 'https://www.facebook.com/...' },
  ],
  creator: 'Brightlancer Academy',
  publisher: 'Brightlancer Academy',

  openGraph: {
    title: 'Brightlancer Academy – Empowering E-Commerce Excellence in Bannu',
    description: 'Join Brightlancer Academy...',
    url: 'https://brightlancer.vercel.app', // ✅ Use your live Vercel domain here
    siteName: 'Brightlancer Academy',
    images: [
      {
        url: '/images/Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Brightlancer Academy Logo',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Brightlancer Academy – Empowering E-Commerce Excellence in Bannu',
    description: 'Brightlancer Academy offers...',
    images: ['/images/Logo.webp'],
  },

  metadataBase: new URL('https://brightlancer.vercel.app'), // ✅ Vercel domain used here
};






















export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        <ContextProvider>
          {children}

        </ContextProvider>

      </body>
    </html>
  );
}
