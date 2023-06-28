import "../scss/Navigation.scss";
import { useEffect, useContext } from "react";
import { useForm, Resolver } from "react-hook-form";
import { PexelsContext } from "../contexts/ContextProvider";
import { createClient } from "pexels";

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
  const { query, setQuery, json, setJson } = useContext(PexelsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    setQuery(data.query);
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
      <a href="https://www.pexels.com">
        <img
          style={{ height: "9rem", padding: "0 8px 0" }}
          src="https://images.pexels.com/lib/api/pexels-white.png"
        />
      </a>
      <form onSubmit={onSubmit}>
        <input
          {...register("query")}
          placeholder={
            (errors?.query && errors.query.message) || "Search for..."
          }
        />
      </form>
    </nav>
  );
}
