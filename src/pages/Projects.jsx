import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/* =========================================
   PROJECTS DATA
========================================= */
const PROJECTS_DATA = [
  {
    id: "grand-vista",
    name: "LAX Grand Vista Township",
    category: "township",
    categoryLabel: "Residential Township",
    status: "Ready to Construct",
    statusType: "ready",
    location: "Salem - Bengaluru NH44 Highway, Salem",
    image: "/images/project-township.jpg",
    priceStarting: "₹18.5 Lakhs",
    priceUnit: "onwards",
    totalArea: "45 Acres",
    totalUnits: "240 DTCP Plots",
    approvals: "DTCP & RERA Approved",
    possession: "Immediate Registration",
    description:
      "A flagship 45-acre master-planned residential township featuring 40ft wide blacktop roads, a 15,000 sq.ft luxury clubhouse, underground cabling, and landscaped central park with scenic hill views.",
    highlights: [
      "100% Clear Titles with Immediate Registration",
      "Grand Entrance Arch with 24/7 RFID Security",
      "40ft & 30ft Wide Blacktop Tar Roads",
      "15,000 sq.ft Clubhouse & Swimming Pool",
      "Underground Water, Drainage & Electricity Cables",
      "5 Min to Salem-Bengaluru National Highway",
    ],
    gallery: [
      "/images/project-township.jpg",
      "/images/project-villas.jpg",
      "/images/project-meadows.jpg",
    ],
  },
  {
    id: "emerald-villas",
    name: "LAX Emerald Green Villas",
    category: "villas",
    categoryLabel: "Luxury Community Villas",
    status: "Fast Selling",
    statusType: "fast-selling",
    location: "Saravanampatti Tech Corridor, Coimbatore",
    image: "/images/project-villas.jpg",
    priceStarting: "₹88.5 Lakhs",
    priceUnit: "onwards",
    totalArea: "18 Acres",
    totalUnits: "48 Individual Villas",
    approvals: "DTCP & RERA Approved",
    possession: "Dec 2026 Handover",
    description:
      "An ultra-exclusive enclave of 3 & 4 BHK contemporary luxury villas surrounded by manicured private gardens, private double car parking, infinity pool, and smart home automation.",
    highlights: [
      "3 & 4 BHK Custom Architectural Villa Designs",
      "Private Landscaped Lawn & Double Car Port",
      "Smart Home Automation & Solar Power Integration",
      "Private Community Clubhouse & Fitness Studio",
      "3-Tier Gated Security with CCTV Surveillance",
      "Proximity to Top IT Parks & International Schools",
    ],
    gallery: [
      "/images/project-villas.jpg",
      "/images/project-township.jpg",
      "/images/property-villa.jpg",
    ],
  },
  {
    id: "pinnacle-heights",
    name: "LAX Pinnacle Heights",
    category: "condos",
    categoryLabel: "Premium 2 & 3 BHK Condos",
    status: "Under Construction",
    statusType: "ongoing",
    location: "OMR IT Highway Corridor, Chennai",
    image: "/images/project-condos.jpg",
    priceStarting: "₹62.0 Lakhs",
    priceUnit: "onwards",
    totalArea: "6.5 Acres",
    totalUnits: "180 Luxury Units",
    approvals: "CMDA & RERA Approved",
    possession: "Mid 2027 Handover",
    description:
      "High-rise luxury living with panoramic skyline views, 80% open landscaped green spaces, rooftop sky lounge, indoor badminton court, and electric vehicle charging bays for modern urban families.",
    highlights: [
      "Vastu-Compliant 2 & 3 BHK Premium Layouts",
      "Rooftop Sky Lounge & Infinity Edge Pool",
      "80% Open Lush Landscaped Greenery",
      "Dedicated EV Charging Points & Multi-Level Parking",
      "Co-Working Lounge & Children's Play Zone",
      "Direct Connectivity to OMR Tech Corridors",
    ],
    gallery: [
      "/images/project-condos.jpg",
      "/images/property-apartment.jpg",
      "/images/project-villas.jpg",
    ],
  },
  {
    id: "boulevard-commercial",
    name: "LAX Boulevard Commercial Plaza",
    category: "commercial",
    categoryLabel: "Commercial Retail & Office Hub",
    status: "Newly Launched",
    statusType: "new",
    location: "Main Ring Road Junction, Salem",
    image: "/images/project-commercial.jpg",
    priceStarting: "₹45.0 Lakhs",
    priceUnit: "onwards",
    totalArea: "4.2 Acres",
    totalUnits: "36 Commercial Spaces",
    approvals: "DTCP & Commercial RERA",
    possession: "Q1 2027 Handover",
    description:
      "A high-footfall Grade-A commercial arcade offering premium retail showroom frontage, modern corporate office suites, ample customer surface parking, and 24/7 central air conditioning infrastructure.",
    highlights: [
      "120ft High-Traffic Highway Frontage",
      "Grade-A Retail Showrooms & Office Floors",
      "Ample 200+ Car Customer Parking Space",
      "High-Speed Passenger & Service Elevators",
      "100% Power Backup & Integrated BMS Facility",
      "High Rental Yield & Rapid Capital Appreciation",
    ],
    gallery: [
      "/images/project-commercial.jpg",
      "/images/property-commercial.jpg",
      "/images/project-township.jpg",
    ],
  },
  {
    id: "serene-meadows",
    name: "LAX Serene Meadows Layout",
    category: "township",
    categoryLabel: "Residential Plots Layout",
    status: "Ready to Construct",
    statusType: "ready",
    location: "Yercaud Foothills Corridor, Salem",
    image: "/images/project-meadows.jpg",
    priceStarting: "₹14.8 Lakhs",
    priceUnit: "onwards",
    totalArea: "22 Acres",
    totalUnits: "160 Vetted Plots",
    approvals: "DTCP & RERA Approved",
    possession: "Immediate Registry",
    description:
      "Scenic foothills layout curated for dream vacation homes and high-growth land investments, fully developed with perimeter compound wall, street lighting, sweet ground water, and avenue trees.",
    highlights: [
      "100% Legally Clear DTCP Approved Titles",
      "Pristine Hill-View Living with Fresh Air",
      "Blacktop Roads with Rainwater Harvesting",
      "Perimeter Compound Wall with Security Cabin",
      "Overhead Water Tank with Dedicated Line to Plots",
      "Ready for Immediate House Construction",
    ],
    gallery: [
      "/images/project-meadows.jpg",
      "/images/project-township.jpg",
      "/images/property-plot.jpg",
    ],
  },
  {
    id: "royal-palms",
    name: "LAX Royal Palms Gated Community",
    category: "villas",
    categoryLabel: "Gated Community Enclave",
    status: "Completed",
    statusType: "completed",
    location: "Avinashi Road Express Corridor, Coimbatore",
    image: "/images/project-boulevard.jpg",
    priceStarting: "₹75.0 Lakhs",
    priceUnit: "onwards",
    totalArea: "15 Acres",
    totalUnits: "60 Prime Homes",
    approvals: "DTCP & RERA Certified",
    possession: "Ready to Move In",
    description:
      "A fully delivered landmark gated community of luxury homes with 100+ thriving families, active sports club, clubhouse, round-the-clock facility management, and zero maintenance backlog.",
    highlights: [
      "Completed & Ready to Move In Gated Community",
      "100+ Happy Families Currently Residing",
      "Active Clubhouse, Badminton & Basketball Courts",
      "24/7 Maintained Landscape Parks & Walking Track",
      "Direct Access to Avinashi Highway & Airport",
      "Bank Loan Approved by SBI, HDFC & ICICI",
    ],
    gallery: [
      "/images/project-boulevard.jpg",
      "/images/project-villas.jpg",
      "/images/about-modern-villa.jpg",
    ],
  },
];

/* =========================================
   CATEGORY FILTER LIST
========================================= */
const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "township", label: "Residential Townships" },
  { key: "villas", label: "Luxury Villas" },
  { key: "condos", label: "Premium Condos" },
  { key: "commercial", label: "Commercial & Retail" },
];

/* =========================================
   STATUS FILTER LIST
========================================= */
const STATUS_FILTERS = [
  { key: "all", label: "All Status" },
  { key: "Ready to Construct", label: "Ready to Build" },
  { key: "Fast Selling", label: "Fast Selling" },
  { key: "Under Construction", label: "Ongoing" },
  { key: "Newly Launched", label: "New Launch" },
  { key: "Completed", label: "Completed" },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* Filter Logic */
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    // Category match
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;

    // Status match
    const matchesStatus =
      activeStatus === "all" || project.status === activeStatus;

    // Search query match
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      project.name.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.categoryLabel.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query);

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <main className="projects-page">
      {/* =========================================
          1. PROJECTS HERO SECTION
      ========================================= */}
      <section className="projects-hero">
        <div className="projects-hero-container">
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
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>MASTER-PLANNED DEVELOPMENTS</span>
          </div>
        
          <h1>
            Landmark Projects.
            <br />
            <span>Crafted For Generations.</span>
          </h1>

          <p>
            Explore our flagship DTCP & RERA approved residential townships, gated luxury villas, and prime commercial developments situated across South India’s highest-appreciation growth corridors.
          </p>

          {/* SEARCH & FILTER BAR */}
          <div className="projects-search-bar">
            <div className="projects-search-input-group">
              <span className="search-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search by project name, location, or landmark"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* STATUS SELECT DROPDOWN */}
            <div className="projects-select-group">
              <select
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value)}
              >
                {STATUS_FILTERS.map((st) => (
                  <option key={st.key} value={st.key}>
                    {st.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CATEGORY TABS BAR
      ========================================= */}
      <section className="projects-tabs-section">
        <div className="projects-tabs-container">
          <div className="projects-tabs-scroll">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`project-tab-btn ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="projects-count-pill">
            <span>Showing <strong>{filteredProjects.length}</strong> Landmark Projects</span>
          </div>
        </div>
      </section>

      {/* =========================================
          3. PROJECTS GRID SECTION
      ========================================= */}
      <section className="projects-catalog-section">
        <div className="projects-catalog-container">
          {filteredProjects.length === 0 ? (
            <div className="projects-empty-state">
              <div className="empty-state-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3>No matching projects found</h3>
              <p>Try resetting your search query or switching to another category tab.</p>
              <button
                type="button"
                className="reset-filters-btn"
                onClick={() => {
                  setActiveCategory("all");
                  setActiveStatus("all");
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  {/* CARD IMAGE & STATUS BADGE */}
                  <div className="project-card-image-wrap">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                    />
                    <div className="project-card-overlay"></div>

                    {/* STATUS BADGE */}
                    <span className={`project-status-badge status-${project.statusType}`}>
                      {project.status}
                    </span>

                    {/* CATEGORY TAG */}
                    <span className="project-category-tag">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="project-card-body">
                    {/* TITLE & LOCATION */}
                    <div className="project-card-header">
                      <h3 className="project-title">{project.name}</h3>
                      <div className="project-location">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="project-description">{project.description}</p>

                    {/* METRIC PILLS */}
                    <div className="project-specs-grid">
                      <div className="project-spec-item">
                        <span className="spec-label">Land Area</span>
                        <strong className="spec-value">{project.totalArea}</strong>
                      </div>
                      <div className="project-spec-item">
                        <span className="spec-label">Scale</span>
                        <strong className="spec-value">{project.totalUnits}</strong>
                      </div>
                      <div className="project-spec-item">
                        <span className="spec-label">Clearance</span>
                        <strong className="spec-value spec-badge">{project.approvals}</strong>
                      </div>
                    </div>

                    {/* CARD FOOTER: PRICE & EXPLORE BUTTON */}
                    <div className="project-card-footer">
                      <div className="project-price-box">
                        <span className="price-label">Starting From</span>
                        <div className="price-val">
                          <strong>{project.priceStarting}</strong>
                          <small>{project.priceUnit}</small>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="project-explore-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        Explore Project ➔
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          4. WHY BUY IN OUR DEVELOPMENTS BANNER
      ========================================= */}
      <section className="projects-trust-banner">
        <div className="projects-trust-container">
          <div className="trust-banner-content">
            <span className="section-eyebrow">THE LAX360 ADVANTAGE</span>
            <h2>Why Investors & Families Choose Our Projects</h2>
            <p>
              Every LAX360 project is backed by comprehensive 30-year legal vetting, direct highway connectivity, master-planned infrastructure, and guaranteed on-time delivery.
            </p>
          </div>

          <div className="trust-features-grid">
            <div className="trust-feature-card">
              <div className="trust-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4>100% Clear Titles</h4>
              <p>DTCP & RERA approved projects with transparent paperwork and zero litigation risk.</p>
            </div>

            <div className="trust-feature-card">
              <div className="trust-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4>High Capital Growth</h4>
              <p>Strategically situated on high-speed industrial and IT growth corridors with rapid appreciation.</p>
            </div>

            <div className="trust-feature-card">
              <div className="trust-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h4>Turnkey Infrastructure</h4>
              <p>40ft tar roads, street lighting, solar security, clubhouses, and green park spaces fully built.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. INTERACTIVE EXPLORE PROJECT MODAL
      ========================================= */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="project-modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* MODAL HERO IMAGE */}
            <div className="project-modal-image-wrap">
              <img src={selectedProject.image} alt={selectedProject.name} />
              <div className="modal-image-overlay"></div>
              <div className="modal-header-badges">
                <span className={`project-status-badge status-${selectedProject.statusType}`}>
                  {selectedProject.status}
                </span>
                <span className="project-category-tag">
                  {selectedProject.categoryLabel}
                </span>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="project-modal-body">
              <div className="modal-title-row">
                <div>
                  <h2>{selectedProject.name}</h2>
                  <div className="modal-location">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <div className="modal-price-tag">
                  <span className="price-subtitle">Starting Price</span>
                  <strong>{selectedProject.priceStarting}</strong>
                  <small>{selectedProject.priceUnit}</small>
                </div>
              </div>

              {/* OVERVIEW */}
              <div className="modal-section">
                <h3>Project Overview</h3>
                <p className="modal-desc">{selectedProject.description}</p>
              </div>

              {/* QUICK SPECS TABLE */}
              <div className="modal-specs-row">
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Total Land Area</span>
                  <strong>{selectedProject.totalArea}</strong>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Total Scale / Inventory</span>
                  <strong>{selectedProject.totalUnits}</strong>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Approval Authority</span>
                  <strong className="text-highlight">{selectedProject.approvals}</strong>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Possession Status</span>
                  <strong>{selectedProject.possession}</strong>
                </div>
              </div>

              {/* KEY HIGHLIGHTS & AMENITIES */}
              <div className="modal-section">
                <h3>Key Master-Plan Features & Amenities</h3>
                <div className="modal-highlights-grid">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="modal-highlight-item">
                      <div className="highlight-check-icon">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MODAL ACTION BUTTONS */}
              {selectedProject.status !== "Completed" && (
                <div className="modal-actions-footer">
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hello LAX360, I am interested in exploring ${selectedProject.name} located at ${selectedProject.location}. Please share the brochure and schedule a site visit.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-whatsapp-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>

                  {selectedProject.status !== "Ready to Construct" && (
                    <Link
                      to="/contact"
                      className="modal-contact-btn"
                      onClick={() => setSelectedProject(null)}
                    >
                      Request Detailed Brochure
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />
    </main>
  );
}

export default Projects;
