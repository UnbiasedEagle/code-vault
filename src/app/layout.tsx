import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'CodeVault - Manage Your Code Snippets',
  description:
    'CodeVault is a powerful tool for developers to save, organize, and access their code snippets with ease. Perfect for improving productivity and keeping your most-used code at your fingertips.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </main>
      </body>
    </html>
  );
}
