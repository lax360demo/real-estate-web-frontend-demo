import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState(() => {
    try {
      const savedConsent = localStorage.getItem("lax360_dpdp_cookie_consent");
      if (savedConsent) {
        const parsed = JSON.parse(savedConsent);
        return {
          essential: true,
          analytics: parsed.analytics !== undefined ? parsed.analytics : true,
          marketing: parsed.marketing !== undefined ? parsed.marketing : true,
        };
      }
    } catch {
      // fallback
    }
    return {
      essential: true,
      analytics: true,
      marketing: true,
    };
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("lax360_dpdp_cookie_consent");
    if (!savedConsent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for global event to open cookie preferences from footer or anywhere
  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowModal(true);
    };
    window.addEventListener("openCookiePreferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("openCookiePreferences", handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem("lax360_dpdp_cookie_consent", JSON.stringify(consent));
    setPreferences({ essential: true, analytics: true, marketing: true });
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("lax360_dpdp_cookie_consent", JSON.stringify(consent));
    setShowBanner(false);
    setShowModal(false);
  };

  const togglePreference = (key) => {
    if (key === "essential") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* FULL-WIDTH COOKIE BANNER (OCCUPIES FULL LEFT, RIGHT & BOTTOM) */}
      {showBanner && !showModal && (
        <div className="dpdp-cookie-banner" role="region" aria-label="Cookie and Privacy Notice">
          <div className="dpdp-banner-container">
            <div className="dpdp-banner-content">
              <div className="dpdp-banner-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"></path>
                  <path d="M8.5 8.5v.01"></path>
                  <path d="M7.5 13.5v.01"></path>
                  <path d="M11.5 16.5v.01"></path>
                  <path d="M16.5 12.5v.01"></path>
                </svg>
              </div>
              <div className="dpdp-banner-text">
                <strong>Your Privacy</strong>
                <p>We use cookies and similar technologies.</p>
              </div>
            </div>

            <div className="dpdp-banner-actions">
              <button
                type="button"
                className="dpdp-btn dpdp-btn-secondary"
                onClick={() => setShowModal(true)}
              >
                Manage Preferences
              </button>
              <button
                type="button"
                className="dpdp-btn dpdp-btn-primary"
                onClick={handleAcceptAll}
              >
                Accept
              </button>
              <button
                type="button"
                className="dpdp-banner-close-btn"
                onClick={() => setShowBanner(false)}
                aria-label="Close privacy notice"
                title="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COOKIE PREFERENCES MODAL */}
      {showModal && (
        <div className="dpdp-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="dpdp-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="dpdp-modal-header">
              <div className="dpdp-modal-title-wrap">
                <span className="dpdp-badge">DPDP COMPLIANCE</span>
                <h3>Cookie Preferences</h3>
                <p>Manage how we use cookies and personal data on this website.</p>
              </div>
              <button
                type="button"
                className="dpdp-modal-close-btn"
                onClick={() => setShowModal(false)}
                aria-label="Close Cookie Preferences"
              >
                ✕
              </button>
            </div>

            <div className="dpdp-modal-body">
              {/* ESSENTIAL COOKIES */}
              <div className="cookie-pref-item">
                <div className="cookie-pref-info">
                  <div className="cookie-pref-title-row">
                    <strong>Essential Cookies</strong>
                    <span className="always-active-tag">Always Active</span>
                  </div>
                  <p>
                    Required for basic site security, session maintenance, secure forms, and core navigation. These cannot be disabled.
                  </p>
                </div>
                <div className="cookie-pref-toggle">
                  <div className="toggle-switch disabled active">
                    <span className="toggle-slider"></span>
                  </div>
                </div>
              </div>

              {/* ANALYTICS COOKIES */}
              <div className="cookie-pref-item">
                <div className="cookie-pref-info">
                  <div className="cookie-pref-title-row">
                    <strong>Analytics & Performance Cookies</strong>
                    <span className="toggle-status-tag">
                      {preferences.analytics ? "Active" : "Disabled"}
                    </span>
                  </div>
                  <p>
                    Help us analyze website traffic, visitor interaction patterns, and optimize user experience across our real-estate corridors.
                  </p>
                </div>
                <div className="cookie-pref-toggle">
                  <button
                    type="button"
                    className={`toggle-switch ${preferences.analytics ? "active" : ""}`}
                    onClick={() => togglePreference("analytics")}
                    aria-label="Toggle Analytics Cookies"
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>

              {/* MARKETING COOKIES */}
              <div className="cookie-pref-item">
                <div className="cookie-pref-info">
                  <div className="cookie-pref-title-row">
                    <strong>Marketing & Personalization Cookies</strong>
                    <span className="toggle-status-tag">
                      {preferences.marketing ? "Active" : "Disabled"}
                    </span>
                  </div>
                  <p>
                    Enable personalized property suggestions, location highlights, and tailored project updates relevant to your investment preferences.
                  </p>
                </div>
                <div className="cookie-pref-toggle">
                  <button
                    type="button"
                    className={`toggle-switch ${preferences.marketing ? "active" : ""}`}
                    onClick={() => togglePreference("marketing")}
                    aria-label="Toggle Marketing Cookies"
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="dpdp-modal-footer">
              <div className="dpdp-modal-footer-info">
                <Link to="/privacy-centre" onClick={() => setShowModal(false)}>
                  Visit Privacy Centre ➔
                </Link>
              </div>
              <div className="dpdp-modal-footer-btns">
                <button
                  type="button"
                  className="dpdp-btn dpdp-btn-secondary"
                  onClick={handleAcceptAll}
                >
                  Accept All
                </button>
                <button
                  type="button"
                  className="dpdp-btn dpdp-btn-primary"
                  onClick={handleSavePreferences}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsent;
