import './globals.css';
import { localPoppins } from './fonts';

export const metadata = {
  title: 'NextJS Boilerplate',
  description:
    'A simple project starter to work with TypeScript, React, NextJS, Tailwind, Zustand, Jest and Testing library'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={localPoppins.className}>{children}</body>
    </html>
  );
}
