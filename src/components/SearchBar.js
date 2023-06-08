import React from "react";

function SearchBar({ searchText, onSearch }) {
  return (
    <div className="form-outline">
      <input
        type="search"
        className="form-control"
        id="datatable-search-input"
        placeholder="Search"
        value={searchText}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
