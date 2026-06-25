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
      <body className={`${bungee.variable} ${bitcount.variable}`}>{children}</body>
    </html>
  );
}
