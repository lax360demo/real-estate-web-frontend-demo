import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function PrivacyNotice() {
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>DPDP ACT (2023) COMPLIANCE</span>
          </div>

          <h1>
            Privacy Notice &
            <br />
            <span>Data Protection Policy</span>
          </h1>

          <p>
            LAX360 Real Estate Private Limited (“LAX360”, “we”, “our”, or “us”) is committed to protecting your personal data in full adherence to the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and applicable real-estate regulations in India.
          </p>

          <div className="policy-meta-pill">
            <span>Last Updated: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span>Data Fiduciary: <strong>LAX360 Real Estate Pvt. Ltd.</strong></span>
          </div>
        </div>
      </section>

      {/* =========================================
          POLICY CONTENT
      ========================================= */}
      <section className="dpdp-policy-content-section">
        <div className="dpdp-policy-container">
          
          {/* QUICK SUMMARY CARD */}
          <div className="dpdp-summary-card">
            <div className="summary-icon">🛡️</div>
            <div>
              <h3>Summary of Your Privacy Rights</h3>
              <p>
                Under the DPDP Act, you are the <strong>Data Principal</strong>. You have complete control over your personal data, including the right to view, correct, erase, withdraw consent, or lodge a grievance through our dedicated <Link to="/privacy-centre" className="dpdp-inline-link">Privacy Centre</Link>.
              </p>
            </div>
          </div>

          <div className="dpdp-policy-body">
            
            {/* SECTION 1 */}
            <article className="policy-block">
              <h2>1. Introduction & Data Fiduciary Details</h2>
              <p>
                This Privacy Notice explains how <strong>LAX360 Real Estate Private Limited</strong>, operating as a <strong>Data Fiduciary</strong> under India&apos;s Digital Personal Data Protection Act, 2023, collects, processes, stores, and safeguards your digital personal data when you interact with our website, browse properties, request project brochures, schedule site visits, or contact our property advisory desk.
              </p>
              <div className="policy-highlight-box">
                <strong>Data Fiduciary Identification:</strong>
                <p>
                  <strong>Entity:</strong> LAX360 Real Estate Private Limited<br />
                  <strong>Headquarters:</strong> LAX360 Towers, 4th Floor, Junction Main Road, Five Roads, Salem, Tamil Nadu 636004<br />
                  <strong>Official Grievance Email:</strong> privacy@lax360realestate.com | dpo@lax360realestate.com<br />
                  <strong>Corporate Identity Number (CIN):</strong> U70109TZ2024PTC038412
                </p>
              </div>
            </article>

            {/* SECTION 2 */}
            <article className="policy-block">
              <h2>2. Personal Data We Collect</h2>
              <p>We collect only necessary personal data provided directly by you with your informed consent:</p>
              <ul className="policy-list">
                <li>
                  <strong>Contact & Identity Data:</strong> Your full name, mobile phone number, email address, and preferred language of communication.
                </li>
                <li>
                  <strong>Property Preferences:</strong> Desired property category (DTCP plots, luxury villas, commercial spaces, condos), investment budget ranges, and preferred corridors (Salem, Coimbatore, Chennai, Bengaluru, Yercaud, Trichy).
                </li>
                <li>
                  <strong>Site Visit Coordination Data:</strong> Preferred visit date, time slot, transportation preference (chauffeured cab pickup or personal vehicle), pickup landmark address, and number of accompanying visitors.
                </li>
                <li>
                  <strong>Technical & Cookie Data:</strong> IP address, device type, browser specifications, and cookie preferences (subject to your explicit consent settings).
                </li>
              </ul>
            </article>

            {/* SECTION 3 */}
            <article className="policy-block">
              <h2>3. Purpose of Data Processing & Lawful Basis</h2>
              <p>
                In compliance with Section 4 and Section 6 of the DPDP Act 2023, personal data is processed strictly based on <strong>explicit, informed, and unambiguous consent</strong> for specified, lawful purposes:
              </p>
              <div className="purpose-table-wrap">
                <table className="purpose-table">
                  <thead>
                    <tr>
                      <th>Processing Purpose</th>
                      <th>Data Utilized</th>
                      <th>Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Property consultation & brochure dispatch</td>
                      <td>Name, Mobile, Email, Property Interest</td>
                      <td>Consent (DPDP Sec 6)</td>
                    </tr>
                    <tr>
                      <td>Chauffeured site visit pickup & logistics</td>
                      <td>Name, Mobile, Pickup Address, Date/Time</td>
                      <td>Consent (DPDP Sec 6)</td>
                    </tr>
                    <tr>
                      <td>Home loan eligibility & bank assistance</td>
                      <td>Name, Contact, Budget, Employment Type</td>
                      <td>Explicit Consent & Request</td>
                    </tr>
                    <tr>
                      <td>Statutory RERA registration compliance</td>
                      <td>Identity & Booking Agreement Documentation</td>
                      <td>Legal Obligation (RERA Act 2016)</td>
                    </tr>
                    <tr>
                      <td>Website security & performance optimization</td>
                      <td>Anonymized Analytics & Essential Cookies</td>
                      <td>Legitimate Uses & Consent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* SECTION 4 */}
            <article className="policy-block">
              <h2>4. Notice & Consent Mechanism</h2>
              <p>
                Prior to or at the time of collecting personal data on any form across this website, we provide a clear, itemized notice specifying the data requested and the exact purpose of processing. Consent is collected through affirmative, unambiguous action (un-ticked checkboxes) and can be managed or withdrawn at any time.
              </p>
            </article>

            {/* SECTION 5 */}
            <article className="policy-block">
              <h2>5. Your Rights as a Data Principal (DPDP Act, 2023)</h2>
              <p>Under Chapter III of the DPDP Act, you have the following enforceable rights:</p>
              
              <div className="rights-cards-grid">
                <div className="right-card">
                  <div className="right-icon">👁️</div>
                  <h4>Right to Access & Information</h4>
                  <p>Obtain a summary of personal data being processed and the identities of any authorized third parties with whom data was shared.</p>
                </div>

                <div className="right-card">
                  <div className="right-icon">✏️</div>
                  <h4>Right to Correction & Completion</h4>
                  <p>Request correction of inaccurate personal data, completion of incomplete records, and updating of contact information.</p>
                </div>

                <div className="right-card">
                  <div className="right-icon">🗑️</div>
                  <h4>Right to Erasure & Deletion</h4>
                  <p>Request deletion of your personal data when the specified purpose is completed or when consent is withdrawn, subject to statutory retention.</p>
                </div>

                <div className="right-card">
                  <div className="right-icon">↩️</div>
                  <h4>Right to Withdraw Consent</h4>
                  <p>Withdraw previously granted consent easily with the same ease with which it was provided, halting further non-essential processing.</p>
                </div>

                <div className="right-card">
                  <div className="right-icon">⚖️</div>
                  <h4>Right of Grievance Redressal</h4>
                  <p>Lodge privacy concerns or complaints with our dedicated Data Protection Officer, with guaranteed resolution within prescribed timelines.</p>
                </div>

                <div className="right-card">
                  <div className="right-icon">👥</div>
                  <h4>Right to Nominate</h4>
                  <p>Nominate any individual who shall exercise your data principal rights in the event of death or incapacity.</p>
                </div>
              </div>

              <div className="policy-action-callout">
                <p>
                  To exercise any of the rights above, please visit our self-service <Link to="/privacy-centre">Privacy Centre ➔</Link> or email our Data Protection Officer at <a href="mailto:privacy@lax360realestate.com">privacy@lax360realestate.com</a>.
                </p>
              </div>
            </article>

            {/* SECTION 6 */}
            <article className="policy-block">
              <h2>6. Data Security, Safeguards & Retention</h2>
              <p>
                We employ industry-standard technical, organizational, and physical safeguards to prevent data breaches, unauthorized access, alteration, or disclosure:
              </p>
              <ul className="policy-list">
                <li><strong>Encryption:</strong> High-grade SSL/TLS 256-bit encryption for all data in transit and encrypted databases at rest.</li>
                <li><strong>Access Control:</strong> Strict role-based access restricted solely to authorized property advisors bound by non-disclosure agreements.</li>
                <li><strong>Retention Limitation:</strong> Personal data is retained only for as long as necessary to fulfill property enquiry, site visit coordination, or statutory compliance under the Real Estate (Regulation and Development) Act, 2016 (RERA), following which it is permanently purged or anonymized.</li>
              </ul>
            </article>

            {/* SECTION 7 */}
            <article className="policy-block">
              <h2>7. Authorized Third-Party Sharing</h2>
              <p>
                LAX360 <strong>never sells or rents</strong> your personal data to third-party telemarketers. We share data only with verified partners strictly necessary to fulfill your requested services:
              </p>
              <ul className="policy-list">
                <li><strong>Chauffeured Cab Logistics Partners:</strong> Limited to passenger name, contact number, and pickup location for site visits.</li>
                <li><strong>Partner Banks & NBFCs (SBI, HDFC, ICICI, Axis):</strong> Shared strictly upon your explicit instruction for home loan sanctioning.</li>
                <li><strong>Government & Statutory Authorities:</strong> Sub-Registrar offices and RERA authorities during statutory registry conveyance.</li>
              </ul>
            </article>

            {/* SECTION 8 */}
            <article className="policy-block">
              <h2>8. Grievance Redressal & Data Protection Officer</h2>
              <p>
                If you have any questions, concerns, or grievances regarding the processing of your personal data or wish to appeal any privacy request decision, please contact our designated Grievance Redressal Officer:
              </p>
              
              <div className="dpo-contact-card">
                <div className="dpo-badge">GRIEVANCE REDRESSAL OFFICER / DPO</div>
                <h3>Mr. S. Aravind</h3>
                <p className="dpo-role">Head of Data Governance & Legal Compliance</p>
                
                <div className="dpo-details-list">
                  <div className="dpo-detail-row">
                    <span className="dpo-icon">✉️</span>
                    <span><strong>Email:</strong> privacy@lax360realestate.com / dpo@lax360realestate.com</span>
                  </div>
                  <div className="dpo-detail-row">
                    <span className="dpo-icon">📞</span>
                    <span><strong>Phone:</strong> +91 427 2345678 / +91 98765 43210</span>
                  </div>
                  <div className="dpo-detail-row">
                    <span className="dpo-icon">🏢</span>
                    <span><strong>Address:</strong> LAX360 Towers, 4th Floor, Junction Main Road, Five Roads, Salem, Tamil Nadu 636004</span>
                  </div>
                  <div className="dpo-detail-row">
                    <span className="dpo-icon">⏰</span>
                    <span><strong>Response Time:</strong> Acknowledgment within 24 hours; Final resolution within 7 business days.</span>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================
          PRIVACY CENTRE BANNER
      ========================================= */}
      <section className="privacy-cta-ribbon">
        <div className="privacy-cta-container">
          <div>
            <h3>Need to submit a data request or manage your preferences?</h3>
            <p>Access our self-service Privacy Centre to view, correct, or erase your data at any time.</p>
          </div>
          <Link to="/privacy-centre" className="privacy-cta-btn">
            Open Privacy Centre ➔
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default PrivacyNotice;
