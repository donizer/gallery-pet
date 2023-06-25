import "../scss/Nav.scss";
import { useEffect, useContext } from "react";
import { useForm, Resolver } from "react-hook-form";
import { PexelsContext } from "../contexts/ContextProvider";
import { createClient } from "pexels";

const client = createClient(
  "qaxLvqCpYIxuOSlbBG6BYEoZup3UZpB8a7PZ2JGEiWO7CPzmmQbQDGp7"
);
// const query = "cold winter looks crazy";

// client.photos.search({ query, per_page: 15 }).then((photos) => {
//   console.log(photos);
// });
// client.photos.curated({ per_page: 15 }).then((photos) => {
//   console.log(photos);
// });
// client.photos.random().then((photos) => {
//   console.log(photos);
// });
// client.photos.show({ id: 16790833 }).then((photos) => {
//   console.log(photos);
// });

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
  const { query, setQuery, json, setJson } =
    useContext(PexelsContext);

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
      client.photos.search({ query: query, per_page: 15 }).then((photos) => {
        setJson(photos);
      });
    }

  }, [query, setJson]);

  useEffect(() => {
    console.log(json);
  }, [json]);

  return (
    <nav className="nav">
      <div className="logo">DR</div>
      <form onSubmit={onSubmit}>
        <input
          {...register("query")}
          placeholder={
            (errors?.query && errors.query.message) || "Search for..."
          }
        />
      </form>
      <div>
        <p>{}</p>
      </div>
    </nav>
  );
}
