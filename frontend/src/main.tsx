import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./DarkModeContext";
import { InternetIdentityProvider } from "ic-use-internet-identity";
import Actors from "@/ic/Actors.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InternetIdentityProvider>
      <Actors>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </Actors>
    </InternetIdentityProvider>
  </StrictMode>
);
