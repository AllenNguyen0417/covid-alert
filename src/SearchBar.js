import { useState } from "react";

export function SearchBar({ callback }) {
  const [innerValue, setInnerValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(innerValue);
  };

  return (
    <form clasName="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        classname="searchBarInput"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
      />
    </form>
  );
}
