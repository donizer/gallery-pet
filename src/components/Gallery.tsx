import "../scss/Gallery.scss";
// import Card from "./Card";
import { useContext } from "react";
import { PexelsContext } from "../contexts/ContextProvider";

function Gallery() {
  const { query } = useContext(PexelsContext);
  query;

  return (
    <>
      <main className={`main`}>
        {/* {props.items.map(() => {
            return <Card />;
          })} */}
      </main>
    </>
  );
}

export default Gallery;
