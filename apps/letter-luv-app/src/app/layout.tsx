// @ts-expect-error: CSS import without type declarations
import './global.css';
import { Bungee } from 'next/font/google';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee',
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
      <body className={bungee.variable}>{children}</body>
    </html>
  );
}
