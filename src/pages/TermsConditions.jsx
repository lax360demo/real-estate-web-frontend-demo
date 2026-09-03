import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function TermsConditions() {
  const lastUpdated = "September 1, 2026";

  return (
    <main className="dpdp-policy-page">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="dpdp-policy-hero">
        <div className="dpdp-policy-hero-container">
          <div className="prop-hero-badge">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>LEGAL & ADVISORY TERMS</span>
          </div>

          <h1>
            Terms & Conditions
            <br />
            <span>Service & Advisory Agreement</span>
          </h1>

          <p>
            Please read these Terms and Conditions carefully before using the LAX360 Real Estate website, booking site visits, or engaging with our property advisory services.
          </p>

          <div className="policy-meta-pill">
            <span>Last Updated: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span>Entity: <strong>LAX360 Real Estate Pvt. Ltd.</strong></span>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTENT SECTION
      ========================================= */}
      <section className="dpdp-policy-content-section">
        <div className="dpdp-policy-container">
          <div className="dpdp-policy-body">
            
            <article className="policy-block">
              <h2>1. Agreement & Acceptance of Terms</h2>
              <p>
                By accessing or browsing this website, submitting enquiry forms, requesting project brochures, or booking site visits with <strong>LAX360 Real Estate Private Limited</strong>, you agree to be bound by these Terms and Conditions and our <Link to="/privacy-notice" className="dpdp-inline-link">Privacy Notice</Link>. If you do not agree with any part of these terms, please discontinue using our online services.
              </p>
            </article>

            <article className="policy-block">
              <h2>2. Real Estate Information & RERA Disclaimers</h2>
              <p>
                All property details, plot measurements, villa elevations, floor plans, and amenities displayed on this platform are provided for informational and marketing orientation purposes. All listed projects possess valid DTCP/CMDA sanctions and RERA approvals where mandated by the Real Estate (Regulation and Development) Act, 2016. Buyers are encouraged to inspect original sanction orders, parent title deeds, and encumbrance certificates during physical site visits.
              </p>
            </article>

            <article className="policy-block">
              <h2>3. Complimentary Site Visits & Transportation</h2>
              <p>
                LAX360 provides complimentary chauffeured cab pickup and guided on-site property walkthroughs with zero purchase obligation. The scheduling of site visits is subject to slot availability, chauffeur assignment, and mutual confirmation. LAX360 reserves the right to reschedule site visits in cases of adverse weather, public holidays, or unforeseen road transport disruptions.
              </p>
            </article>

            <article className="policy-block">
              <h2>4. Digital Personal Data Protection (DPDP) Compliance</h2>
              <p>
                In accordance with India&apos;s <strong>Digital Personal Data Protection Act, 2023</strong>, all personal data submitted by you (including your name, phone number, email, and location preferences) is processed strictly on the basis of your explicit consent. You retain complete rights to access, correct, delete your data, or withdraw consent at any time via our <Link to="/privacy-centre" className="dpdp-inline-link">Privacy Centre</Link>.
              </p>
            </article>

            <article className="policy-block">
              <h2>5. Intellectual Property Rights</h2>
              <p>
                All brand logos, text copy, custom layout renders, 3D architectural representations, photographs, and UI graphics on this website are the proprietary intellectual property of LAX360 Real Estate Private Limited. Reproduction, redistribution, or commercial reuse without prior written authorization is strictly prohibited.
              </p>
            </article>

            <article className="policy-block">
              <h2>6. Governing Law & Jurisdiction</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with these terms or our advisory services shall be subject to the exclusive jurisdiction of the competent courts in Salem / Chennai, Tamil Nadu.
              </p>
            </article>

            <article className="policy-block">
              <h2>7. Contact & Legal Enquiries</h2>
              <p>
                For questions regarding these Terms & Conditions, corporate contracts, or legal representations, please contact:
              </p>
              <div className="policy-highlight-box">
                <p>
                  <strong>Legal & Compliance Desk:</strong> legal@lax360realestate.com<br />
                  <strong>Phone:</strong> +91 427 2345678 / +91 98765 43210<br />
                  <strong>Corporate Office:</strong> LAX360 Towers, 4th Floor, Junction Main Road, Five Roads, Salem, Tamil Nadu 636004
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default TermsConditions;
