import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { organizationSchema } from '../lib/schema';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Створення сайту для барбершопа під ключ | BarberWeb',
  description: 'Професійна розробка сайтів для барбершопів в Україні. Інтеграція онлайн-запису Altegio, SEO оптимізація та сучасний дизайн.',
  openGraph: {
    title: 'Розробка сайтів для барбершопів',
    description: 'Збільште кількість записів у ваш барбершоп за допомогою професійного сайту.',
    url: 'https://barberweb.com.ua/uk',
    siteName: 'BarberWeb',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}