import "./scss/Layout.scss";
import React from "react";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import { PexelsContext } from "./contexts/ContextProvider";

const App = () => {
  const { isOverlayActive } = React.useContext(PexelsContext);
  const body = document.querySelector("body");
  React.useEffect(() => {
    if (body === null) return;
    if (isOverlayActive) {
      body.classList.add("stop-scrolling");
    } else {
      body.classList.remove("stop-scrolling");
    }
  }, [body, isOverlayActive]);
  return (
    <div className={`wrapper`}>
      <Navigation />
      <Gallery />
      <Overlay />
      <Footer />
    </div>
  );
};

export default App;
