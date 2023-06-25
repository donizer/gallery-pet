import "./scss/Layout.scss";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
// import Overlay from "./components/Overlay";


const Layout = () => {
  return (
    <div className={`wrapper`}>
      <Navigation />
      <Gallery />
      {/* <Overlay /> */}
    </div>
  );
};

export default Layout;

