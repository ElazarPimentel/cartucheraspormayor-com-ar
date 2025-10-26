import InstagramFeedSection from './components/InstagramFeedSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Gradient */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">✏️ Fábrica Directa</div>
            <h1>
              <span className="gradient-text">Cartucheras</span>
              <br />
              <span className="outline-text">por Mayor</span>
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

      {/* Instagram Gallery Section */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Nuestros Trabajos</span>
          </h2>
          <p className="instagram-intro">
            Seguinos en <a href="https://www.instagram.com/fabricamosmochilas/" target="_blank" rel="noopener noreferrer">@fabricamosmochilas</a>
          </p>
          <InstagramFeedSection />
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para tu pedido?</h2>
            <p>Cotización en menos de 24hs • Sin compromiso • Asesoramiento personalizado</p>
            <div className="cta-buttons">
              <a href="https://wa.me/541156567373" className="btn-primary btn-large">
                📱 WhatsApp: 11-5656-7373
              </a>
              <a href="mailto:fabricamosmochilas@gmail.com" className="btn-secondary btn-large">
                📧 Email
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

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 Cartucheras por Mayor • Fábrica Argentina</p>
          <div className="footer-links">
            <a href="https://wa.me/541156567373">WhatsApp</a>
            <a href="mailto:fabricamosmochilas@gmail.com">Email</a>
            <a href="https://www.instagram.com/fabricamosmochilas/">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
