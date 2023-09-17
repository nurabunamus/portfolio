import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from './theme-provider';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nur Abunamus',
  description: 'Nur Abunamus portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-50 dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
