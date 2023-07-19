import React from "react";
import {
  PhotosWithTotalResults,
  Photo,
  ErrorResponse,
  Videos,
  Video,
} from "pexels";

const iGlobalContext: GlobalContextType = {
  photoOrVideo: "photo",
  query: null,
  json: null,
  isOverlayActive: false,
  currImage: null,
  overlayClass: "",
  isMobileMenuActive: false,
  currLanguage: "en-US",
  setCurrLanguage: () => null,
  setMobileMenuActive: () => null,
  setOverlayClass: () => null,
  setCurrImage: () => null,
  setOverlay: () => null,
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
  const [isOverlayActive, setOverlay] = React.useState<boolean>(false);
  const [currImage, setCurrImage] = React.useState<Photo | Video | null>(null);
  const [overlayClass, setOverlayClass] = React.useState<string>("");
  const [isMobileMenuActive, setMobileMenuActive] =
    React.useState<boolean>(false);
  const [currLanguage, setCurrLanguage] =
    React.useState<SupportedLanguages>("en-US");
  return (
    <PexelsContext.Provider
      value={{
        photoOrVideo,
        setPhotoOrVideo,
        query,
        setQuery,
        json,
        setJson,
        isOverlayActive,
        setOverlay,
        currImage,
        setCurrImage,
        overlayClass,
        setOverlayClass,
        isMobileMenuActive,
        setMobileMenuActive,
        currLanguage,
        setCurrLanguage,
      }}
    >
      {children}
    </PexelsContext.Provider>
  );
};

type GlobalContextType = {
  currLanguage: SupportedLanguages;
  setCurrLanguage: React.Dispatch<React.SetStateAction<SupportedLanguages>>;
  isMobileMenuActive: boolean;
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  overlayClass: string;
  setOverlayClass: React.Dispatch<React.SetStateAction<string>>;
  currImage: Photo | Video | null;
  setCurrImage: React.Dispatch<React.SetStateAction<Photo | Video | null>>;
  isOverlayActive: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  photoOrVideo: PhotoOrVideoType;
  setPhotoOrVideo: React.Dispatch<React.SetStateAction<PhotoOrVideoType>>;
  query: string | null;
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
  json: ResponseSearchType | null;
  setJson: React.Dispatch<React.SetStateAction<ResponseSearchType | null>>;
};

export type ResponseSearchType =
  | PhotosWithTotalResults
  | ErrorResponse
  | Videos;

export type PhotoOrVideoType = "photo" | "video";

export type SupportedLanguages =
  | "en-US"
  | "pt-BR"
  | "es-ES"
  | "ca-ES"
  | "de-DE"
  | "it-IT"
  | "fr-FR"
  | "sv-SE"
  | "id-ID"
  | "pl-PL"
  | "ja-JP"
  | "zh-TW"
  | "zh-CN"
  | "ko-KR"
  | "th-TH"
  | "nl-NL"
  | "hu-HU"
  | "vi-VN"
  | "cs-CZ"
  | "da-DK"
  | "fi-FI"
  | "uk-UA"
  | "el-GR"
  | "ro-RO"
  | "nb-NO"
  | "sk-SK"
  | "tr-TR"
  | "ru-RU";

export type LanguagesFlags =
  | "🇺🇸"
  | "🇵🇹"
  | "🇪🇸"
  | "🇪🇸"
  | "🇩🇪"
  | "🇮🇹"
  | "🇫🇷"
  | "🇸🇪"
  | "🇮🇩"
  | "🇵🇱"
  | "🇯🇵"
  | "🇹🇼"
  | "🇨🇳"
  | "🇰🇷"
  | "🇹🇭"
  | "🇳🇱"
  | "🇭🇺"
  | "🇻🇳"
  | "🇨🇿"
  | "🇩🇰"
  | "🇫🇮"
  | "🇺🇦"
  | "🇬🇷"
  | "🇷🇴"
  | "🇳🇴"
  | "🇸🇰"
  | "🇹🇷"
  | "🇷🇺";
