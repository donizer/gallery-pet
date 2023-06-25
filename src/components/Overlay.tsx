// import { useEffect, useState } from "react";
// import "../scss/Overlay.scss";


// export default function Overlay() {
//   // State to determine if the image is a mp4 video
//   const [isMp4, setIsMp4] = useState(false);

//   // Extract file format from the URL and set isMp4 state if it's a mp4 video

//   return (
//     <div
//       className={`overlay ${props.isOverlayActive ? "active" : ""}`}
//       onClick={handleOverlayClick}
//     >
//       <div className="close-btn" onClick={handleOverlayClick}>
//         <div></div>
//       </div>
//       {props.isOverlayActive && props.currImage && isMp4 ? (
//         <video
//           className={props.overlayClass}
//           src={props.currImage}
//           placeholder={props.overlayItem?.sample_url}
//           controls
//           // muted
//           autoPlay
//         />
//       ) : (
//         <img
//           className={props.overlayClass}
//           src={props.currImage}
//           alt={props.currImage}
//         />
//       )}
//     </div>
//   );
// }
