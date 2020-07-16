import { useState } from "react";
import { useRouter } from "next/router";

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
      <h1>Educational Qualifications</h1>
      <div>
        Qualifications
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
        Specialization
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      <h1>Current Work Experience</h1>
      <div>
        Current Organization
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
        Current Designation
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
        From
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
        To
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
        Job Profile
        <input
          type="text"
          name="q"
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      <h1>Work Experience</h1>
      <div>
        Organization
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
        Designation
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
        From
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
        To
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
        Job Profile
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
