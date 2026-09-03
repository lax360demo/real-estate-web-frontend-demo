import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/* =========================================
   MAP LOCATIONS DATA
========================================= */
const MAP_LOCATIONS = [
  {
    id: "salem",
    name: "Salem Central HQ (Main Office)",
    city: "Salem",
    address: "LAX360 Towers, 4th Floor, Junction Main Road, Five Roads, Salem, Tamil Nadu 636004",
    phone: "+91 98765 43210 / +91 427 2345678",
    hours: "Open Mon - Sun: 8:30 AM - 8:30 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3824364024357!2d78.1360!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf0381665a3d7%3A0x6b4f74d0932467d3!2sFive%20Roads%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Five+Roads+Salem+Tamil+Nadu",
  },
  {
    id: "coimbatore",
    name: "Coimbatore Tech Corridor Experience Center",
    city: "Coimbatore",
    address: "Saravanampatti IT Expressway, Opp. Tidel Park Hub, Coimbatore, Tamil Nadu 641035",
    phone: "+91 98765 43211 / +91 422 9876543",
    hours: "Open Mon - Sun: 9:00 AM - 8:00 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.986877239077!2d76.9934!3d11.0805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f78f895a639b%3A0xa553d07ab7b31175!2sSaravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Saravanampatti+Coimbatore+Tamil+Nadu",
  },
  {
    id: "chennai",
    name: "Chennai OMR Advisory Lounge",
    city: "Chennai",
    address: "Sholinganallur Junction, Rajiv Gandhi IT Expressway (OMR), Chennai, Tamil Nadu 600119",
    phone: "+91 98765 43212 / +91 44 28765432",
    hours: "Open Mon - Sun: 9:00 AM - 8:30 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.756209867909!2d80.2274!3d12.9009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c760a9277d3%3A0xe543df5e9753e8d2!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Sholinganallur+OMR+Chennai+Tamil+Nadu",
  },
  {
    id: "bengaluru",
    name: "Bengaluru Gateway Center",
    city: "Bengaluru",
    address: "Electronic City Phase-1, Hosur Main Highway, Bengaluru, Karnataka 560100",
    phone: "+91 98765 43213 / +91 80 41234567",
    hours: "Open Mon - Sun: 9:00 AM - 8:00 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.986348123984!2d77.6750!3d12.8399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c68bf7a3465%3A0x6e246be695b74681!2sElectronic%20City%20Phase%201%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Electronic+City+Phase+1+Bengaluru+Karnataka",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyType: "DTCP Residential Plots",
    preferredLocation: "Salem Corridor",
    budget: "₹25 Lakhs - ₹50 Lakhs",
    purpose: "Self-Use / Dream Home",
    message: "",
    whatsappOptIn: true,
    dpdpConsent: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeMapIndex, setActiveMapIndex] = useState(0);

  const activeMapLocation = MAP_LOCATIONS[activeMapIndex];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert("Please provide your Name and Phone Number.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      propertyType: "DTCP Residential Plots",
      preferredLocation: "Salem Corridor",
      budget: "₹25 Lakhs - ₹50 Lakhs",
      purpose: "Self-Use / Dream Home",
      message: "",
      whatsappOptIn: true,
    });
    setFormSubmitted(false);
  };

  return (
    <main className="contact-page">
      {/* =========================================
          1. CONTACT HERO SECTION
      ========================================= */}
      <section className="contact-hero">
        <div className="contact-hero-container">
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>GET IN TOUCH WITH US</span>
          </div>

          <h1>
            Let’s Build Your Future.
            <br />
            <span>Connect with Our Experts.</span>
          </h1>

          <p>
            Whether you are searching for prime DTCP plots, bespoke luxury community villas, or high-growth commercial developments across South India, our senior property advisory team is here to guide you with complete legal transparency.
          </p>
        </div>
      </section>

      {/* =========================================
          2. INTERACTIVE CONTACT FORM & ASSURANCE
      ========================================= */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-grid">
            {/* LEFT COLUMN: ASSURANCE & VALUE PROP */}
            <div className="contact-assurance-col">
              <span className="section-eyebrow">PREMIUM ADVISORY</span>
              <h2>Speak Directly With A Senior Property Consultant</h2>
              <p className="assurance-lead">
                Plan your property investment with complete confidence. Fill in your preferences and receive an exhaustive property docket with legal approvals, master layouts, and price projections.
              </p>

              <div className="assurance-features-list">
                <div className="assurance-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <div>
                    <h4>100% Verified Clear Titles</h4>
                    <p>Every layout is legally scrutinized with complete DTCP, CMDA & RERA approvals.</p>
                  </div>
                </div>

                <div className="assurance-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <div>
                    <h4>Free Chauffeured Site Visits</h4>
                    <p>Complimentary luxury cab pickup & drop facility for you and your family.</p>
                  </div>
                </div>

                <div className="assurance-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <div>
                    <h4>Instant Bank Loan Approvals</h4>
                    <p>Pre-approved home loans from SBI, HDFC, ICICI & Axis Bank at lowest rates.</p>
                  </div>
                </div>

                <div className="assurance-feature-item">
                  <div className="feature-check-icon">✓</div>
                  <div>
                    <h4>Zero Brokerage Direct Pricing</h4>
                    <p>100% transparent direct-from-developer deals with zero hidden fees.</p>
                  </div>
                </div>
              </div>

              {/* DEDICATED MANAGER BADGE */}
              <div className="advisory-badge-card">
                <div className="advisor-avatar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <strong>Dedicated Relationship Manager</strong>
                  <span>Personalized guidance from initial enquiry to registry handover.</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ENQUIRY / SITE VISIT FORM */}
            <div className="contact-form-card">
              {formSubmitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-wrap">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3>Thank You, {formData.fullName}!</h3>
                  <p>
                    Your enquiry regarding <strong>{formData.propertyType}</strong> in <strong>{formData.preferredLocation}</strong> has been successfully received.
                  </p>
                  <p className="success-sub">
                    Our Senior Property Advisor will reach out to you at <strong>{formData.phone}</strong> within 30 minutes with project brochures and site visit slots.
                  </p>

                  <div className="success-action-btns">
                    <a
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(
                        `Hi LAX360, I just submitted an enquiry for ${formData.propertyType} in ${formData.preferredLocation} (Budget: ${formData.budget}). My name is ${formData.fullName}. Please send details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="success-whatsapp-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Connect on WhatsApp Now</span>
                    </a>

                    <button
                      type="button"
                      className="form-reset-btn"
                      onClick={handleReset}
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-card-header">
                    <h3>Enquire / Book Free Site Visit</h3>
                    <p>Share your requirements to receive tailored project recommendations.</p>
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
                        placeholder="e.g. Anand Sundaram"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="phone">
                        Phone Number <span className="req-star">*</span>
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
                      placeholder="e.g. anand@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* PROPERTY TYPE & PREFERRED LOCATION */}
                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="propertyType">Interested In</label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                      >
                        <option value="DTCP Residential Plots">DTCP Residential Plots</option>
                        <option value="Luxury Community Villas">Luxury Community Villas</option>
                        <option value="Premium 2 & 3 BHK Condos">Premium 2 & 3 BHK Condos</option>
                        <option value="Commercial Retail & Office Space">Commercial Retail & Office Space</option>
                        <option value="Yercaud Vacation Estate / Farmland">Yercaud Vacation Estate / Farmland</option>
                        <option value="General Property Consultation">General Property Consultation</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="preferredLocation">Preferred Corridor</label>
                      <select
                        id="preferredLocation"
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleInputChange}
                      >
                        <option value="Salem Corridor">Salem Highway Corridor</option>
                        <option value="Coimbatore IT Belt">Coimbatore IT Belt</option>
                        <option value="Chennai OMR / GST">Chennai OMR / GST Belt</option>
                        <option value="Bengaluru Hosur & Sarjapur">Bengaluru Hosur & Sarjapur</option>
                        <option value="Yercaud Foothills">Yercaud Foothills</option>
                        <option value="Trichy Central Hub">Trichy Central Hub</option>
                        <option value="Other Locations">Other Locations</option>
                      </select>
                    </div>
                  </div>

                  {/* BUDGET & PURPOSE */}
                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="budget">Investment Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                        <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                        <option value="₹50 Lakhs - ₹1.0 Crore">₹50 Lakhs - ₹1.0 Crore</option>
                        <option value="₹1.0 Crore - ₹2.5 Crores">₹1.0 Crore - ₹2.5 Crores</option>
                        <option value="₹2.5 Crores+">₹2.5 Crores+</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="purpose">Primary Purpose</label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                      >
                        <option value="Self-Use / Dream Home">Self-Use / Dream Home</option>
                        <option value="Long-Term Investment">Long-Term Investment</option>
                        <option value="Immediate House Construction">Immediate Construction</option>
                        <option value="Commercial Rental Income">Commercial Rental Income</option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE / NOTE */}
                  <div className="form-field-group">
                    <label htmlFor="message">Additional Notes / Preferred Visit Date</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="e.g. Looking for a south-facing corner plot near NH44, free for site visit this Saturday..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {/* WHATSAPP OPT-IN CHECKBOX */}
                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      id="whatsappOptIn"
                      name="whatsappOptIn"
                      checked={formData.whatsappOptIn}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="whatsappOptIn">
                      I agree to receive project brochures, layout maps & site visit coordination on WhatsApp.
                    </label>
                  </div>

                  {/* DPDP CONSENT CHECKBOX */}
                  <div className="form-checkbox-group dpdp-form-consent-wrap">
                    <input
                      type="checkbox"
                      id="contactDpdpConsent"
                      name="dpdpConsent"
                      checked={formData.dpdpConsent}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="contactDpdpConsent">
                      I agree to the processing of my personal data for the purpose described in the{" "}
                      <Link to="/privacy-notice" target="_blank" className="dpdp-link">
                        Privacy Notice
                      </Link>.
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button type="submit" className="form-submit-btn">
                    <span>Submit Enquiry & Book Visit ➔</span>
                  </button>

                  <p className="form-privacy-note">
                    🔒 Your information is 100% confidential. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. INTERACTIVE LOCATION MAP SECTION
      ========================================= */}
      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="map-section-header">
            <span className="section-eyebrow">📍 LOCATION MAP & DIRECTIONS</span>
            <h2>Find Our Prime Experience Centers</h2>
            <p>
              Select any regional office to view its exact interactive Google Map location, address details, and direct GPS navigation routes.
            </p>
          </div>

          {/* CITY MAP TABS */}
          <div className="map-city-tabs">
            {MAP_LOCATIONS.map((loc, idx) => (
              <button
                key={loc.id}
                type="button"
                className={`map-city-tab-btn ${activeMapIndex === idx ? "active" : ""}`}
                onClick={() => setActiveMapIndex(idx)}
              >
                <span className="tab-pin-icon">📍</span>
                <span>{loc.city}</span>
              </button>
            ))}
          </div>

          {/* MAP CARD WRAPPER */}
          <div className="map-view-wrapper">
            <iframe
              title={`Map of ${activeMapLocation.name}`}
              src={activeMapLocation.embedUrl}
              className="map-iframe"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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

export default Contact;