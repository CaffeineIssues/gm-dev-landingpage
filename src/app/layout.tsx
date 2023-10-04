import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './Theme/Header/Main';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GM Desenvolvimento de Software',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
