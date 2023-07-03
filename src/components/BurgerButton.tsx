import { useContext } from "react";
import "../scss/BurgerButton.scss";
import { PexelsContext } from "../contexts/ContextProvider";

const BurgerButton = () => {
  const { isMobileMenuActive, setMobileMenuActive } = useContext(PexelsContext);

  const handleBurgder = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };
  return (
    <div
      onClick={handleBurgder}
      className={`burger ${isMobileMenuActive ? "active" : ""} `}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BurgerButton;
