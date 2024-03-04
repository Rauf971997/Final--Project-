import React from "react";
import { Form, useSubmit } from "react-router-dom";

const SearchForm = ({ q }) => {
  const submit = useSubmit();

  return (
    <Form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search tasks"
        placeholder="Search"
        type="search"
        name="q"
        defaultValue={q}
        onChange={(event) => {
          const isFirstSearch = q == null;
          submit(event.currentTarget.form, {
            replace: !isFirstSearch,
          });
        }}
      />
      <div className="sr-only" aria-live="polite"></div>
    </Form>
  );
};

export default SearchForm;
