import "../scss/Gallery.scss";
import Card from "./Card";
import { useContext } from "react";
import { PexelsContext } from "../contexts/ContextProvider";
import { PhotosWithTotalResults, ErrorResponse, Videos } from "pexels";

function instanceOfPhotos(object: any): object is PhotosWithTotalResults {
  return (object as PhotosWithTotalResults).photos !== undefined;
}

function instanceOfVideos(object: any): object is Videos {
  return (object as Videos).videos !== undefined;
}
function instanceOfErrorResponse(object: any): object is ErrorResponse {
  return (object as ErrorResponse).error !== undefined;
}

function Gallery() {
  const { json } = useContext(PexelsContext);
  if (json == null) {
    return <main className={`main`}></main>;
  }
  if (instanceOfPhotos(json)) {
    return (
      <>
        <main className={`main`}>
          {json.photos.map((photo) => {
            return <Card key={photo.id} photo={photo} />;
          })}
        </main>
      </>
    );
  }
}

export default Gallery;
