import "../scss/Gallery.scss";
import Card from "./Card";
import { useContext } from "react";
import { PexelsContext } from "../contexts/ContextProvider";
import { PhotosWithTotalResults } from "pexels";
// ErrorResponse, Videos

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function instanceOfPhotos(object: any): object is PhotosWithTotalResults {
  return (object as PhotosWithTotalResults).photos !== undefined;
}

// function instanceOfVideos(object: any): object is Videos {
//   return (object as Videos).videos !== undefined;
// }
// function instanceOfErrorResponse(object: any): object is ErrorResponse {
//   return (object as ErrorResponse).error !== undefined;
// }

function Gallery() {
  const { json } = useContext(PexelsContext);
  if (json == null) {
    return <main className={`main`}></main>;
  }

  if (instanceOfPhotos(json)) {
    if (json.total_results == 0) {
      return (
        <main className={`main`}>
          <div style={{ color: "black" }}>No such results</div>
        </main>
      );
    }
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

// //todo Own fetch
// const url = "https://api.pexels.com/v1/search/?page=2&per_page=50&query=Japan";
// const test = fetch(url, {
//   method: "GET",
//   headers: {
//     Authorization: "qaxLvqCpYIxuOSlbBG6BYEoZup3UZpB8a7PZ2JGEiWO7CPzmmQbQDGp7",
//   },
// }).then((e) => {
//   e.json().then((e) => {
//     console.log(e);
//   });
// });
// test;
