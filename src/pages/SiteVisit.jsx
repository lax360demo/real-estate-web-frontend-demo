import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/* =========================================
   PROJECTS & PROPERTIES LIST FOR SITE VISIT
========================================= */
const VISIT_LOCATIONS = [
  {
    category: "Featured Projects",
    options: [
      "LAX Grand Vista Township (Salem - NH44 Corridor)",
      "LAX Green Meadows Layout (Salem - Omalur Highway)",
      "LAX Elite IT Park & Commercial Plaza (Coimbatore - Saravanampatti)",
      "LAX Serene Meadows Layout (Coimbatore - Avinashi Road)",
      "LAX Silicon Boulevard IT Suites (Chennai - OMR Sholinganallur)",
      "LAX Coastal Grandeur Luxury Villas (Chennai - ECR)",
      "LAX Green Valley Township (Bengaluru - Hosur Road)",
      "LAX Cloud 9 Mist Valley Villas (Yercaud Foothills)",
    ],
  },
  {
    category: "Individual Verified Properties",
    options: [
      "Emerald Greens Villa (Salem - NH44 Bypass) - ₹1.45 Cr",
      "Serene Valley Plot (Salem - Gorimedu) - ₹32 Lakhs",
      "Kingsley Luxury Penthouse (Coimbatore - Race Course) - ₹2.20 Cr",
      "Silicon Palm Villa (Chennai - OMR IT Corridor) - ₹1.85 Cr",
      "Highland Vista Plot (Bengaluru - Sarjapur Road) - ₹68 Lakhs",
      "Orchid Commercial Space (Salem - Meyyanur High Road) - ₹95 Lakhs",
    ],
  },
  {
    category: "General Consultation & Custom Corridor Tour",
    options: [
      "Multi-Property Tour: Salem Highway Corridor",
      "Multi-Property Tour: Coimbatore Tech Belt",
      "Multi-Property Tour: Chennai OMR / GST Expressway",
      "Multi-Property Tour: Bengaluru Hosur & Sarjapur Gateway",
      "Multi-Property Tour: Yercaud Foothills & Vacation Plots",
    ],
  },
];

/* =========================================
   SITE VISIT HIGHLIGHTS
========================================= */
const VISIT_PERKS = [
  {
    icon: "🚗",
    title: "100% Free Chauffeured Pickup",
    desc: "Doorstep luxury cab pickup & drop facility for you and your family members from your residence, airport, or railway station.",
  },
  {
    icon: "📜",
    title: "On-Site Legal & Title Verification",
    desc: "Inspect original parent documents, 30-year encumbrance certificates, and DTCP/RERA sanctioned approval copies on site.",
  },
  {
    icon: "☕",
    title: "Executive Walkthrough & Hospitality",
    desc: "Enjoy refreshing hospitality, scaled 3D layout models, boundary demarcations, and dedicated senior property manager guidance.",
  },
];

/* =========================================
   GUIDELINES / FAQ
========================================= */
const VISIT_GUIDELINES = [
  {
    icon: "⏰",
    title: "Flexible 7-Day Availability",
    desc: "Site visits are conducted Monday through Sunday between 8:30 AM and 6:30 PM, including public holidays.",
  },
  {
    icon: "🛡️",
    title: "Zero Obligation & Zero Pressure",
    desc: "Our on-site visits are purely advisory. Experience the project amenities, connectivity, and development quality with zero commitment required.",
  },
  {
    icon: "⏱️",
    title: "Average Tour Duration",
    desc: "A comprehensive project walkthrough typically takes 45 to 90 minutes, including document review and layout orientation.",
  },
  {
    icon: "📲",
    title: "Instant Chauffeur Coordination",
    desc: "Upon booking, you will receive chauffeur details, vehicle number, and live Google Maps route via WhatsApp.",
  },
];

function SiteVisit() {
  const todayDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    property: "LAX Grand Vista Township (Salem - NH44 Corridor)",
    visitDate: "",
    timeSlot: "Morning: 09:30 AM - 11:30 AM",
    pickupType: "Free Chauffeured Cab Pickup (Doorstep / Landmark)",
    pickupAddress: "",
    guestsCount: "2 People (Couple / Co-buyer)",
    specialNotes: "",
    whatsappOptIn: true,
    dpdpConsent: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.visitDate) {
      alert("Please fill in your Name, Phone Number, and Preferred Date.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      property: "LAX Grand Vista Township (Salem - NH44 Corridor)",
      visitDate: "",
      timeSlot: "Morning: 09:30 AM - 11:30 AM",
      pickupType: "Free Chauffeured Cab Pickup (Doorstep / Landmark)",
      pickupAddress: "",
      guestsCount: "2 People (Couple / Co-buyer)",
      specialNotes: "",
      whatsappOptIn: true,
      dpdpConsent: true,
    });
    setFormSubmitted(false);
  };

  return (
    <main className="site-visit-page">
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="site-visit-hero">
        <div className="site-visit-hero-container">
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
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>COMPLIMENTARY CHAUFFEURED SITE VISITS</span>
          </div>

          <h1>
            Experience Your Future Home.
            <br />
            <span>Schedule a Site Visit.</span>
          </h1>

          <p>
            Nothing compares to standing on the land and experiencing the surrounding tranquility, connectivity, and development quality firsthand. Enjoy complimentary luxury cab transportation, on-site document review, and guided walkthroughs 7 days a week.
          </p>
        </div>
      </section>

      {/* =========================================
          2. HIGHLIGHTS STRIP (3 CARDS)
      ========================================= */}
      <section className="visit-perks-section">
        <div className="visit-perks-container">
          {VISIT_PERKS.map((perk, idx) => (
            <div key={idx} className="visit-perk-card">
              <div className="perk-icon-wrap">{perk.icon}</div>
              <div className="perk-content">
                <h3>{perk.title}</h3>
                <p>{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          3. INTERACTIVE BOOKING FORM & PROCESS
      ========================================= */}
      <section className="visit-form-section">
        <div className="visit-form-container">
          <div className="visit-form-grid">
            {/* LEFT COLUMN: 4-STEP PROCESS & ASSURANCE */}
            <div className="visit-steps-col">
              <span className="section-eyebrow">EFFORTLESS PLANNING</span>
              <h2>How Your Site Visit Works</h2>
              <p className="visit-steps-lead">
                We take care of every detail so you can focus on selecting the perfect property for your family or investment portfolio.
              </p>

              <div className="visit-timeline">
                <div className="timeline-step">
                  <div className="step-number-circle">01</div>
                  <div className="step-info">
                    <h4>Select Your Preferred Project</h4>
                    <p>Choose from our verified DTCP layouts, gated community villas, or high-yield commercial hubs.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="step-number-circle">02</div>
                  <div className="step-info">
                    <h4>Choose Your Date & Pickup Option</h4>
                    <p>Pick a date and convenient time slot. Opt for complimentary doorstep luxury cab pickup or meet on-site.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="step-number-circle">03</div>
                  <div className="step-info">
                    <h4>Instant WhatsApp & SMS Confirmation</h4>
                    <p>Receive your dedicated Relationship Manager contact, chauffeur details, and digital property docket.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="step-number-circle">04</div>
                  <div className="step-info">
                    <h4>Personalized Guided Walkthrough</h4>
                    <p>Explore boundary stones, master layout plans, legal deed verification, and price appreciation estimates.</p>
                  </div>
                </div>
              </div>

              {/* DIRECT WHATSAPP CALLOUT */}
              <div className="visit-hotline-card">
                <div className="hotline-icon">💬</div>
                <div>
                  <strong>Need Immediate Site Visit Assistance?</strong>
                  <span>Direct WhatsApp Hotline: <strong>+91 98765 43210</strong> (8 AM - 9 PM)</span>
                </div>
              </div>

              {/* COMPREHENSIVE SITE VISIT INCLUSIONS & TRUST METRICS CARD */}
              <div className="visit-inclusions-card">
                <div className="inclusions-card-header">
                  <span className="inclusions-badge">COMPLIMENTARY SERVICES</span>
                  <h4>Included In Every Site Visit</h4>
                </div>

                <div className="inclusions-grid-items">
                  <div className="inclusion-item">
                    <div className="inclusion-bullet">✓</div>
                    <div>
                      <strong>Free AC Cab Pickup & Drop</strong>
                      <p>Doorstep transportation from your home, station, or airport.</p>
                    </div>
                  </div>

                  <div className="inclusion-item">
                    <div className="inclusion-bullet">✓</div>
                    <div>
                      <strong>Physical Master Plan & Docket</strong>
                      <p>Sanctioned layout blueprints, corner plot maps & boundary orientation.</p>
                    </div>
                  </div>

                  <div className="inclusion-item">
                    <div className="inclusion-bullet">✓</div>
                    <div>
                      <strong>On-Site Title Document Review</strong>
                      <p>DTCP, CMDA & RERA approval certificates and 30-year parent deeds.</p>
                    </div>
                  </div>

                  <div className="inclusion-item">
                    <div className="inclusion-bullet">✓</div>
                    <div>
                      <strong>Senior Property Manager Tour</strong>
                      <p>Dedicated walkthrough with price appreciation & bank loan guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: BOOKING FORM */}
            <div className="visit-form-card">
              {formSubmitted ? (
                <div className="visit-success-banner">
                  <div className="visit-success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3>Site Visit Scheduled Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. Your site visit for <strong>{formData.property}</strong> has been booked.
                  </p>

                  <div className="booking-summary-box">
                    <div className="summary-row">
                      <span>📅 Date:</span>
                      <strong>{formData.visitDate}</strong>
                    </div>
                    <div className="summary-row">
                      <span>⏰ Time Slot:</span>
                      <strong>{formData.timeSlot}</strong>
                    </div>
                    <div className="summary-row">
                      <span>🚗 Transportation:</span>
                      <strong>{formData.pickupType}</strong>
                    </div>
                    <div className="summary-row">
                      <span>👥 Visitors:</span>
                      <strong>{formData.guestsCount}</strong>
                    </div>
                  </div>

                  <p className="visit-success-note">
                    Our Senior Property Manager will call you at <strong>{formData.phone}</strong> to confirm your pickup address and share vehicle registration details.
                  </p>

                  <div className="visit-success-actions">
                    <a
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(
                        `Hi LAX360, I have scheduled a site visit for "${formData.property}" on ${formData.visitDate} (${formData.timeSlot}). My name is ${formData.fullName} (Phone: ${formData.phone}). Please confirm cab pickup & chauffeur details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-success-whatsapp-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Confirm via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      className="visit-reset-btn"
                      onClick={handleReset}
                    >
                      Schedule Another Site Visit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="site-visit-form">
                  <div className="form-card-header">
                    <h3>Schedule Your Site Visit</h3>
                    <p>Fill in your details below for complimentary cab coordination & document review.</p>
                  </div>

                  {/* NAME & PHONE ROW */}
                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="fullName">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Ramesh Chandran"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="phone">
                        Mobile Number <span className="req-star">*</span>
                      </label>
                      <div className="phone-input-wrap">
                        <span className="phone-prefix">+91</span>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="form-field-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* PROPERTY SELECTION */}
                  <div className="form-field-group">
                    <label htmlFor="property">
                      Select Project / Property <span className="req-star">*</span>
                    </label>
                    <select
                      id="property"
                      name="property"
                      value={formData.property}
                      onChange={handleInputChange}
                      required
                    >
                      {VISIT_LOCATIONS.map((group, gIdx) => (
                        <optgroup key={gIdx} label={group.category}>
                          {group.options.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* DATE & TIME SLOT */}
                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="visitDate">
                        Preferred Date <span className="req-star">*</span>
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        min={todayDate}
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="timeSlot">Preferred Time Slot</label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                      >
                        <option value="Morning: 09:00 AM - 11:30 AM">Morning: 09:00 AM - 11:30 AM</option>
                        <option value="Mid-Day: 11:30 AM - 02:00 PM">Mid-Day: 11:30 AM - 02:00 PM</option>
                        <option value="Afternoon: 02:00 PM - 04:30 PM">Afternoon: 02:00 PM - 04:30 PM</option>
                        <option value="Evening: 04:30 PM - 06:30 PM">Evening: 04:30 PM - 06:30 PM</option>
                        <option value="Flexible / Any Time">Flexible / Any Time</option>
                      </select>
                    </div>
                  </div>

                  {/* TRANSPORTATION & GUESTS COUNT */}
                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="pickupType">Transportation Preference</label>
                      <select
                        id="pickupType"
                        name="pickupType"
                        value={formData.pickupType}
                        onChange={handleInputChange}
                      >
                        <option value="Free Chauffeured Cab Pickup (Doorstep / Landmark)">
                          Free Chauffeured Cab Pickup (Doorstep)
                        </option>
                        <option value="Will Arrive in Own Vehicle (Need GPS Pin & Parking)">
                          Will Arrive in Own Vehicle (Need GPS Pin)
                        </option>
                        <option value="Meet at Nearest LAX360 Experience Center">
                          Meet at Nearest LAX360 Experience Center
                        </option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="guestsCount">Number of Visitors</label>
                      <select
                        id="guestsCount"
                        name="guestsCount"
                        value={formData.guestsCount}
                        onChange={handleInputChange}
                      >
                        <option value="1 Person">1 Person (Individual)</option>
                        <option value="2 People (Couple / Co-buyer)">2 People (Couple / Co-buyer)</option>
                        <option value="3-4 Family Members">3-4 Family Members</option>
                        <option value="5+ Large Family Group">5+ Large Family Group</option>
                      </select>
                    </div>
                  </div>

                  {/* PICKUP ADDRESS (CONDITIONAL / PROMINENT) */}
                  {formData.pickupType.includes("Cab Pickup") && (
                    <div className="form-field-group">
                      <label htmlFor="pickupAddress">
                        Pickup Location / Landmark Address
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        name="pickupAddress"
                        placeholder="e.g. Near New Bus Stand, Salem / Sholinganallur Junction, Chennai"
                        value={formData.pickupAddress}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {/* SPECIAL NOTES */}
                  <div className="form-field-group">
                    <label htmlFor="specialNotes">Special Requests / Requirements (Optional)</label>
                    <textarea
                      id="specialNotes"
                      name="specialNotes"
                      rows="2"
                      placeholder="e.g. Would like to review DTCP approval sketches and corner plot options..."
                      value={formData.specialNotes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {/* WHATSAPP OPT-IN */}
                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      id="whatsappOptIn"
                      name="whatsappOptIn"
                      checked={formData.whatsappOptIn}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="whatsappOptIn">
                      Send driver details, vehicle number, and live Google Maps location on WhatsApp.
                    </label>
                  </div>

                  {/* DPDP CONSENT CHECKBOX */}
                  <div className="form-checkbox-group dpdp-form-consent-wrap">
                    <input
                      type="checkbox"
                      id="siteVisitDpdpConsent"
                      name="dpdpConsent"
                      checked={formData.dpdpConsent}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="siteVisitDpdpConsent">
                      I agree to the processing of my personal data for the purpose described in the{" "}
                      <Link to="/privacy-notice" target="_blank" className="dpdp-link">
                        Privacy Notice
                      </Link>.
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button type="submit" className="form-submit-btn">
                    <span>Schedule Site Visit ➔</span>
                  </button>

                  <p className="form-privacy-note">
                    🔒 100% Free Service • No Obligation • Safe Chauffeured Vehicles
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. WHAT TO EXPECT & GUIDELINES (4 CARDS)
      ========================================= */}
      <section className="visit-guidelines-section">
        <div className="visit-guidelines-container">
          <div className="guidelines-header">
            <span className="section-eyebrow">WHAT TO EXPECT</span>
            <h2>Transparent & Hassle-Free Touring</h2>
            <p>
              Here is everything you need to know about our complimentary site visit assistance.
            </p>
          </div>

          <div className="guidelines-grid">
            {VISIT_GUIDELINES.map((item, idx) => (
              <div key={idx} className="guideline-card">
                <div className="guideline-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
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

export default SiteVisit;
