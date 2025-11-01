import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cartucheras por Mayor Argentina | Fábrica de Cartucheras Personalizadas',
  description: 'Cartucheras por mayor para escuelas, empresas y organizaciones. Fábrica directa de cartucheras personalizadas con logo. Entrega en toda Argentina. Stock permanente y producción a medida.',
  keywords: [
    'cartucheras por mayor',
    'cartucheras personalizadas',
    'cartucheras con logo',
    'fábrica de cartucheras',
    'cartucheras escolares',
    'cartucheras empresariales',
    'cartucheras Argentina',
    'cartucheras al por mayor',
    'cartucheras industriales',
    'estuches escolares',
    'cartucheras para empresas',
    'producción de cartucheras',
  ],
  alternates: {
    canonical: 'https://cartucheraspormayor.com.ar',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://cartucheraspormayor.com.ar',
    title: 'Cartucheras por Mayor Argentina',
    description: 'Fábrica directa de cartucheras personalizadas. Stock permanente y producción a medida.',
    siteName: 'Cartucheras por Mayor',
    images: [
      {
        url: 'https://cartucheraspormayor.com.ar/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cartucheras por Mayor Argentina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartucheras por Mayor Argentina | Fábrica de Cartucheras Personalizadas',
    description: 'Fábrica directa de cartucheras personalizadas. Stock permanente y producción a medida.',
    images: ['https://cartucheraspormayor.com.ar/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
