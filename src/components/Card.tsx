// Importing necessary dependencies and components
import "../scss/Card.scss";
import CSS from "csstype";
import { Photo } from "pexels";
import { useState } from "react";

// Defining the Card component
export default function Card(props: { key: number; photo: Photo }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const styles: CSS.Properties = {
    boxShadow: isHover ? `7px 7px  ${props.photo.avg_color}` : "",
    transition: "all 0.1s ease-in-out",
  };
  return (
    <img
      src={props.photo.src.large}
      style={styles}
      className={`card-item ${123}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
