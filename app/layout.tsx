import type { Metadata } from 'next';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Legends Arena',
  description: 'Join the Legends - Plan your moves, dominate the arena, and forge your own destiny.',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
