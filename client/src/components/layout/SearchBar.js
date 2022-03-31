import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs, clearSearch } from "../../actions/logAction";

const SearchBar = ({ searchLogs, clearSearch }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  const closeSearch = (e) => clearSearch();
  return (
    <nav style={{ marginBottom: "30px" }} className="green">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={text}
              placeholder="Search Logs"
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={closeSearch}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs, clearSearch })(SearchBar);
