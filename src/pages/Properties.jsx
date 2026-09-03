import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import {
  propertiesData,
  propertyCategories,
  locationsList,
  budgetRanges,
} from "../data/properties";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Derive filter state directly from URL searchParams
  const selectedCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";
  const selectedLocation = searchParams.get("location") || "All Locations";
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");

  /* =========================================
     SMOOTH SCROLL WHEN CATEGORY PARAM IS SET
  ========================================= */
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      const el = document.getElementById("properties-content-area");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchParams]);

  /* =========================================
     FILTER & SEARCH LOGIC
  ========================================= */
  const filteredProperties = useMemo(() => {
    return propertiesData
      .filter((prop) => {
        // Category filter
        if (selectedCategory !== "all" && prop.category !== selectedCategory) {
          return false;
        }

        // Location filter
        if (
          selectedLocation !== "All Locations" &&
          prop.city.toLowerCase() !== selectedLocation.toLowerCase()
        ) {
          return false;
        }

        // Budget filter
        if (selectedBudget !== "All Budgets") {
          const range = budgetRanges.find((r) => r.label === selectedBudget);
          if (range && (prop.price < range.min || prop.price > range.max)) {
            return false;
          }
        }

        // Search query filter (title, location, type, description)
        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase();
          const matchTitle = prop.title.toLowerCase().includes(query);
          const matchLocation = prop.location.toLowerCase().includes(query);
          const matchType = prop.type.toLowerCase().includes(query);
          const matchCity = prop.city.toLowerCase().includes(query);
          if (!matchTitle && !matchLocation && !matchType && !matchCity) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [selectedCategory, searchQuery, selectedLocation, selectedBudget]);

  const handleCategorySelect = (catId) => {
    const newParams = new URLSearchParams(searchParams);
    if (catId === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", catId);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (val) => {
    const newParams = new URLSearchParams(searchParams);
    if (!val) {
      newParams.delete("search");
    } else {
      newParams.set("search", val);
    }
    setSearchParams(newParams);
  };

  const handleLocationChange = (loc) => {
    const newParams = new URLSearchParams(searchParams);
    if (loc === "All Locations") {
      newParams.delete("location");
    } else {
      newParams.set("location", loc);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSelectedBudget("All Budgets");
    setSearchParams({});
  };

  return (
    <main className="properties-page">
      {/* =========================================
          1. PROPERTIES HERO SECTION
      ========================================= */}
      <section className="properties-hero">
        <div className="properties-hero-container">
          <div className="prop-hero-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>VERIFIED REAL ESTATE LISTINGS</span>
          </div>

          <h1>
            Curated Properties for
            <br />
            <span>Living & Investment.</span>
          </h1>

          <p>
            Explore 100% verified DTCP & RERA approved residential plots, luxury community villas, and high-growth commercial assets across South India.
          </p>

          {/* SEARCH & FILTER BAR */}
          <div className="properties-search-bar">
            {/* SEARCH INPUT */}
            <div className="search-input-group">
              <span className="search-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search by project, location, or keyword"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => handleSearchChange("")}
                >
                  ✕
                </button>
              )}
            </div>

            {/* LOCATION SELECT */}
            <div className="filter-select-group">
              <span className="select-icon">📍</span>
              <select
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
              >
                {locationsList.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* BUDGET SELECT */}
            <div className="filter-select-group">
              <span className="select-icon">💰</span>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
              >
                {budgetRanges.map((b) => (
                  <option key={b.label} value={b.label}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            {/* RESET / CLEAR */}
            {(selectedCategory !== "all" ||
              searchQuery ||
              selectedLocation !== "All Locations" ||
              selectedBudget !== "All Budgets") && (
              <button
                type="button"
                className="prop-filter-reset-btn"
                onClick={handleResetFilters}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          2. CATEGORY PILL TABS
      ========================================= */}
      <section className="properties-categories-section" id="properties-content-area">
        <div className="properties-categories-container">
          <div className="category-pills-list">
            {propertyCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? propertiesData.length
                  : propertiesData.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill-btn ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-label">{cat.label}</span>
                  <span className="cat-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          3. PROPERTIES GRID
      ========================================= */}
      <section className="properties-grid-section">
        <div className="properties-grid-container">
          {/* GRID OF PROPERTY CARDS */}
          {filteredProperties.length > 0 ? (
            <div className="properties-cards-grid">
              {filteredProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          ) : (
            <div className="properties-empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No Properties Found</h3>
              <p>
                We couldn&apos;t find any properties matching your current filter criteria.
                Try adjusting your search terms or resetting filters.
              </p>
              <button
                type="button"
                className="prop-btn-primary"
                onClick={handleResetFilters}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />
    </main>
  );
}

export default Properties;
