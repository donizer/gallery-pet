import "../scss/Navigation.scss";
import { useEffect, useContext } from "react";
import { useForm, Resolver } from "react-hook-form";
import { PexelsContext } from "../contexts/ContextProvider";
import { createClient, PhotosWithTotalResults } from "pexels";
import BurgerButton from "./BurgerButton";
import LanguageSelect from "./LanguageSelect";

const client = createClient(
  "qaxLvqCpYIxuOSlbBG6BYEoZup3UZpB8a7PZ2JGEiWO7CPzmmQbQDGp7"
);

type FormValues = {
  query: string;
};

const resolver: Resolver<FormValues> = async (values: FormValues) => {
  return {
    values: values.query ? values : {},
    errors: !values.query
      ? {
          query: {
            type: "required",
            message: "Input required",
          },
        }
      : {},
  };
};

export default function Navigation() {
  const {
    query,
    setQuery,
    json,
    setJson,
    isMobileMenuActive,
    setMobileMenuActive,
    currLanguage,
  } = useContext(PexelsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    setQuery(data.query);
    setMobileMenuActive(false);
  });

  useEffect(() => {
    if (typeof query === "string" && query !== null) {
      client.photos
        .search({ query: query, per_page: 80, locale: currLanguage })
        .then((photos) => {
          setJson(photos);
        });
    }
  }, [query, setJson, currLanguage]);

  useEffect(() => {
    if (json) {
      const response = json as PhotosWithTotalResults;
      console.log(response.total_results);
    }
  }, [json]);

  return (
    <nav className="nav">
      <div className="logo ">DR</div>
      <form
        onSubmit={onSubmit}
        className={`${isMobileMenuActive ? "active" : ""}`}
      >
        <input
          {...register("query")}
          placeholder={
            (errors?.query && errors.query.message) || "Search for..."
          }
        />
        <LanguageSelect className={"LanguageSelect"} />
      </form>
      <div className="Right">
        <BurgerButton />
      </div>
    </nav>
  );
}
