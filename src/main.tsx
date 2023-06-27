import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PexelContextProvider } from "./contexts/ContextProvider.tsx";
import "./scss/zero.scss";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PexelContextProvider>
      <App />
    </PexelContextProvider>
  </React.StrictMode>
);
