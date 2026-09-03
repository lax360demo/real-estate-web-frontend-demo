import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function About() {
  /* =========================================
     INTERSECTION OBSERVER FOR SUBTLE ANIMATIONS
  ========================================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    const animatedElements = document.querySelectorAll(
      ".about-page-intro, .about-who-redesign-section, .about-vm-grid, .about-why-grid"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* =========================================
          1. ABOUT US SECTION (BALANCED PREMIUM DESIGN)
      ========================================= */}
      <section className="home-about about-page-intro">
        <div className="home-about-container about-balanced-container">
          {/* LEFT CONTENT */}
          <div className="home-about-content">
            <div className="about-pill-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>ABOUT LAX360 REAL ESTATE</span>
            </div>

            <h2>
              Living that puts
              <br />
              <span>people first.</span>
            </h2>

            <p>
              For over a decade, LAX360 has combined master-planning expertise, prime growth corridors, and verified legal clarity to create exceptional living experiences and secure generational wealth.
            </p>

            <p>
              From thoughtfully planned DTCP residential plots to luxury community villas, every project is designed around the way you want to live.
            </p>

            <div className="about-cta-wrapper">
              <Link to="/site-visit" className="about-screenshot-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Schedule a Site Visit ➔
              </Link>
            </div>
          </div>

          {/* RIGHT DECORATIVE REAL-ESTATE SHOWCASE */}
          <div className="about-right-showcase">
            <div className="about-showcase-grid">
              {/* METRIC 1 */}
              <div className="about-showcase-card">
                <div className="showcase-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="showcase-card-text">
                  <strong>100% Verified</strong>
                  <span>DTCP & RERA Approved</span>
                </div>
              </div>

              {/* METRIC 2 */}
              <div className="about-showcase-card">
                <div className="showcase-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="showcase-card-text">
                  <strong>50+ Projects</strong>
                  <span>Prime Growth Hubs</span>
                </div>
              </div>

              {/* METRIC 3 */}
              <div className="about-showcase-card">
                <div className="showcase-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="showcase-card-text">
                  <strong>15,000+</strong>
                  <span>Happy Homeowners</span>
                </div>
              </div>

              {/* METRIC 4 */}
              <div className="about-showcase-card">
                <div className="showcase-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div className="showcase-card-text">
                  <strong>10+ Years</strong>
                  <span>Excellence & Trust</span>
                </div>
              </div>
            </div>

            {/* BOTTOM TRUST STRIP */}
            <div className="about-showcase-trust-strip">
              <span className="trust-dot">◈</span>
              <span>Direct Developer Pricing • Zero Brokerage • Instant Registry</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. WHO WE ARE SECTION
          (REDESIGNED LIKE REFERENCE SCREENSHOT)
      ========================================= */}
      <section className="about-who-redesign-section">
        <div className="about-who-redesign-container">
          {/* LEFT VISUAL WITH FLOATING BADGE */}
          <div className="who-redesign-visual">
            <div className="who-redesign-image-box">
              <img
                src="/images/who-we-are-bg.jpg"
                alt="LAX360 Architecture & Real Estate"
              />
            </div>

            <div className="who-redesign-badge">
              <strong>10+</strong>
              <span>
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="who-redesign-content">
            <span className="section-eyebrow who-eyebrow-text">WHO WE ARE</span>

            <h2>
              Real estate built on
              <br />
              <span>trust.</span>
            </h2>

            <p>
              LAX360 is dedicated to delivering comprehensive property solutions through prime strategic locations, modern master-planned infrastructure, and customer-focused services.
            </p>

            <p>
              From verified residential plots to luxury community developments, every decision we make is guided by one simple principle — putting our homebuyers, investors, and their families first.
            </p>

            {/* FEATURE ICONS LIST */}
            <div className="who-feature-list">
              <div className="who-feature-item">
                <div className="who-feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <span>Buyer-first & transparent approach</span>
              </div>

              <div className="who-feature-item">
                <div className="who-feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span>Experienced planners & civil specialists</span>
              </div>

              <div className="who-feature-item">
                <div className="who-feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <span>High-growth corridors & modern infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR PURPOSE (OUR VISION & OUR MISSION) SECTION
      ========================================= */}
      <section className="about-vision-mission">
        <div className="about-vm-container about-vm-split-container">
          {/* LEFT TITLE & DESCRIPTION COLUMN */}
          <div className="about-vm-left">
            <span className="section-eyebrow">OUR PURPOSE</span>
            <h2>
              Our Vision &
              <br />
              <span>Our Mission.</span>
            </h2>
            <p className="about-vm-left-desc">
              Our guiding principles inspire everything we build—ensuring every project creates lasting value, trust, and quality living.
            </p>
          </div>

          {/* RIGHT AREA: OUR VISION & OUR MISSION CARDS */}
          <div className="about-vm-grid in-view">
            {/* VISION CARD */}
            <div className="vm-card vision-card">
              <div className="vm-card-top">
                <span className="vm-badge">OUR VISION</span>
                <div className="vm-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </div>
              </div>

              <h3>Transforming How You Live & Invest</h3>

              <p className="vm-desc">
                To be the most trusted, innovative, and customer-centric real estate brand in South India—setting new benchmarks in sustainable development, transparent transactions, and lasting community living.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="vm-card mission-card">
              <div className="vm-card-top">
                <span className="vm-badge">OUR MISSION</span>
                <div className="vm-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
              </div>

              <h3>Empowering Homeowners with Absolute Trust</h3>

              <p className="vm-desc">
                To empower homebuyers and investors through 100% legally verified properties, transparent pricing, superior development, and dedicated end-to-end guidance from discovery to handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. WHY CHOOSE US SECTION
      ========================================= */}
      <section className="about-why-section">
        <div className="about-why-container">
          <div className="about-why-header">
            <div>
              <span className="section-eyebrow">WHY CHOOSE US</span>
              <h2>
                The LAX360 Standard.
                <br />
                <span>Why Homebuyers Trust Us.</span>
              </h2>
            </div>
            <p>
              We bring together rigorous legal verification, exceptional development quality, and dedicated relationship management.
            </p>
          </div>

          <div className="about-why-grid in-view">
            {/* WHY CARD 1 */}
            <div className="about-why-card">
              <span className="why-badge-num">01</span>
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3>100% Vetted DTCP & RERA Titles</h3>
              <p>
                Zero legal risks. Every plot and villa comes with pristine title documentation, municipal clearances, and seamless instant registration.
              </p>
            </div>

            {/* WHY CARD 2 */}
            <div className="about-why-card">
              <span className="why-badge-num">02</span>
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>High-Growth Prime Corridors</h3>
              <p>
                Handpicked locations across Salem, Coimbatore, Bengaluru, and Chennai with direct highway connectivity and rapid capital appreciation.
              </p>
            </div>

            {/* WHY CARD 3 */}
            <div className="about-why-card">
              <span className="why-badge-num">03</span>
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3>Turnkey Infrastructure & Quality</h3>
              <p>
                Grand entrance arches, compound walls, blacktop tar roads, street lights, green parks, and 24/7 security ready before project handover.
              </p>
            </div>

            {/* WHY CARD 4 */}
            <div className="about-why-card">
              <span className="why-badge-num">04</span>
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3>Dedicated Advisory & Lifetime Care</h3>
              <p>
                Personalized property advisors to assist you through free site visits, home loan facilitation, documentation, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />
    </main>
  );
}

export default About;