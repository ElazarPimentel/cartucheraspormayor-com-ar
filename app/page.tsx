import InstagramFeedSection from './components/InstagramFeedSection';

export default function Home() {
  // Multiple Schema.org structured data types for enhanced SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cartucheraspormayor.com.ar/#organization",
    "name": "Cartucheras por Mayor Argentina",
    "url": "https://cartucheraspormayor.com.ar",
    "logo": "https://cartucheraspormayor.com.ar/logo.png",
    "image": "https://cartucheraspormayor.com.ar/og-image.png",
    "description": "Fábrica directa de cartucheras personalizadas para escuelas, empresas y organizaciones en Argentina",
    "email": "FabricamosMochilas@gmail.com",
    "telephone": "+54-11-5656-7373",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "José Bonifacio 454",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1424",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.instagram.com/fabricamosmochilas",
      "https://maps.app.goo.gl/nRBQGxRU6uJehsyf8"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-11-5656-7373",
      "contactType": "sales",
      "areaServed": "AR",
      "availableLanguage": ["Spanish"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cartucheraspormayor.com.ar/#localbusiness",
    "name": "Cartucheras por Mayor Argentina",
    "description": "Fábrica directa de cartucheras personalizadas para escuelas, empresas y organizaciones. Stock permanente desde 50 unidades y producción a medida.",
    "url": "https://cartucheraspormayor.com.ar",
    "telephone": "+54-11-5656-7373",
    "email": "FabricamosMochilas@gmail.com",
    "priceRange": "$$",
    "image": "https://cartucheraspormayor.com.ar/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "José Bonifacio 454",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1424",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6269062",
      "longitude": "-58.4334097"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const manufacturerSchema = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "@id": "https://cartucheraspormayor.com.ar/#manufacturer",
    "name": "Cartucheras por Mayor Argentina",
    "description": "Fabricante de cartucheras personalizadas, mochilas y artículos de marroquinería industrial en Argentina",
    "url": "https://cartucheraspormayor.com.ar",
    "logo": "https://cartucheraspormayor.com.ar/logo.png",
    "telephone": "+54-11-5656-7373",
    "email": "FabricamosMochilas@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR"
    },
    "brand": {
      "@type": "Brand",
      "name": "Cartucheras por Mayor"
    }
  };

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Cartucheras Escolares por Mayor",
        "description": "Cartucheras personalizadas para escuelas con logo. Tela impermeable, cierre YKK resistente, tamaño estándar 20x8cm. Desde 50 unidades.",
        "image": "https://cartucheraspormayor.com.ar/productos/cartucheras-escolares.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cartucheras por Mayor"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://cartucheraspormayor.com.ar#productos",
          "priceCurrency": "ARS",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Cartucheras por Mayor Argentina"
          }
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Cartucheras Empresariales Premium",
        "description": "Cartucheras premium con logo bordado, material de alta calidad, múltiples compartimentos. Ideal para regalos corporativos.",
        "image": "https://cartucheraspormayor.com.ar/productos/cartucheras-empresariales.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cartucheras por Mayor"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://cartucheraspormayor.com.ar#productos",
          "priceCurrency": "ARS",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Cartucheras por Mayor Argentina"
          }
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Cartucheras Personalizadas a Medida",
        "description": "Diseño 100% personalizado según especificaciones del cliente. Tu logo + colores. Producción exclusiva a medida.",
        "image": "https://cartucheraspormayor.com.ar/productos/cartucheras-personalizadas.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cartucheras por Mayor"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://cartucheraspormayor.com.ar#productos",
          "priceCurrency": "ARS",
          "availability": "https://schema.org/PreOrder",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Cartucheras por Mayor Argentina"
          }
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es el mínimo de compra de cartucheras por mayor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El mínimo de compra es de 50 unidades. Contamos con stock permanente para entrega inmediata y también realizamos producción a medida según tus especificaciones."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo personalizar las cartucheras con mi logo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todas nuestras cartucheras son 100% personalizables. Podés agregar tu logo, elegir colores y crear un diseño único. Ofrecemos logo impreso o bordado según el tipo de producto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacen envíos a todo el país?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, llegamos a toda Argentina con logística propia. El costo y tiempo de envío depende de la ubicación y cantidad del pedido."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo demora la producción?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para pedidos de stock estándar, la entrega es inmediata. Para producción personalizada a medida, el tiempo de producción es de 15 a 30 días dependiendo de la cantidad y complejidad del diseño."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://cartucheraspormayor.com.ar"
      }
    ]
  };

  return (
    <main>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Manufacturer Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }}
      />
      {/* Products Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section with Gradient */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">✏️ Fábrica Directa</div>
            <h1>
              <span className="gradient-text">Cartucheras por Mayor</span>
              <br />
              <span className="outline-text">Argentina</span>
            </h1>
            <p className="hero-subtitle">
              Personalizá con tu logo • Stock permanente • Entrega inmediata
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/541156567373?text=Hola! Escribo desde cartucheraspormayor.com.ar - Me interesa consultar sobre cartucheras por mayor." className="btn-primary">
                📱 Pedí tu Cotización
              </a>
              <a href="#productos" className="btn-secondary">
                Ver Catálogo
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">✏️</div>
              <div className="card-text">Escolares</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">💼</div>
              <div className="card-text">Empresariales</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🎨</div>
              <div className="card-text">Personalizadas</div>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para tu pedido?</h2>
            <p>Cotización en menos de 24hs • Sin compromiso • Asesoramiento personalizado</p>
            <div className="contact-bubbles">
              <a href="https://wa.me/541156567373?text=Hola! Escribo desde cartucheraspormayor.com.ar - Me interesa consultar sobre cartucheras por mayor." className="contact-bubble bubble-1">
                <div className="bubble-icon">📱</div>
                <div className="bubble-text">
                  <div className="bubble-label">WhatsApp</div>
                  <div className="bubble-value">11-5656-7373</div>
                </div>
              </a>
              <a href="mailto:FabricamosMochilas@gmail.com" className="contact-bubble bubble-2">
                <div className="bubble-icon">📧</div>
                <div className="bubble-text">
                  <div className="bubble-label">Email</div>
                  <div className="bubble-value">FabricamosMochilas@gmail.com</div>
                </div>
              </a>
              <a href="tel:+541156567373" className="contact-bubble bubble-3">
                <div className="bubble-icon">📞</div>
                <div className="bubble-text">
                  <div className="bubble-label">Teléfono</div>
                  <div className="bubble-value">(11) 5656-7373</div>
                </div>
              </a>
              <a href="https://www.instagram.com/fabricamosmochilas/" target="_blank" rel="noopener noreferrer" className="contact-bubble bubble-4">
                <div className="bubble-icon">📸</div>
                <div className="bubble-text">
                  <div className="bubble-label">Instagram</div>
                  <div className="bubble-value">@fabricamosmochilas</div>
                </div>
              </a>
            </div>
            <div className="contact-info">
              <span>📍 Fabricamos en Argentina</span>
              <span>⭐ +10 años en el mercado</span>
              <span>💯 Garantía de calidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text instagram-title">Nuestros Trabajos</span>
          </h2>
          <InstagramFeedSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3>Fábrica Directa</h3>
              <p>Sin intermediarios. Precios de fábrica para mayoristas.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>100% Personalizables</h3>
              <p>Agregá tu logo, colores y diseño único.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Stock Permanente</h3>
              <p>Entrega inmediata desde 50 unidades.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Envíos a Todo el País</h3>
              <p>Llegamos a toda Argentina con logística propia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="products">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Nuestros Productos</span>
          </h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-badge">Más vendido</div>
              <div className="product-emoji">✏️</div>
              <h3>Cartucheras Escolares</h3>
              <ul>
                <li>Tela impermeable</li>
                <li>Cierre YKK resistente</li>
                <li>Tamaño estándar 20x8cm</li>
                <li>Desde 50 unidades</li>
              </ul>
              <a href="https://wa.me/541156567373?text=Hola! Escribo desde cartucheraspormayor.com.ar - Me interesa cotizar cartucheras escolares." className="product-cta">
                Cotizar ahora →
              </a>
            </div>

            <div className="product-card">
              <div className="product-badge">Premium</div>
              <div className="product-emoji">💼</div>
              <h3>Cartucheras Empresariales</h3>
              <ul>
                <li>Material premium</li>
                <li>Logo bordado</li>
                <li>Múltiples compartimentos</li>
                <li>Ideal para regalos corporativos</li>
              </ul>
              <a href="https://wa.me/541156567373?text=Hola! Escribo desde cartucheraspormayor.com.ar - Me interesa cotizar cartucheras empresariales." className="product-cta">
                Cotizar ahora →
              </a>
            </div>

            <div className="product-card">
              <div className="product-badge">Nuevo</div>
              <div className="product-emoji">🎨</div>
              <h3>Cartucheras Personalizadas</h3>
              <ul>
                <li>Diseño a medida</li>
                <li>Tu logo + colores</li>
                <li>Producción exclusiva</li>
                <li>Sin mínimo de compra*</li>
              </ul>
              <a href="https://wa.me/541156567373?text=Hola! Escribo desde cartucheraspormayor.com.ar - Me interesa cotizar cartucheras personalizadas." className="product-cta">
                Cotizar ahora →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo">
        <div className="footer-content">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Cartucheras por Mayor - Todos los derechos reservados</p>
          <p className="footer-version">v1.0.1</p>
          <small className="footer-credit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Digitally carved by{' '}
            <a href="https://ElazarPimentel.com" target="_blank" rel="noopener noreferrer">
              ElazarPimentel.com
            </a>
          </small>
        </div>
      </footer>
    </main>
  );
}
