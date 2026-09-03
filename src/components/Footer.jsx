import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const [quickNavOpen, setQuickNavOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCookiePreferences = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("openCookiePreferences"));
  };

  return (
    <footer className="site-footer">
      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* BRAND COLUMN */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-logo">
                <img
                  src="/logo/logo.png"
                  alt="LAX360 Real Estate"
                  className="site-logo"
                />
                <div className="logo-text">
                  <strong>LAX360</strong>
                  <small>REAL ESTATE</small>
                </div>
              </Link>

              <p className="footer-brand-desc">
                Discover exceptional properties, premium projects, and spaces designed for the way you want to live.
              </p>

              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>LAX360 Towers, Premium High Street, Salem & Bengaluru</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 98765 43210 / +91 427 2345678</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>contact@lax360realestate.com</span>
                </div>
              </div>
            </div>

            {/* QUICK LINKS (ACCORDION ON MOBILE) */}
            <div className={`footer-col footer-accordion-col ${quickNavOpen ? "accordion-open" : ""}`}>
              <button
                type="button"
                className="footer-accordion-header"
                onClick={() => setQuickNavOpen(!quickNavOpen)}
                aria-expanded={quickNavOpen}
              >
                <h4>Quick Navigation</h4>
                <span className="accordion-arrow">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <ul className={`footer-links ${quickNavOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/properties">Featured Properties</Link></li>
                <li><Link to="/projects">Ongoing Projects</Link></li>
                <li><Link to="/locations">Popular Locations</Link></li>
                <li><Link to="/site-visit">Schedule Site Visit</Link></li>
                <li><Link to="/privacy-centre">Privacy Centre</Link></li>
                <li><Link to="/contact">Contact & Support</Link></li>
              </ul>
            </div>

            {/* PROPERTY TYPES (ACCORDION ON MOBILE) */}
            <div className={`footer-col footer-accordion-col ${categoriesOpen ? "accordion-open" : ""}`}>
              <button
                type="button"
                className="footer-accordion-header"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                aria-expanded={categoriesOpen}
              >
                <h4>Property Categories</h4>
                <span className="accordion-arrow">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <ul className={`footer-links ${categoriesOpen ? "open" : ""}`}>
                <li><Link to="/properties?category=plots">DTCP Residential Plots</Link></li>
                <li><Link to="/properties?category=villas">Independent Luxury Villas</Link></li>
                <li><Link to="/properties?category=apartments">Premium 2 & 3 BHK Condos</Link></li>
                <li><Link to="/properties?category=apartments">High-Rise Sky Condos</Link></li>
                <li><Link to="/properties?category=plots">Gated Communities</Link></li>
                <li><Link to="/properties?category=commercial">Commercial Plots & Retail</Link></li>
                <li><Link to="/properties?category=plots">Eco Green Enclaves</Link></li>
              </ul>
            </div>

            {/* SOCIAL / CONNECT WITH US */}
            <div className="footer-col footer-connect-col">
              <h4>Connect With Us</h4>
              <p className="footer-connect-desc">
                Follow us on social media for new project launches, virtual property tours, and exclusive real estate insights.
              </p>

              <div className="footer-social-icons">
                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* TWITTER / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YOUTUBE */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL & COPYRIGHT (DPDP COMPLIANCE) */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} LAX360 Real Estate Private Limited. All Rights Reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-notice">Privacy Notice</Link>
            <span className="footer-dot-sep">•</span>
            <button
              type="button"
              className="footer-cookie-pref-btn"
              onClick={handleOpenCookiePreferences}
            >
              Cookie Preferences
            </button>
            <span className="footer-dot-sep">•</span>
            <Link to="/privacy-centre">Privacy Centre</Link>
            <span className="footer-dot-sep">•</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          <button onClick={scrollToTop} className="footer-scroll-top" aria-label="Scroll to top">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
