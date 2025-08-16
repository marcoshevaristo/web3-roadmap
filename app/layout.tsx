import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Firefly from './components/firefly';
import RainbowkitProviders from './rainbowkit-providers';
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Web3 roadmap',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RainbowkitProviders>
          {Array.from({ length: 15 }, (_, i) => (
            <Firefly key={i} />
          ))}
          {children}
        </RainbowkitProviders>
      </body>
    </html>
  );
}
