import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Providers from "./providers/providers.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <Toaster richColors position="top-right" />
      </Providers>
    </BrowserRouter>
  </StrictMode>
);
