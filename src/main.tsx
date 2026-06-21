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
