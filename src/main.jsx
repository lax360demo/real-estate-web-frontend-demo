import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


/* =========================================
   GSAP PLUGIN
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   LENIS SMOOTH SCROLL
========================================= */

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 1.5,
  autoRaf: false,
});


/* =========================================
   LENIS + SCROLLTRIGGER
========================================= */

lenis.on("scroll", ScrollTrigger.update);


/* =========================================
   GSAP RAF
========================================= */

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});


/* Prevent GSAP from adding lag compensation */

gsap.ticker.lagSmoothing(0);


/* =========================================
   REACT APP
========================================= */

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);