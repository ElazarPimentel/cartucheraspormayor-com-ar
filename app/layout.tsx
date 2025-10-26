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
  ],
  authors: [{ name: 'Cartucheras por Mayor' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://cartucheraspormayor.com.ar',
    title: 'Cartucheras por Mayor Argentina',
    description: 'Fábrica directa de cartucheras personalizadas. Stock permanente y producción a medida.',
    siteName: 'Cartucheras por Mayor',
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
