import React from "react";

function Pagination({ currentPage, pageCount, onClick }) {
  return (
    <div className="pagination p-2">
      <button disabled={currentPage === 1} onClick={(e) => onClick(e, 1)}>
        {"<<"}
      </button>
      <button disabled={currentPage === 1} onClick={(e) => onClick(e, currentPage - 1)}>
        {"<"}
      </button>
      {Array.from({ length: pageCount }, (v, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={(e) => onClick(e, page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button disabled={currentPage === pageCount} onClick={(e) => onClick(e, currentPage + 1)}>
        {">"}
      </button>
      <button disabled={currentPage === pageCount} onClick={(e) => onClick(e, pageCount)}>
        {">>"}
      </button>
    </div>
  );
}

export default Pagination;
