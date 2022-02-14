import React from "react";
// import{ Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: "32px" }} className="wine">
      <div>
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
