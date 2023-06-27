import "./scss/Layout.scss";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
// import Overlay from "./components/Overlay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className={`wrapper`}>
      <Navigation />
      <Gallery />
      {/* <Overlay /> */}
      <Footer />
    </div>
  );
};

export default App;
