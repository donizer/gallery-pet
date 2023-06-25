import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.tsx";
import { PexelContextProvider } from "./contexts/ContextProvider.tsx";
import "./scss/zero.scss";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PexelContextProvider>
      <Layout />
    </PexelContextProvider>
  </React.StrictMode>
);
