import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./styles/wiki.css";
import "./styles/header.css";
import "./styles/article.css";
import "./styles/interaction.css";
import "./styles/home.css";
import "./styles/side-rail.css";
import "./styles/chrome.css";
import "./styles/responsive.css";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Vercel Web Analytics — production only, zero npm dependency. The script is
// served by Vercel at /_vercel/insights/script.js and auto-tracks SPA route
// changes via the History API. It is cookieless and collects no personal data.
// In dev/test import.meta.env.PROD is false, so nothing is injected.
if (import.meta.env.PROD) {
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = "/_vercel/insights/script.js";
  document.head.appendChild(analyticsScript);
}
