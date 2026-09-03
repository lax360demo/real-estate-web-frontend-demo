import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

/* =========================================
   LOCATIONS DATA
========================================= */
const LOCATIONS_DATA = [
  {
    id: "salem",
    name: "Salem Highway & Growth Corridor",
    city: "Salem",
    region: "Tamil Nadu",
    tag: "NH-44 Mega Corridor",
    image: "/images/location-salem.jpg",
    description:
      "A powerhouse manufacturing and logistics hub connecting Bengaluru, Coimbatore, and Chennai. Prime gated layouts with breathtaking Yercaud hill vistas and high capital appreciation.",
    advantages: [
      "Direct 6-Lane NH44 Bengaluru-Salem Express Highway",
      "5 Min to Salem Airport & Upcoming Defense Corridor",
      "Proximity to Top Medical Colleges & Engineering Institutes",
      "18% - 24% Consistent Annual Land Value Appreciation",
      "100% DTCP & RERA Clear Title Residential Plots",
    ],
    stats: {
      activeProjects: "18+ Projects",
      propertiesCount: "350+ Properties",
      priceRange: "₹14.8L - ₹85L",
      appreciation: "22% / Year",
    },
    popularAreas: ["NH44 Highway", "Yercaud Foothills", "Seelanaickenpatti", "Kandampatty", "Mamangam"],
  },
  {
    id: "coimbatore",
    name: "Coimbatore Saravanampatti IT Belt",
    city: "Coimbatore",
    region: "Tamil Nadu",
    tag: "Manchester & Tech Hub",
    image: "/images/location-coimbatore.jpg",
    description:
      "South India's premier industrial and technology epicentre. Thriving with Tier-1 IT SEZs, textile conglomerates, pleasant climate, and luxury gated community villas.",
    advantages: [
      "Direct Connectivity to Saravanampatti IT SEZ & Tidel Park",
      "10 Min to Coimbatore International Airport & Avinashi Road",
      "Hub of World-Class Multi-Speciality Healthcare Centers",
      "High Rental Demand from IT Professionals & NRI Investors",
      "Luxury Contemporary 3 & 4 BHK Gated Community Villas",
    ],
    stats: {
      activeProjects: "14+ Projects",
      propertiesCount: "220+ Properties",
      priceRange: "₹45L - ₹2.2Cr",
      appreciation: "18% / Year",
    },
    popularAreas: ["Saravanampatti", "Avinashi Road", "Kalapatti", "Kovaipudur", "Vadavalli"],
  },
  {
    id: "chennai",
    name: "Chennai OMR & GST Tech Expressway",
    city: "Chennai",
    region: "Tamil Nadu",
    tag: "Metro & Coastal Metropolis",
    image: "/images/location-chennai.jpg",
    description:
      "The bustling economic capital of Tamil Nadu featuring state-of-the-art Metro Rail connectivity, Fortune 500 tech campuses, international schools, and premier high-rise condos.",
    advantages: [
      "Direct Access to Old Mahabalipuram Road (OMR) IT Expressway",
      "Phase-2 Chennai Metro Station within Walking Distance",
      "Surrounded by Global Tech Parks & World-Class Malls",
      "High Liquidity and Guaranteed Rental Yield Returns",
      "CMDA & RERA Approved Luxury High-Rise Condominiums",
    ],
    stats: {
      activeProjects: "10+ Projects",
      propertiesCount: "180+ Properties",
      priceRange: "₹55L - ₹3.5Cr",
      appreciation: "16% / Year",
    },
    popularAreas: ["OMR IT Corridor", "Sholinganallur", "Siruseri SIPCOT", "Medavakkam", "GST Road"],
  },
  {
    id: "bengaluru",
    name: "Bengaluru Hosur & Sarjapur Belt",
    city: "Bengaluru",
    region: "Karnataka",
    tag: "Silicon Valley Gateway",
    image: "/images/location-bengaluru.jpg",
    description:
      "The rapid growth corridor bridging Bengaluru's Electronic City tech cluster with booming industrial hubs. High-demand residential villas and secure land investments.",
    advantages: [
      "Quick Access to Electronic City Phase 1 & 2 Tech Hubs",
      "Upcoming Satellite Town Ring Road (STRR) Connectivity",
      "Hub of Top International Schools & Golf Clubs",
      "Massive Industrial Influx and High Infrastructure Spending",
      "Premium Villa Plots with Turnkey Gated Amenities",
    ],
    stats: {
      activeProjects: "8+ Projects",
      propertiesCount: "140+ Properties",
      priceRange: "₹38L - ₹1.8Cr",
      appreciation: "20% / Year",
    },
    popularAreas: ["Hosur Road", "Electronic City Gateway", "Sarjapur Road", "Attibele", "Chandapura"],
  },
  {
    id: "yercaud",
    name: "Yercaud Foothills & Valley Estates",
    city: "Yercaud",
    region: "Tamil Nadu",
    tag: "Scenic Hill Living & Eco Retreats",
    image: "/images/location-yercaud.jpg",
    description:
      "Pristine mountain-view developments offering clean mountain air, serene climate, organic orchard farm plots, and luxury weekend vacation home layouts.",
    advantages: [
      "Panoramic Views of Shevaroy Mountain Ranges & Greenery",
      "Cool Microclimate (5-8°C Cooler than Surrounding Plains)",
      "Zero Pollution, Fresh Groundwater & Lush Plantation Buffer",
      "Ideal for Vacation Villas, Eco-Resorts & Holiday Retreats",
      "100% Clear Title Plots with Perimeter Compound & Security",
    ],
    stats: {
      activeProjects: "6+ Projects",
      propertiesCount: "90+ Properties",
      priceRange: "₹14.5L - ₹75L",
      appreciation: "25% / Year",
    },
    popularAreas: ["Foothills Corridor", "Adivaram Ring Road", "Kuppanur Valley", "Nagaramalai Base", "Kombanur"],
  },
  {
    id: "trichy",
    name: "Trichy Central TN Industrial Belt",
    city: "Trichy",
    region: "Tamil Nadu",
    tag: "Central Logistics Junction",
    image: "/images/location-trichy.jpg",
    description:
      "The geographic heart of Tamil Nadu with international airport connectivity, prestigious educational institutes like NIT/IIM, and fast-growing suburban residential layouts.",
    advantages: [
      "Direct Connectivity to Trichy International Airport",
      "Proximity to NIT Trichy, BHEL & New IT Park Hubs",
      "Central Node Connecting North, South & Coastal Tamil Nadu",
      "Affordable Entry Prices with Rapid Multi-Year Growth",
      "DTCP Approved Clear Title Plots Ready for Construction",
    ],
    stats: {
      activeProjects: "5+ Projects",
      propertiesCount: "85+ Properties",
      priceRange: "₹12.0L - ₹58L",
      appreciation: "17% / Year",
    },
    popularAreas: ["Airport Ring Road", "Thuvakudi Industrial Hub", "Panjappur Bus Terminal", "Samayapuram", "KK Nagar"],
  },
];

/* =========================================
   REGION FILTER LIST
========================================= */
const REGION_FILTERS = [
  { key: "all", label: "All Locations" },
  { key: "Tamil Nadu", label: "Tamil Nadu" },
  { key: "Karnataka", label: "Karnataka" },
];

function Locations() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocationModal, setSelectedLocationModal] = useState(null);
  const navigate = useNavigate();

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedLocationModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLocationModal]);

  /* Filter Logic */
  const filteredLocations = LOCATIONS_DATA.filter((loc) => {
    // Region match
    const matchesRegion =
      selectedRegion === "all" || loc.region === selectedRegion;

    // Search query match
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      loc.name.toLowerCase().includes(query) ||
      loc.city.toLowerCase().includes(query) ||
      loc.tag.toLowerCase().includes(query) ||
      loc.description.toLowerCase().includes(query) ||
      loc.popularAreas.some((area) => area.toLowerCase().includes(query));

    return matchesRegion && matchesSearch;
  });

  return (
    <main className="locations-page">
      {/* =========================================
          1. LOCATIONS HERO SECTION
      ========================================= */}
      <section className="locations-hero">
        <div className="locations-hero-container">
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
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>PRIME GROWTH CORRIDORS</span>
          </div>

          <h1>
            Strategic Locations.
            <br />
            <span>Unmatched Growth Potential.</span>
          </h1>

          <p>
            Explore high-growth residential corridors and commercial hubs across South India—handpicked for express highway connectivity, industrial expansion, and rapid capital appreciation.
          </p>

          {/* SEARCH & REGION FILTER BAR */}
          <div className="locations-search-bar">
            <div className="locations-search-input-group">
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
                placeholder="Search by city "
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

            {/* REGION FILTER DROPDOWN */}
            <div className="locations-select-group">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {REGION_FILTERS.map((rf) => (
                  <option key={rf.key} value={rf.key}>
                    {rf.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CORRIDOR HIGHLIGHTS QUICK STRIP
      ========================================= */}
      <section className="corridors-strip-section">
        <div className="corridors-strip-container">
          <div className="corridor-badge-item">
            <span className="corridor-dot">◈</span>
            <span><strong>NH-44</strong> Bengaluru-Salem Expressway</span>
          </div>
          <div className="corridor-badge-item">
            <span className="corridor-dot">◈</span>
            <span><strong>Avinashi Road</strong> Coimbatore IT Hub</span>
          </div>
          <div className="corridor-badge-item">
            <span className="corridor-dot">◈</span>
            <span><strong>OMR</strong> Chennai Tech Corridor</span>
          </div>
          <div className="corridor-badge-item">
            <span className="corridor-dot">◈</span>
            <span><strong>Hosur-Electronic City</strong> Bangalore Gateway</span>
          </div>
        </div>
      </section>

      {/* =========================================
          3. LOCATIONS CATALOG GRID
      ========================================= */}
      <section className="locations-catalog-section">
        <div className="locations-catalog-container">
          <div className="locations-header-row">
            <div>
              <span className="section-eyebrow">EXPLORE HUBS</span>
              <h2>Featured Investment Destinations</h2>
            </div>
            <div className="locations-count-pill">
              <span>Showing <strong>{filteredLocations.length}</strong> Prime Corridors</span>
            </div>
          </div>

          {filteredLocations.length === 0 ? (
            <div className="locations-empty-state">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>No matching locations found</h3>
              <p>Try resetting your search query or choosing another region.</p>
              <button
                type="button"
                className="reset-filters-btn"
                onClick={() => {
                  setSelectedRegion("all");
                  setSearchQuery("");
                }}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="locations-grid">
              {filteredLocations.map((loc) => (
                <article key={loc.id} className="location-card">
                  {/* CARD IMAGE & BADGES */}
                  <div className="location-card-image-wrap">
                    <img src={loc.image} alt={loc.name} loading="lazy" />
                    <div className="location-card-overlay"></div>

                    {/* TOP BADGE */}
                    <span className="location-region-badge">{loc.region}</span>

                    {/* TAG BADGE */}
                    <span className="location-tag-badge">{loc.tag}</span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="location-card-body">
                    <div className="location-card-header">
                      <h3 className="location-title">{loc.name}</h3>
                      <div className="location-city-pin">
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
                        <span>{loc.city}, {loc.region}</span>
                      </div>
                    </div>

                    <p className="location-desc">{loc.description}</p>

                    {/* KEY ADVANTAGES LIST */}
                    <div className="location-advantages-box">
                      <span className="advantages-title">Key Advantages:</span>
                      <ul className="location-advantages-list">
                        {loc.advantages.slice(0, 3).map((adv, idx) => (
                          <li key={idx}>
                            <span className="adv-check">✓</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* STATS METRICS GRID */}
                    <div className="location-stats-grid">
                      <div className="location-stat-item">
                        <span className="stat-label">Active Projects</span>
                        <strong className="stat-value">{loc.stats.activeProjects}</strong>
                      </div>
                      <div className="location-stat-item">
                        <span className="stat-label">Price Range</span>
                        <strong className="stat-value">{loc.stats.priceRange}</strong>
                      </div>
                      <div className="location-stat-item">
                        <span className="stat-label">Appreciation</span>
                        <strong className="stat-value text-highlight">{loc.stats.appreciation}</strong>
                      </div>
                    </div>

                    {/* POPULAR LOCALITIES PILLS */}
                    <div className="location-localities-wrap">
                      <span className="localities-label">Key Hubs:</span>
                      <div className="localities-chips">
                        {loc.popularAreas.slice(0, 4).map((area, i) => (
                          <span key={i} className="locality-chip">{area}</span>
                        ))}
                      </div>
                    </div>

                    {/* CARD FOOTER ACTIONS */}
                    <div className="location-card-footer">
                      <button
                        type="button"
                        className="location-view-props-btn"
                        onClick={() => navigate("/properties")}
                      >
                        Explore Properties ➔
                      </button>

                      <button
                        type="button"
                        className="location-details-btn"
                        onClick={() => setSelectedLocationModal(loc)}
                      >
                        Location Insights
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
          4. WHY BUY IN THESE CORRIDORS BANNER
      ========================================= */}
      <section className="locations-advantage-banner">
        <div className="locations-advantage-container">
          <div className="advantage-content">
            <span className="section-eyebrow">SMART REAL ESTATE INVESTMENT</span>
            <h2>Why Invest in Our Selected Corridors?</h2>
            <p>
              LAX360 conducts multi-phase technical, legal, and urban planning feasibility studies before launching any development—ensuring every property benefits from massive infrastructure expansion and strong capital safety.
            </p>
          </div>

          <div className="advantage-cards-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h4>Direct Highway & Metro Access</h4>
              <p>All land parcels sit directly along high-speed corridors with seamless intercity and airport transit.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4>100% Clear Titles & Approvals</h4>
              <p>Zero legal disputes. Pristine DTCP, CMDA, and RERA vetted titles ready for instant registry.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4>High Guaranteed Appreciation</h4>
              <p>Benefit from 18% to 25% annual land value escalation driven by tech corridors and industrial expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. INTERACTIVE LOCATION DETAILS MODAL
      ========================================= */}
      {selectedLocationModal && (
        <div className="location-modal-backdrop" onClick={() => setSelectedLocationModal(null)}>
          <div
            className="location-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="location-modal-close-btn"
              onClick={() => setSelectedLocationModal(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* MODAL HERO IMAGE */}
            <div className="location-modal-image-wrap">
              <img src={selectedLocationModal.image} alt={selectedLocationModal.name} />
              <div className="modal-image-overlay"></div>
              <div className="modal-header-badges">
                <span className="location-region-badge">
                  {selectedLocationModal.region}
                </span>
                <span className="location-tag-badge">
                  {selectedLocationModal.tag}
                </span>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="location-modal-body">
              <div className="modal-title-row">
                <div>
                  <h2>{selectedLocationModal.name}</h2>
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
                    <span>{selectedLocationModal.city}, {selectedLocationModal.region}</span>
                  </div>
                </div>

                <div className="modal-price-tag">
                  <span className="price-subtitle">Average Annual Growth</span>
                  <strong>{selectedLocationModal.stats.appreciation}</strong>
                </div>
              </div>

              {/* OVERVIEW */}
              <div className="modal-section">
                <h3>Corridor Growth Story</h3>
                <p className="modal-desc">{selectedLocationModal.description}</p>
              </div>

              {/* METRICS ROW */}
              <div className="modal-specs-row">
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Active Projects</span>
                  <strong>{selectedLocationModal.stats.activeProjects}</strong>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Properties Catalog</span>
                  <strong>{selectedLocationModal.stats.propertiesCount}</strong>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Investment Range</span>
                  <strong className="text-highlight">{selectedLocationModal.stats.priceRange}</strong>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Title Approvals</span>
                  <strong>DTCP & RERA Vetted</strong>
                </div>
              </div>

              {/* KEY ADVANTAGES */}
              <div className="modal-section">
                <h3>Infrastructure & Connectivity Highlights</h3>
                <div className="modal-highlights-grid">
                  {selectedLocationModal.advantages.map((adv, idx) => (
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
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* POPULAR POCKETS */}
              <div className="modal-section">
                <h3>Key High-Growth Neighborhoods</h3>
                <div className="modal-chips-list">
                  {selectedLocationModal.popularAreas.map((area, i) => (
                    <span key={i} className="modal-area-chip">📍 {area}</span>
                  ))}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="modal-actions-footer">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hello LAX360, I am interested in exploring properties and projects in ${selectedLocationModal.name} (${selectedLocationModal.city}). Please share available inventory and schedule a free site visit.`
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

                <button
                  type="button"
                  className="modal-contact-btn"
                  onClick={() => {
                    setSelectedLocationModal(null);
                    navigate("/properties");
                  }}
                >
                  View Available Properties ➔
                </button>
              </div>
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

export default Locations;