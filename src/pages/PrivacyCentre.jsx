import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/* =========================================
   PRIVACY REQUEST CARDS DATA (DPDP SPEC)
========================================= */
const PRIVACY_ACTIONS = [
  {
    id: "view",
    title: "View My Data",
    desc: "Request information about your data and a summary of all personal details processed by LAX360.",
    buttonText: "Request",
    badge: "Access Rights",
    icon: "👁️",
  },
  {
    id: "correct",
    title: "Correct My Data",
    desc: "Request correction of inaccurate data, update contact details, or complete outdated information.",
    buttonText: "Request",
    badge: "Data Accuracy",
    icon: "✏️",
  },
  {
    id: "erase",
    title: "Request Erasure",
    desc: "Request deletion where applicable of your personal records and history from our active databases.",
    buttonText: "Request",
    badge: "Right to Forget",
    icon: "🗑️",
  },
  {
    id: "withdraw",
    title: "Withdraw Consent",
    desc: "Withdraw consent where processing is based on consent, such as WhatsApp updates or marketing alerts.",
    buttonText: "Manage",
    badge: "Consent Management",
    icon: "↩️",
  },
  {
    id: "grievance",
    title: "Privacy Grievance",
    desc: "Raise a privacy-related complaint or concern directly to our Data Protection Officer.",
    buttonText: "Submit Request",
    badge: "Grievance Redressal",
    icon: "⚖️",
  },
];

function generateTrackingId(actionId) {
  const code = Math.floor(1000 + Math.random() * 9000);
  return `DPDP-${(actionId || "REQ").toUpperCase()}-2026-${code}`;
}

function PrivacyCentre() {
  const [activeModal, setActiveModal] = useState(null); // 'view' | 'correct' | 'erase' | 'withdraw' | 'grievance' | null
  const [submittedRequest, setSubmittedRequest] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    details: "",
    fieldToCorrect: "",
    withdrawalType: "All Marketing & WhatsApp Communications",
    grievanceType: "General Privacy Query",
  });

  const handleOpenModal = (actionId) => {
    setActiveModal(actionId);
    setSubmittedRequest(null);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSubmittedRequest(null);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      details: "",
      fieldToCorrect: "",
      withdrawalType: "All Marketing & WhatsApp Communications",
      grievanceType: "General Privacy Query",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert("Please provide your Full Name and Mobile Number.");
      return;
    }

    const trackingId = generateTrackingId(activeModal);

    const newRequest = {
      id: trackingId,
      trackingId,
      actionId: activeModal,
      actionTitle: getModalTitle(),
      name: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || "Not provided",
      details: formData.details.trim() || "No additional remarks provided.",
      fieldToCorrect: formData.fieldToCorrect || "",
      withdrawalType: formData.withdrawalType || "",
      grievanceType: formData.grievanceType || "",
      status: "Pending",
      dpoNotes: "",
      resolutionDate: null,
      createdAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      slaHoursLeft: 72,
    };

    try {
      const existing = JSON.parse(localStorage.getItem("lax360_dpdp_requests") || "[]");
      localStorage.setItem("lax360_dpdp_requests", JSON.stringify([newRequest, ...existing]));
    } catch {
      // fallback
    }

    setSubmittedRequest({
      trackingId,
      actionId: activeModal,
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      date: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    });
  };

  const handleOpenCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent("openCookiePreferences"));
  };

  const getModalTitle = () => {
    const match = PRIVACY_ACTIONS.find((a) => a.id === activeModal);
    return match ? match.title : "Privacy Request";
  };

  return (
    <main className="privacy-centre-page">
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="privacy-centre-hero">
        <div className="privacy-centre-hero-container">
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
            <span>DATA PRINCIPAL PORTAL</span>
          </div>

          <h1>
            Privacy Centre
            <br />
            <span>Manage Your Personal Data</span>
          </h1>

          <p>
            Manage your personal data and privacy requests under India&apos;s <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>. Exercise your rights to access, correct, delete data, withdraw consent, or file grievances seamlessly.
          </p>

          <div className="privacy-centre-quick-links">
            <button
              type="button"
              className="quick-cookie-pref-btn"
              onClick={handleOpenCookiePreferences}
            >
              <span>🍪 Manage Cookie Preferences</span>
            </button>
            <Link to="/privacy-notice" className="quick-notice-link">
              <span>Read Full Privacy Notice ➔</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          2. 5 ACTION CARDS GRID (AS PER DPDP SPEC)
      ========================================= */}
      <section className="privacy-actions-section">
        <div className="privacy-actions-container">
          <div className="privacy-actions-header">
            <span className="section-eyebrow">YOUR LEGAL RIGHTS</span>
            <h2>Select a Privacy Action</h2>
            <p>
              Submit an official request to our Data Governance desk. All requests are processed within statutory DPDP timelines.
            </p>
          </div>

          <div className="privacy-cards-grid">
            {PRIVACY_ACTIONS.map((action) => (
              <div key={action.id} className="privacy-action-card">
                <div className="action-card-top">
                  <span className="action-icon">{action.icon}</span>
                  <span className="action-badge">{action.badge}</span>
                </div>

                <h3 className="action-title">{action.title}</h3>
                <p className="action-desc">{action.desc}</p>

                <div className="action-card-footer">
                  <button
                    type="button"
                    className="action-trigger-btn"
                    onClick={() => handleOpenModal(action.id)}
                  >
                    <span>{action.buttonText}</span>
                    <span className="btn-arrow">➔</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. DPO & ASSURANCE STRIP
      ========================================= */}
      <section className="privacy-assurance-section">
        <div className="privacy-assurance-container">
          <div className="assurance-box">
            <div className="assurance-icon-box">🛡️</div>
            <div className="assurance-text">
              <h4>Direct DPO Assistance & Fast Resolution</h4>
              <p>
                All data requests submitted through this Privacy Centre are acknowledged immediately with an official tracking ID and addressed by our Data Protection Officer within <strong>48 to 72 hours</strong>.
              </p>
            </div>
            <div className="assurance-contact">
              <span>Official DPO Desk:</span>
              <strong>privacy@lax360realestate.com</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. INTERACTIVE REQUEST MODAL
      ========================================= */}
      {activeModal && (
        <div className="dpdp-modal-backdrop" onClick={handleCloseModal}>
          <div className="dpdp-modal-container privacy-req-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dpdp-modal-header">
              <div className="dpdp-modal-title-wrap">
                <span className="dpdp-badge">DPDP ACT REQUEST</span>
                <h3>{getModalTitle()}</h3>
                <p>Provide your registered contact information so we can verify your identity.</p>
              </div>
              <button
                type="button"
                className="dpdp-modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Close Modal"
              >
                ✕
              </button>
            </div>

            <div className="dpdp-modal-body">
              {submittedRequest ? (
                <div className="privacy-req-success-view">
                  <div className="success-icon-wrap">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3>Request Successfully Registered!</h3>
                  <p>
                    Your <strong>{getModalTitle()}</strong> request has been officially recorded under DPDP Act compliance guidelines.
                  </p>

                  <div className="tracking-id-card">
                    <span>Official Reference Tracking ID:</span>
                    <strong>{submittedRequest.trackingId}</strong>
                    <small>Registered on {submittedRequest.date} for {submittedRequest.phone}</small>
                  </div>

                  <p className="success-sla-note">
                    A confirmation SMS & Email has been dispatched. Our Data Protection Officer will process your request and share the resolution within 48 to 72 hours.
                  </p>

                  <div className="success-action-btns">
                    <button
                      type="button"
                      className="dpdp-btn dpdp-btn-primary"
                      onClick={handleCloseModal}
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitRequest} className="privacy-req-form">
                  {/* FULL NAME & PHONE */}
                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="reqFullName">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="reqFullName"
                        name="fullName"
                        placeholder="e.g. Anand Sundaram"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="reqPhone">
                        Registered Mobile Number <span className="req-star">*</span>
                      </label>
                      <div className="phone-input-wrap">
                        <span className="phone-prefix">+91</span>
                        <input
                          type="tel"
                          id="reqPhone"
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
                    <label htmlFor="reqEmail">Registered Email Address</label>
                    <input
                      type="email"
                      id="reqEmail"
                      name="email"
                      placeholder="e.g. anand@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* DYNAMIC FIELDS PER ACTION */}
                  {activeModal === "correct" && (
                    <div className="form-field-group">
                      <label htmlFor="fieldToCorrect">Information To Correct / Update</label>
                      <input
                        type="text"
                        id="fieldToCorrect"
                        name="fieldToCorrect"
                        placeholder="e.g. Update Mobile Number from 9876543210 to 9876543211"
                        value={formData.fieldToCorrect}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  {activeModal === "withdraw" && (
                    <div className="form-field-group">
                      <label htmlFor="withdrawalType">Select Consent Scope To Withdraw</label>
                      <select
                        id="withdrawalType"
                        name="withdrawalType"
                        value={formData.withdrawalType}
                        onChange={handleInputChange}
                      >
                        <option value="All Marketing & WhatsApp Communications">
                          All Marketing & WhatsApp Communications
                        </option>
                        <option value="Only Promotional WhatsApp Messages">
                          Only Promotional WhatsApp Messages
                        </option>
                        <option value="Email Brochures & Newsletters">
                          Email Brochures & Newsletters
                        </option>
                        <option value="Complete Data Processing (Close Account/Enquiry)">
                          Complete Data Processing (Close Account/Enquiry)
                        </option>
                      </select>
                    </div>
                  )}

                  {activeModal === "grievance" && (
                    <div className="form-field-group">
                      <label htmlFor="grievanceType">Nature of Privacy Grievance</label>
                      <select
                        id="grievanceType"
                        name="grievanceType"
                        value={formData.grievanceType}
                        onChange={handleInputChange}
                      >
                        <option value="Unwanted Marketing Calls / Messages">
                          Unwanted Marketing Calls / Messages
                        </option>
                        <option value="Delay in Erasure / Correction Request">
                          Delay in Erasure / Correction Request
                        </option>
                        <option value="Unauthorized Third-Party Disclosure Concern">
                          Unauthorized Third-Party Disclosure Concern
                        </option>
                        <option value="Other DPDP Compliance Query">
                          Other DPDP Compliance Query
                        </option>
                      </select>
                    </div>
                  )}

                  {/* DETAILS / NOTES */}
                  <div className="form-field-group">
                    <label htmlFor="reqDetails">Specific Details / Remarks</label>
                    <textarea
                      id="reqDetails"
                      name="details"
                      rows="3"
                      placeholder="Please provide any relevant details, property enquiry date, or specific instructions..."
                      value={formData.details}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="form-privacy-note">
                    🔒 Request verified securely under DPDP Act (2023). Identity verification may be required.
                  </div>

                  <div className="privacy-modal-submit-actions">
                    <button
                      type="button"
                      className="dpdp-btn dpdp-btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="dpdp-btn dpdp-btn-primary"
                    >
                      Submit Privacy Request ➔
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default PrivacyCentre;
