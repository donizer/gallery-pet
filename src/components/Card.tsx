// Importing necessary dependencies and components
import "../scss/Card.scss";
import CSS from "csstype";
import { Photo } from "pexels";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { PexelsContext } from "../contexts/ContextProvider";

// Defining the Card component
export default function Card(props: { key: number; photo: Photo }) {
  const { setCurrImage, isOverlayActive, setOverlay, setOverlayClass } =
    useContext(PexelsContext);
  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = () => {
    setIsHover(!isHover);
  };
  const boxShadowStyle: CSS.Properties = {
    boxShadow: isHover
      ? `7px 7px  ${props.photo.avg_color},7px 7px 25px 25px ${props.photo.avg_color}20`
      : `-2px 2px  ${props.photo.avg_color}`,
    transition: "all 0.1s ease-in-out",
  };
  const authorStyle: CSS.Properties = {
    backgroundColor: `${props.photo.avg_color}`,
    color: "white",
    textDecoration: "wheat",
    bottom: isHover ? "0" : "-100%",
    right: isHover ? "0" : "-100%",
    transition: "all 0.1s ease-in-out",
  };
  const handleMouseClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;

    if (target.classList.contains("card__author")) {
      return;
    }

    setOverlay(!isOverlayActive);
    setCurrImage(props.photo);
    setOverlayClass(imageAspect);
  };

  // Extracting relevant data from props
  const imageWidth = props.photo.width;
  const imageHeight = props.photo.height;
  const ratio = imageWidth / imageHeight;

  // Initializing variables for image aspect and URL
  let imageAspect: string;

  // Determining image aspect based on width/height ratio and score
  if (ratio > 1.43) imageAspect = "horizontal";
  else if (ratio > 0.93) imageAspect = "square-L";
  else imageAspect = "vertical";

  // Setting the URL based on image aspect
  const url =
    imageAspect == "square-S" ||
    imageAspect == "vertical" ||
    imageAspect == "horizontal"
      ? props.photo.src.medium
      : props.photo.src.large;

  useEffect(() => {
    if (document.body.clientWidth < 768) {
      setIsHover(true);
    }
  }, []);

  return (
    <div
      className={`card__container ${imageAspect} `}
      onClick={handleMouseClick}
      style={boxShadowStyle}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <img
        src={url}
        className={`card__item `}
        alt={props.photo.alt ? props.photo.alt : ""}
      />
      <div className="info__container">
        <a
          href={`${props.photo.photographer_url}`}
          className="card__author"
          target="_blank"
          style={authorStyle}
        >
          {props.photo.photographer}
        </a>
      </div>
    </div>
  );
}
