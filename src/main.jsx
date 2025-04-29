import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./components/Resources/apple-responsive-replica-html-css-mar-2020/js/bootstrap.js";
import "./components/Resources/apple-responsive-replica-html-css-mar-2020/js/custom.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
