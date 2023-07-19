import React from "react";
import {
  PexelsContext,
  SupportedLanguages,
  LanguagesFlags,
} from "../contexts/ContextProvider";
import "../scss/Select.scss";

const locales: lang[] = [
  { label: "🇺🇸", value: "en-US" },
  { label: "🇵🇹", value: "pt-BR" },
  { label: "🇪🇸", value: "es-ES" },
  { label: "🇪🇸", value: "ca-ES" },
  { label: "🇩🇪", value: "de-DE" },
  { label: "🇮🇹", value: "it-IT" },
  { label: "🇫🇷", value: "fr-FR" },
  { label: "🇸🇪", value: "sv-SE" },
  { label: "🇮🇩", value: "id-ID" },
  { label: "🇵🇱", value: "pl-PL" },
  { label: "🇯🇵", value: "ja-JP" },
  { label: "🇹🇼", value: "zh-TW" },
  { label: "🇨🇳", value: "zh-CN" },
  { label: "🇰🇷", value: "ko-KR" },
  { label: "🇹🇭", value: "th-TH" },
  { label: "🇳🇱", value: "nl-NL" },
  { label: "🇭🇺", value: "hu-HU" },
  { label: "🇻🇳", value: "vi-VN" },
  { label: "🇨🇿", value: "cs-CZ" },
  { label: "🇩🇰", value: "da-DK" },
  { label: "🇫🇮", value: "fi-FI" },
  { label: "🇺🇦", value: "uk-UA" },
  { label: "🇬🇷", value: "el-GR" },
  { label: "🇷🇴", value: "ro-RO" },
  { label: "🇳🇴", value: "nb-NO" },
  { label: "🇸🇰", value: "sk-SK" },
  { label: "🇹🇷", value: "tr-TR" },
  { label: "🇷🇺", value: "ru-RU" },
];

const LanguageSelect = (props: { className?: string }) => {
  const { setCurrLanguage } = React.useContext(PexelsContext);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event) {
      const option = event.target as { value: SupportedLanguages };
      setCurrLanguage(option.value);
    }
  };
  return (
    <select
      onChange={onChange}
      className={`select__container ${props.className}`}
      name="LanguageSelect"
      id="LanguageSelect"
    >
      {locales.map((elem, key) => {
        return (
          <option key={key} className="select__option" value={elem.value}>
            {elem.label}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSelect;

type lang = {
  label: LanguagesFlags;
  value: SupportedLanguages;
};
