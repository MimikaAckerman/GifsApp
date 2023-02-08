import React, { useState } from "react";
import styled from "styled-components";
import "./style/style.css";
const Search = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const SearchGif = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    setCategory(value);
    setValue("");
  };

  return (
    <>
    
      <SearchContainer>
        <div class="container">
          <form onSubmit={SearchGif}>
            {/* {value} */}
            <input
              type="text"
              placeholder="Search Gifs..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
              style={{ fontSize: 29 }}
            />
          </form>
          {error ? (
            <p className="error">El campo no puede estar vacio...</p>
          ) : (
            ""
          )}

          <i></i>
        </div>
      </SearchContainer>
    </>
  );
};

export default Search;

const SearchContainer = styled.div`
  margin-top: 2rem;
  margin-left: 3rem;
  position: absolute;
`;
