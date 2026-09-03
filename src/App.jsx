import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";

import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Projects from "./pages/Projects";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import SiteVisit from "./pages/SiteVisit";
import PrivacyNotice from "./pages/PrivacyNotice";
import PrivacyCentre from "./pages/PrivacyCentre";
import TermsConditions from "./pages/TermsConditions";
import AdminPanel from "./pages/AdminPanel";


/* =========================================
        SCROLL TO TOP
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}


/* =========================================
   APP CONTENT (WITH ADMIN ROUTE HANDLING)
========================================= */

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin") || location.pathname.startsWith("/Admin");

  return (
    <>
      <ScrollToTop />

      {/* PUBLIC NAVBAR (HIDDEN ON ADMIN) */}
      {!isAdmin && <Navbar />}

      {/* PUBLIC FLOATING WHATSAPP (HIDDEN ON ADMIN) */}
      {!isAdmin && <FloatingWhatsApp />}

      {/* DPDP COOKIE CONSENT BANNER & MODAL (HIDDEN ON ADMIN) */}
      {!isAdmin && <CookieConsent />}

      {/* ROUTES */}
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/About" element={<About />} />

        <Route path="/properties" element={<Properties />} />
        <Route path="/Properties" element={<Properties />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/Projects" element={<Projects />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/Locations" element={<Locations />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/site-visit" element={<SiteVisit />} />
        <Route path="/Site-visit" element={<SiteVisit />} />
        <Route path="/Site-Visit" element={<SiteVisit />} />
        <Route path="/book-site-visit" element={<SiteVisit />} />

        {/* DPDP COMPLIANCE ROUTES */}
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
        <Route path="/privacy-policy" element={<PrivacyNotice />} />
        <Route path="/privacy" element={<PrivacyNotice />} />

        <Route path="/privacy-centre" element={<PrivacyCentre />} />
        <Route path="/privacy-center" element={<PrivacyCentre />} />

        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/terms-of-service" element={<TermsConditions />} />

        {/* ADMIN PANEL ROUTE */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/Admin" element={<AdminPanel />} />
        <Route path="/admin/privacy" element={<AdminPanel />} />
        <Route path="/admin-panel" element={<AdminPanel />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;