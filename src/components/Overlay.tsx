import { useContext } from "react";
import "../scss/Overlay.scss";
import { PexelsContext } from "../contexts/ContextProvider";
import { Photo, Video } from "pexels";
import placeholder from "../assets/giphy.gif";
import ProgressiveImage from "react-progressive-graceful-image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function instanceOfPhoto(object: any): object is Photo {
  return (object as Photo).url !== undefined;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function instanceOfVideo(object: any): object is Video {
  return (object as Video).url !== undefined;
}

export default function Overlay() {
  const { isOverlayActive, setOverlay, currImage, overlayClass } =
    useContext(PexelsContext);
  const handleMouse = () => {
    setOverlay(!isOverlayActive);
  };

  if (currImage === null)
    return (
      <div
        className={`overlay ${isOverlayActive ? "active" : ""}`}
        onClick={handleMouse}
      >
        <div className="close-btn" onClick={handleMouse}>
          <div></div>
        </div>
      </div>
    );
  if (instanceOfPhoto(currImage)) {
    return (
      <div
        className={`overlay ${isOverlayActive ? "active" : ""}`}
        onClick={handleMouse}
      >
        <div className="close-btn" onClick={handleMouse}>
          <div></div>
        </div>
        <ProgressiveImage
          src={currImage.src.original}
          placeholder={placeholder}
        >
          {(src, loading) => (
            <img
              className={`${overlayClass} ${loading ? "loading" : "loaded"}`}
              src={src}
              alt={currImage.alt ? currImage.alt : ""}
            />
          )}
        </ProgressiveImage>
      </div>
    );
  } else if (instanceOfVideo(currImage)) {
    return (
      <div
        className={`overlay ${isOverlayActive ? "active" : ""}`}
        onClick={handleMouse}
      >
        <div className="close-btn" onClick={handleMouse}>
          <div></div>
        </div>
        <video
          // className={props.overlayClass}
          src={currImage.video_files[0].link}
          placeholder={currImage.video_pictures[0].picture}
          controls
          // muted
          autoPlay
        />
      </div>
    );
  }
}
