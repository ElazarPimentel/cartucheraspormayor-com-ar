import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#667eea',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cartucheraspormayor.com.ar'),
  title: {
    default: 'Cartucheras por Mayor Argentina | Fábrica de Cartucheras Personalizadas',
    template: '%s | Cartucheras por Mayor Argentina',
  },
  description: 'Cartucheras por mayor para escuelas, empresas y organizaciones. Fábrica directa de cartucheras personalizadas con logo. Entrega en toda Argentina. Stock permanente desde 50 unidades y producción a medida.',
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
    'cartucheras bordadas',
    'cartucheras impresas',
    'cartucheras tela impermeable',
    'cartucheras regalos corporativos',
    'cartucheras para colegios',
    'cartucheras promocionales',
    'mayorista cartucheras',
    'fabricante cartucheras',
  ],
  authors: [{ name: 'Cartucheras por Mayor Argentina' }],
  creator: 'Cartucheras por Mayor Argentina',
  publisher: 'Cartucheras por Mayor Argentina',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://cartucheraspormayor.com.ar',
    title: 'Cartucheras por Mayor Argentina | Fábrica de Cartucheras Personalizadas',
    description: 'Fábrica directa de cartucheras personalizadas con logo. Stock permanente desde 50 unidades y producción a medida. Envíos a toda Argentina.',
    siteName: 'Cartucheras por Mayor Argentina',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cartucheras por Mayor Argentina - Fábrica de Cartucheras Personalizadas',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartucheras por Mayor Argentina | Fábrica de Cartucheras Personalizadas',
    description: 'Fábrica directa de cartucheras personalizadas con logo. Stock permanente desde 50 unidades. Envíos a toda Argentina.',
    images: ['/og-image.png'],
    creator: '@fabricamosmochilas',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2CJSXK6');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2CJSXK6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
