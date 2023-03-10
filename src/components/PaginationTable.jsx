import React, { useState } from "react";

const pageSize = 20;

const PaginationTable = ({ data, isFetching }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(data.length / pageSize);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
     {isFetching ? 'Loading...' :
     (<>
      <table border="1">
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item, i) => (
            <tr key={i}>
              <td>{item?.API}</td>
              <td>{item?.Description}</td>
              <td>{item?.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "24px" }}>
        {pageNumbers?.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            style={{ margin: "4px 4px", backgroundColor: `${pageNumber === currentPage ? '#8bc34a': ''}` }}
          >
            {pageNumber}
          </button>
        ))}
      </div></>)}
    </>
  );
};

export default PaginationTable;
