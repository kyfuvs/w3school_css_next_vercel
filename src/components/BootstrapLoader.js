// src/components/BootstrapLoader.js
"use client"; // Mark as a client component

import { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((module) => {
        // Bootstrap JS is now available
      })
      .catch((err) => console.error("Failed to load Bootstrap JS:", err));
  }, []);

  return null; // No UI rendered, just load Bootstrap JS
};

export default BootstrapLoader;
