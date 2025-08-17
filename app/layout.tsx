import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Firefly from './components/firefly';
import RainbowkitProviders from './rainbowkit-providers';
import './globals.css';
import Balance from './components/balance';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

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
    <html lang='en' className={roboto.variable}>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <RainbowkitProviders>
              {Array.from({ length: 15 }, (_, i) => (
                <Firefly key={i} />
              ))}
              <Balance />
              {children}
            </RainbowkitProviders>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
