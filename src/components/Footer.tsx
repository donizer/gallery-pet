import { CSSProperties } from "react";
import "../scss/Footer.scss";
const Footer = () => {
  const PexelStyle: CSSProperties = {
    height: "4rem",
  };
  return (
    <footer className="footer">
      <p className="Sponsor">Made With</p>
      <a href="https://www.pexels.com">
        <img
          style={PexelStyle}
          src="https://images.pexels.com/lib/api/pexels-white.png"
        />
      </a>
    </footer>
  );
};

export default Footer;
