import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {

  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const [visitForm, setVisitForm] = useState({
    name: "",
    phone: "",
    location: "Salem",
    date: "",
  });
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  // Guarantee instant video playback without initial delay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented by browser policy
        });
      }
    }
  }, []);

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    if (visitForm.name && visitForm.phone) {
      setVisitSubmitted(true);
    }
  };

  /* =========================================
     HERO ANIMATION ONLY
  ========================================= */

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      /* =====================================
         HERO INITIAL STATE
      ===================================== */

      gsap.set(".hero-eyebrow", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".hero-title-line", {
        y: 100,
        opacity: 0,
      });

      gsap.set(".hero-description", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".hero-search", {
        y: 40,
        opacity: 0,
      });

      gsap.set(".hero-scroll", {
        opacity: 0,
      });


      /* =====================================
         HERO LOAD ANIMATION
      ===================================== */

      timeline

        .to(".hero-eyebrow", {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })

        .to(
          ".hero-title-line",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.4"
        )

        .to(
          ".hero-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5"
        )

        .to(
          ".hero-search",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4"
        )

        .to(
          ".hero-scroll",
          {
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2"
        );


      /* =====================================
         HERO VIDEO PARALLAX
      ===================================== */

      gsap.to(".hero-video", {

        scale: 1.12,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",

          start: "top top",
          end: "bottom top",

          scrub: 1.5,
        },

      });


      /* =====================================
         HERO CONTENT PARALLAX
      ===================================== */

      gsap.to(".hero-content", {

        y: -120,

        opacity: 0.15,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",

          start: "top top",
          end: "bottom top",

          scrub: 1,
        },

      });


      /* =====================================
         HERO OVERLAY
      ===================================== */

      gsap.to(".hero-overlay", {

        opacity: 0.85,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",

          start: "top top",
          end: "bottom top",

          scrub: 1,
        },

      });

    }, heroRef);


    return () => ctx.revert();

  }, []);


  return (

    <main
      className="home"
      ref={heroRef}
    >


      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero">


        {/* BACKGROUND VIDEO */}

        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/about-main.jpg"
          disablePictureInPicture
          disableRemotePlayback
        >

          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />

        </video>


        {/* PURPLE OVERLAY */}

        <div className="hero-overlay"></div>


        {/* =====================================
            HERO CONTENT
        ===================================== */}

        <div className="hero-content">


          <span className="hero-eyebrow">
            PREMIUM REAL ESTATE
          </span>


          <h1 className="hero-title">


            <span className="hero-title-line">
              Find a Place
            </span>


            <span className="hero-title-line">
              <span>
                   You’ll Love to Live.
              </span>
            </span>


          </h1>


          <p className="hero-description">

            Discover exceptional properties, premium
            projects, and spaces designed for the way
            you want to live.

          </p>


          {/* =====================================
              SEARCH BOX
          ===================================== */}

          <div className="hero-search">


            <div className="search-field">

              <span>📍</span>

              <div>

                <small>
                  Location
                </small>

                <strong>
                  Choose Location
                </strong>

              </div>

            </div>


            <div className="search-field">

              <span>⌂</span>

              <div>

                <small>
                  Property Type
                </small>

                <strong>
                  All Properties
                </strong>

              </div>

            </div>


            <button className="search-button">

              Search

              <span>
                →
              </span>

            </button>


          </div>


        </div>


        {/* =====================================
            SCROLL INDICATOR
        ===================================== */}

        <div className="hero-scroll">

          <span></span>

          <small>
            SCROLL TO EXPLORE
          </small>

        </div>


      </section>



      {/* =========================================
          HOME ABOUT SECTION
          NO GSAP ANIMATION
      ========================================= */}

      <section className="home-about">


        <div className="home-about-container">


          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="home-about-content">


            <span className="section-eyebrow">
              ABOUT LAX360
            </span>


            <h2>

              More Than

              <br />

              <span>
                Just a Property.
              </span>

            </h2>


            <p>

              At LAX360 Real Estate, we believe a
              property is more than just a place.
              It is where dreams take shape, families
              grow, and futures are built.

            </p>


            <p>

              From thoughtfully planned plots and
              premium apartments to exceptional
              residential projects, we create spaces
              designed around the way people want to live.

            </p>


            {/* ABOUT LINK */}

            <Link
              to="/about"
              className="about-link"
            >

              Discover Our Story

              <span>
                ↗
              </span>

            </Link>


          </div>



          {/* =====================================
              RIGHT IMAGE
          ===================================== */}

          <div className="home-about-visual">


            <div className="about-image-wrapper">


              <img
                src="/images/about-main.jpg"
                alt="LAX360 Real Estate"
              />


            </div>


            {/* =================================
                EXPERIENCE BADGE
            ================================= */}

            <div className="about-experience">


              <strong>
                10+
              </strong>


              <span>

                Years of
                <br />
                Excellence

              </span>


            </div>


          </div>


        </div>



      </section>
       
       {/* =========================================
    FEATURED PROPERTIES
========================================= */}

<section className="featured-properties">

  <div className="featured-container">

    {/* SECTION HEADER */}

    <div className="featured-header">

      <div>

        <span className="section-eyebrow">
          FEATURED PROPERTIES
        </span>

        <h2>
          Find Your
          <br />
          <span>Perfect Space.</span>
        </h2>

      </div>


      <Link
        to="/properties"
        className="view-all-link"
      >
        View All Properties
        <span>↗</span>
      </Link>

    </div>


    {/* PROPERTY GRID */}

    <div className="property-grid">


      {/* PROPERTY 1 */}

      <article className="property-card">

        <div className="property-image">

          <img
            src="https://www.godrejplotsmohali.com/img/p1.webp"
            alt="Premium Residential Plot"
          />

          <span className="property-badge">
            FOR SALE
          </span>

        </div>


        <div className="property-content">

          <span className="property-type">
            RESIDENTIAL PLOT
          </span>

          <h3>
            Premium Residential Plot
          </h3>

          <p className="property-location">
            📍 Salem, Tamil Nadu
          </p>


          <div className="property-details">

            <span>
              📐 1200 Sq.ft
            </span>

            <span>
              ◈ DTCP Approved
            </span>

          </div>


          <div className="property-bottom">

            <strong>
              ₹24.5 Lakhs
            </strong>

            <Link to="/properties">
              View Details →
            </Link>

          </div>

        </div>

      </article>



      {/* PROPERTY 2 */}

      <article className="property-card">

        <div className="property-image">

          <img
            src="https://media.istockphoto.com/id/1389968100/photo/image-of-hong-kongs-high-rise-building.jpg?s=170667a&w=0&k=20&c=lPHjk1ZUr06F0HsYdPr5hPWoRm1Sl7EqowiHHwPZPzE="
            alt="Premium Apartment"
          />

          <span className="property-badge">
            FEATURED
          </span>

        </div>


        <div className="property-content">

          <span className="property-type">
            APARTMENT
          </span>

          <h3>
            Luxury 2 & 3 BHK Apartments
          </h3>

          <p className="property-location">
            📍 Coimbatore, Tamil Nadu
          </p>


          <div className="property-details">

            <span>
              📐 1250 Sq.ft
            </span>

            <span>
              ◈ Premium
            </span>

          </div>


          <div className="property-bottom">

            <strong>
              ₹68 Lakhs
            </strong>

            <Link to="/properties">
              View Details →
            </Link>

          </div>

        </div>

      </article>



      {/* PROPERTY 3 */}

      <article className="property-card">

        <div className="property-image">

          <img
            src="https://curb360.com/wp-content/uploads/2024/09/A_serene_real_estate_scene_captured_during_sunset_converted.jpg"
            alt="Luxury Villa"
          />

          <span className="property-badge">
            NEW
          </span>

        </div>


        <div className="property-content">

          <span className="property-type">
            VILLA
          </span>

          <h3>
            Modern Luxury Villa
          </h3>

          <p className="property-location">
            📍 Trichy, Tamil Nadu
          </p>


          <div className="property-details">

            <span>
              📐 2200 Sq.ft
            </span>

            <span>
              ◈ Gated Community
            </span>

          </div>


          <div className="property-bottom">

            <strong>
              ₹1.25 Cr
            </strong>

            <Link to="/properties">
              View Details →
            </Link>

          </div>

        </div>

      </article>


    </div>

  </div>

</section>


{/* =========================================
    WHY CHOOSE LAX360
========================================= */}

<section className="why-choose">

  <div className="why-choose-container">

    {/* HEADER */}

    <div className="why-choose-header">

      <div>
        <span className="why-choose-eyebrow">
          WHY CHOOSE LAX360
        </span>

        <h2>
          More Than Property.
          <br />
          <span>A Better Way to Live.</span>
        </h2>
      </div>

      <p>
        We combine carefully selected locations, thoughtful
        planning, quality development, and trusted guidance
        to help you make confident property decisions.
      </p>

    </div>


    {/* FEATURES GRID */}

    <div className="why-choose-grid">

      {/* FEATURE 1 */}
      <div className="why-card">
        <div className="why-card-top">
          <span className="why-card-num">01</span>
          <div className="why-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        </div>

        <div className="why-card-badge">Growth Corridors</div>

        <h3>Prime Locations</h3>

        <p>
          Carefully selected locations with excellent
          connectivity, convenience, and long-term
          growth potential.
        </p>

        <div className="why-card-footer">
          <span>High Connectivity & Access</span>
          <span className="why-arrow">↗</span>
        </div>
      </div>


      {/* FEATURE 2 */}
      <div className="why-card">
        <div className="why-card-top">
          <span className="why-card-num">02</span>
          <div className="why-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
        </div>

        <div className="why-card-badge">100% Verified</div>

        <h3>Quality & Trust</h3>

        <p>
          Thoughtfully planned properties built around
          quality, transparency, and lasting value.
        </p>

        <div className="why-card-footer">
          <span>DTCP & RERA Approved</span>
          <span className="why-arrow">↗</span>
        </div>
      </div>


      {/* FEATURE 3 */}
      <div className="why-card">
        <div className="why-card-top">
          <span className="why-card-num">03</span>
          <div className="why-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
        </div>

        <div className="why-card-badge">High Capital Gains</div>

        <h3>Smart Investment</h3>

        <p>
          Property opportunities selected to help you make
          confident, future-focused decisions.
        </p>

        <div className="why-card-footer">
          <span>Maximum Appreciation</span>
          <span className="why-arrow">↗</span>
        </div>
      </div>


      {/* FEATURE 4 */}
      <div className="why-card">
        <div className="why-card-top">
          <span className="why-card-num">04</span>
          <div className="why-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
        </div>

        <div className="why-card-badge">Dedicated Advisor</div>

        <h3>Customer First</h3>

        <p>
          Dedicated guidance and support from discovering
          your property to making it yours.
        </p>

        <div className="why-card-footer">
          <span>End-to-End Assistance</span>
          <span className="why-arrow">↗</span>
        </div>
      </div>

    </div>


    {/* BOTTOM TRUST HIGHLIGHTS */}
    <div className="why-trust-strip">
      <div className="trust-item">
        <span className="trust-dot">◈</span>
        <span>Legal Title Verification</span>
      </div>
      <div className="trust-item">
        <span className="trust-dot">◈</span>
        <span>Zero Brokerage Fees</span>
      </div>
      <div className="trust-item">
        <span className="trust-dot">◈</span>
        <span>Clear DTCP & RERA Approvals</span>
      </div>
      <div className="trust-item">
        <span className="trust-dot">◈</span>
        <span>Lifetime Advisory Support</span>
      </div>
    </div>

  </div>

</section>
  

{/* =========================================
    FEATURED PROJECTS
========================================= */}

<section className="featured-projects">

  <div className="featured-projects-container">

    {/* HEADER */}

    <div className="featured-projects-header">

      <div>
        <span className="featured-projects-eyebrow">
          OUR PROJECTS
        </span>

        <h2>
          Spaces Made
          <br />
          <span>For Living.</span>
        </h2>
      </div>

      <div className="featured-projects-intro">

        <p>
          Explore thoughtfully planned developments
          created for modern lifestyles and long-term value.
        </p>

        <Link
          to="/projects"
          className="featured-projects-link"
        >
          View All Projects
          <span>↗</span>
        </Link>

      </div>

    </div>


    {/* PROJECTS */}

    <div className="featured-project-list">


      {/* PROJECT 01 */}

      <article className="featured-project">

        <div className="featured-project-image">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
            alt="LAX360 Premium Residences"
          />

          <span className="project-status">
            ONGOING
          </span>

        </div>


        <div className="featured-project-info">

          <div className="project-header-top">
            <span className="project-number">
              01
            </span>
            <span className="project-type">
              LUXURY GATED RESIDENCES
            </span>
          </div>

          <div className="project-main">

            <h3>
              LAX360 Premium Residences
            </h3>

            <span className="project-location">
              📍 Salem, Tamil Nadu
            </span>

            <p>
              Contemporary luxury residences masterfully crafted with expansive
              layouts, smart home automation, landscaped leisure parks, and a
              grand clubhouse tailored for modern family living.
            </p>

            <div className="project-features">
              <span>📐 1,450 – 2,800 Sq.ft</span>
              <span>🏠 3 & 4 BHK Luxury Villas</span>
              <span>🏊 Clubhouse & Pool</span>
              <span>🔒 24/7 Gated Security</span>
            </div>

            <div className="project-bottom">
              <div className="project-pricing">
                <small>Starting Price</small>
                <strong>₹85 Lakhs</strong>
              </div>

              <Link
                to="/projects"
                className="project-explore"
              >
                Explore Project
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>

      </article>


      {/* PROJECT 02 */}

      <article className="featured-project">

        <div className="featured-project-image">

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="LAX360 Green Valley"
          />

          <span className="project-status">
            UPCOMING
          </span>

        </div>


        <div className="featured-project-info">

          <div className="project-header-top">
            <span className="project-number">
              02
            </span>
            <span className="project-type">
              ECO RESIDENTIAL PLOTS & VILLAS
            </span>
          </div>

          <div className="project-main">

            <h3>
              LAX360 Green Valley
            </h3>

            <span className="project-location">
              📍 Coimbatore, Tamil Nadu
            </span>

            <p>
              A peaceful, eco-conscious enclave nestled amid verdant surroundings,
              blending serene community life with seamless access to top educational
              institutions and tech corridors.
            </p>

            <div className="project-features">
              <span>📐 1,200 – 3,500 Sq.ft</span>
              <span>🌳 40% Green Open Spaces</span>
              <span>◈ DTCP & RERA Approved</span>
              <span>⚡ Underground Utilities</span>
            </div>

            <div className="project-bottom">
              <div className="project-pricing">
                <small>Starting Price</small>
                <strong>₹45 Lakhs</strong>
              </div>

              <Link
                to="/projects"
                className="project-explore"
              >
                Explore Project
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>

      </article>


      {/* PROJECT 03 */}

      <article className="featured-project">

        <div className="featured-project-image">

          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80"
            alt="LAX360 Urban Heights"
          />

          <span className="project-status">
            COMPLETED
          </span>

        </div>


        <div className="featured-project-info">

          <div className="project-header-top">
            <span className="project-number">
              03
            </span>
            <span className="project-type">
              PREMIUM SKY CONDOS
            </span>
          </div>

          <div className="project-main">

            <h3>
              LAX360 Urban Heights
            </h3>

            <span className="project-location">
              📍 Bengaluru, Karnataka
            </span>

            <p>
              Architecturally distinctive sky residences offering sweeping city views,
              designer interior finishes, world-class fitness hub, and immediate
              access to prime metro and lifestyle avenues.
            </p>

            <div className="project-features">
              <span>📐 1,650 – 3,200 Sq.ft</span>
              <span>🏢 2, 3 & 4 BHK Sky Condos</span>
              <span>🌇 Rooftop Infinity Hub</span>
              <span>✨ Ready to Move-In</span>
            </div>

            <div className="project-bottom">
              <div className="project-pricing">
                <small>Starting Price</small>
                <strong>₹1.45 Cr</strong>
              </div>

              <Link
                to="/projects"
                className="project-explore"
              >
                Explore Project
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>

      </article>

    </div>

  </div>

</section>


      {/* =========================================
          POPULAR LOCATIONS
      ========================================= */}

      <section className="popular-locations">

        <div className="popular-locations-container">

          {/* HEADER */}
          <div className="popular-locations-header">

            <div>
              <span className="popular-locations-eyebrow">
                PRIME LOCALITIES
              </span>

              <h2>
                Explore By
                <br />
                <span>Popular Locations.</span>
              </h2>
            </div>

            <div className="popular-locations-intro">
              <p>
                Discover premium plots, luxury residences, and high-growth
                investment opportunities across South India’s most desirable cities.
              </p>

              <Link
                to="/locations"
                className="popular-locations-link"
              >
                View All Locations
                <span>↗</span>
              </Link>
            </div>

          </div>


          {/* LOCATIONS GRID */}
          <div className="popular-locations-grid">

            {/* LOCATION 1 */}
            <article className="location-card">
              <div className="location-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
                  alt="Salem Real Estate"
                />
                <span className="location-count-badge">
                  18+ Properties
                </span>
                <div className="location-gradient-overlay"></div>
              </div>

              <div className="location-content">
                <div className="location-top">
                  <span className="location-state">Tamil Nadu</span>
                  <h3>Salem</h3>
                </div>

                <p className="location-desc">
                  Fast-growing industrial & connectivity hub with prime DTCP plots and gated villa enclaves.
                </p>

                <div className="location-bottom">
                  <div className="location-price">
                    <small>Starting from</small>
                    <strong>₹24.5 Lakhs</strong>
                  </div>

                  <Link to="/properties" className="location-explore-btn">
                    Explore <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>


            {/* LOCATION 2 */}
            <article className="location-card">
              <div className="location-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="Coimbatore Real Estate"
                />
                <span className="location-count-badge">
                  32+ Properties
                </span>
                <div className="location-gradient-overlay"></div>
              </div>

              <div className="location-content">
                <div className="location-top">
                  <span className="location-state">Tamil Nadu</span>
                  <h3>Coimbatore</h3>
                </div>

                <p className="location-desc">
                  The booming Manchester of South India offering serene foothill communities and sky condos.
                </p>

                <div className="location-bottom">
                  <div className="location-price">
                    <small>Starting from</small>
                    <strong>₹45 Lakhs</strong>
                  </div>

                  <Link to="/properties" className="location-explore-btn">
                    Explore <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>


            {/* LOCATION 3 */}
            <article className="location-card">
              <div className="location-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="Bengaluru Real Estate"
                />
                <span className="location-count-badge">
                  45+ Properties
                </span>
                <div className="location-gradient-overlay"></div>
              </div>

              <div className="location-content">
                <div className="location-top">
                  <span className="location-state">Karnataka</span>
                  <h3>Bengaluru</h3>
                </div>

                <p className="location-desc">
                  Silicon Capital of India with high capital appreciation, tech corridor apartments, and penthouses.
                </p>

                <div className="location-bottom">
                  <div className="location-price">
                    <small>Starting from</small>
                    <strong>₹85 Lakhs</strong>
                  </div>

                  <Link to="/properties" className="location-explore-btn">
                    Explore <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>


            {/* LOCATION 4 */}
            <article className="location-card">
              <div className="location-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
                  alt="Chennai Real Estate"
                />
                <span className="location-count-badge">
                  28+ Properties
                </span>
                <div className="location-gradient-overlay"></div>
              </div>

              <div className="location-content">
                <div className="location-top">
                  <span className="location-state">Tamil Nadu</span>
                  <h3>Chennai</h3>
                </div>

                <p className="location-desc">
                  Metropolitan coastal gateway with luxury sea-facing residences, ECR plots, and urban condos.
                </p>

                <div className="location-bottom">
                  <div className="location-price">
                    <small>Starting from</small>
                    <strong>₹65 Lakhs</strong>
                  </div>

                  <Link to="/properties" className="location-explore-btn">
                    Explore <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          BOOK A SITE VISIT
      ========================================= */}

      <section className="site-visit-section">

        <div className="site-visit-container">

          <div className="site-visit-grid">

            {/* LEFT CONTENT */}
            <div className="site-visit-info">

              <span className="site-visit-eyebrow">
                EXPERIENCE BEFORE YOU BUY
              </span>

              <h2>
                Book a Free
                <br />
                <span>Guided Site Visit.</span>
              </h2>

              <p className="site-visit-lead">
                Experience your future property in person with zero commitment.
                We provide complimentary private cab pickup & drop, a dedicated
                property consultant, and on-the-spot legal verification.
              </p>

              <div className="site-visit-direct-call">
                <span>Prefer to speak immediately?</span>
                <a href="tel:+919876543210">📞 Call Site Visit Desk: +91 98765 43210</a>
              </div>

            </div>


            {/* RIGHT FORM CARD */}
            <div className="site-visit-form-wrapper">

              <div className="site-visit-form-card">

                <div className="form-card-header">
                  <h3>Schedule Your Visit</h3>
                  <p>Select your date and preferred project for a guided tour.</p>
                </div>

                {visitSubmitted ? (
                  <div className="site-visit-success">
                    <div className="success-icon">✓</div>
                    <h4>Site Visit Request Confirmed!</h4>
                    <p>
                      Thank you, <strong>{visitForm.name}</strong>. Our senior property manager will call you at <strong>{visitForm.phone}</strong> within 15 minutes to coordinate your private cab & schedule.
                    </p>
                    <button
                      type="button"
                      onClick={() => setVisitSubmitted(false)}
                      className="reset-form-btn"
                    >
                      Schedule Another Visit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVisitSubmit} className="site-visit-form">

                    <div className="form-group">
                      <label>Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Kumar"
                        value={visitForm.name}
                        onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Select Project / City</label>
                        <select
                          value={visitForm.location}
                          onChange={(e) => setVisitForm({ ...visitForm, location: e.target.value })}
                        >
                          <option value="Salem">Salem - LAX360 Residences</option>
                          <option value="Coimbatore">Coimbatore - Green Valley</option>
                          <option value="Bengaluru">Bengaluru - Urban Heights</option>
                          <option value="Chennai">Chennai - Coastal Enclave</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Preferred Visit Date</label>
                        <input
                          type="date"
                          value={visitForm.date}
                          onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="dpdp-form-consent-wrap">
                      <input
                        type="checkbox"
                        id="homeDpdpConsent"
                        checked={visitForm.dpdpConsent !== undefined ? visitForm.dpdpConsent : true}
                        onChange={(e) => setVisitForm({ ...visitForm, dpdpConsent: e.target.checked })}
                        required
                      />
                      <label htmlFor="homeDpdpConsent">
                        I agree to the processing of my personal data for the purpose described in the{" "}
                        <Link to="/privacy-notice" target="_blank" className="dpdp-link">
                          Privacy Notice
                        </Link>.
                      </label>
                    </div>

                    <button type="submit" className="site-visit-submit-btn">
                      Confirm Free Site Visit <span>↗</span>
                    </button>

                    <p className="form-privacy-note">
                      🔒 100% Privacy. Zero spam. Complimentary & no obligation.
                    </p>

                  </form>
                )}

              </div>

            </div>

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

export default Home;