import './global.css';
import { Bungee } from 'next/font/google';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee',
});

import { Bitcount_Grid_Double } from "next/font/google";

const bitcount = Bitcount_Grid_Double({
  subsets: ["latin"],
  variable: "--font-bitcount",
});

export const metadata = {
  title: 'Hello My luv!',
  description: 'Web Apps for letter luv',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
      <body className={`${bungee.variable} ${bitcount.variable}`}>{children}</body>
    </html>
  );
}
