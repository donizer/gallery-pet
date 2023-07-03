import "../scss/Navigation.scss";
import { useEffect, useContext } from "react";
import { useForm, Resolver } from "react-hook-form";
import { PexelsContext } from "../contexts/ContextProvider";
import { createClient } from "pexels";
import BurgerButton from "./BurgerButton";

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
      client.photos.search({ query: query, per_page: 80 }).then((photos) => {
        setJson(photos);
      });
    }
  }, [query, setJson]);

  useEffect(() => {
    console.log(json);
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
      </form>
      <div className=" Right">
        <BurgerButton />
      </div>
    </nav>
  );
}
