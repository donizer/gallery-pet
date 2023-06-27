import "../scss/Footer.scss";
import { CSSProperties } from "react";
const Footer = () => {
  const PexelStyle: CSSProperties = {
    height: "9rem",
  };
  return (
    <footer>
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
