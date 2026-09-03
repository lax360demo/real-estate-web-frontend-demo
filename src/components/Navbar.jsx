import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Projects", path: "/projects" },
    { name: "Locations", path: "/locations" },
    { name: "Contact", path: "/contact" },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
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

        {/* NAVIGATION MENU */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* MOBILE CTA */}
          <Link
            to="/site-visit"
            className="nav-cta mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <span>Schedule a Site Visit</span>
            <span className="cta-arrow">↗</span>
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          to="/site-visit"
          className="nav-cta desktop-cta"
        >
          <span>Schedule Visit</span>
          <span className="cta-arrow">↗</span>
        </Link>

        {/* 3-BAR / 3-DOT HAMBURGER TOGGLE */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;