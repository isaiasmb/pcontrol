import '../globals.css';
import { localPoppins } from '../fonts';

import { ThemeProvider } from '@/shadcn/theme-provider';

import { cn } from '@/lib/utils';
import Logo from '../components/Logo';

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
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          localPoppins.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Logo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
