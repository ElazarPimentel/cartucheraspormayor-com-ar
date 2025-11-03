import InstagramFeedSection from './components/InstagramFeedSection';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cartucheras por Mayor Argentina",
    "description": "Fábrica directa de cartucheras personalizadas para escuelas, empresas y organizaciones. Stock permanente y producción a medida.",
    "url": "https://cartucheraspormayor.com.ar",
    "telephone": "+54-11-5656-7373",
    "email": "FabricamosMochilas@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressLocality": "Argentina"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.instagram.com/fabricamosmochilas"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Productos de Cartuchería",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cartucheras Escolares",
            "description": "Cartucheras personalizadas para escuelas con logo. Tela impermeable y cierre resistente."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cartucheras Empresariales",
            "description": "Cartucheras premium con logo bordado para regalos corporativos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cartucheras Personalizadas",
            "description": "Diseño a medida según especificaciones del cliente. Producción exclusiva."
          }
        }
      ]
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              <a href="https://wa.me/541156567373" className="btn-primary">
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
              <a href="https://wa.me/541156567373" className="contact-bubble bubble-1">
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
              <a href="https://wa.me/541156567373?text=Hola! Me interesa cotizar cartucheras escolares" className="product-cta">
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
              <a href="https://wa.me/541156567373?text=Hola! Me interesa cotizar cartucheras empresariales" className="product-cta">
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
              <a href="https://wa.me/541156567373?text=Hola! Me interesa cotizar cartucheras personalizadas" className="product-cta">
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
            <a href="https://Pensanta.com" target="_blank" rel="noopener noreferrer">
              Pensanta.com
            </a>
          </small>
        </div>
      </footer>
    </main>
  );
}
