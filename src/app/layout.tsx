import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { SelectionWrapper } from '@/contexts/selectionContext';

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hero.hub',
  description: 'Find the strongest hero',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SelectionWrapper>{children}</SelectionWrapper>
      </body>
    </html>
  );
}
