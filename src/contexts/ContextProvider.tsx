import React from "react";
import { PhotosWithTotalResults, ErrorResponse, Videos } from "pexels";

const iGlobalContext: GlobalContextType = {
  photoOrVideo: "photo",
  query: null,
  json: null,
  setJson: () => null,
  setPhotoOrVideo: () => null,
  setQuery: () => null,
};

export const PexelsContext =
  React.createContext<GlobalContextType>(iGlobalContext);

export const PexelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [photoOrVideo, setPhotoOrVideo] =
    React.useState<PhotoOrVideoType>("photo");
  const [query, setQuery] = React.useState<string | null>(null);
  const [json, setJson] = React.useState<ResponseSearchType | null>(null);

  return (
    <PexelsContext.Provider
      value={{ photoOrVideo, setPhotoOrVideo, query, setQuery, json, setJson }}
    >
      {children}
    </PexelsContext.Provider>
  );
};

type GlobalContextType = {
  photoOrVideo: PhotoOrVideoType;
  setPhotoOrVideo: React.Dispatch<React.SetStateAction<PhotoOrVideoType>>;
  query: string | null;
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
  json: ResponseSearchType | null;
  setJson: React.Dispatch<React.SetStateAction<ResponseSearchType | null>>;
};

export type ResponseSearchType = PhotosWithTotalResults | ErrorResponse | Videos;

export type PhotoOrVideoType = "photo" | "video";
