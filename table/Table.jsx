import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import data from '../components/data.json'; // Importing the JSON file

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "Salary",
  },
];

const Table = () => {
  const { data: tableData } = data; // Destructure the data array from the imported object

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data: tableData, // Use the extracted data
      initialState: { pageSize: 2 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="flex flex-col items-center">
      <table {...getTableProps()} className="bg-gray-500 text-center w-full p-4">
        <thead className="bg-red-500">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (
                    <span>{column.isSortedDesc ? " ↓" : " ↑"}</span>
                  ) : (
                    ""
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="ml-6">
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-700">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end mr-4 space-x-2 mt-4">
        <button
          onClick={() => gotoPage(0)}
          disabled={pageIndex === 0}
          className="rounded-full w-20 hover:bg-gray-500 bg-gray-200 border border-gray-500"
        >
          Start
        </button>
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="rounded-full w-20 hover:bg-gray-500 bg-gray-200 border border-gray-500"
        >
          Previous
        </button>
        <span className="w-20 text-center">
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="rounded-full w-20 hover:bg-gray-500 bg-gray-200 border border-gray-500"
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
          className="rounded-full w-20 hover:bg-gray-500 bg-gray-200 border border-gray-500"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Table;
