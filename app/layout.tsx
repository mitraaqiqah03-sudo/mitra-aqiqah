import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mitra Aqiqah | Aqiqah Jabodetabek',
  description:
    'Mitra Aqiqah melayani kebutuhan aqiqah keluarga di Jabodetabek sejak 2010.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}