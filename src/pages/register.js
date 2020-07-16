import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const preventDefault = f => e => {
  e.preventDefault();
  f(e);
};

export default ({ action = "/search" }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleParam = setValue => e => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: { q: query }
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Username and Password</h1>
      <div>
        name
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Email
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Password
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Confirm password
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <h1>Contact Information</h1>
      <div>
        Title
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Full name
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Date of birth
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Country
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        State
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        City
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Phone no.
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Mobile no.
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <h1>Breif Synopsis Of Your Resume</h1>
      <div>
        Total Experience
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Key Skills
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div>
        Functional Area
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
