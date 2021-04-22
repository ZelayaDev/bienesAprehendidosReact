import React, { memo } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

function DataTable({
  children,
  columns,
  total,
  page,
  limit,
  handleChangeLimit,
  handleChangePage,
  atrib,
  order,
  handleChangeAtrib,
  handleChangeOrder,
}) {
  return (
    <TableContainer component={Paper}>
      <TablePagination
        rowsPerPageOptions={[50, 100, 200]}
        labelRowsPerPage="Filas por página"
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}-${to} de ${count ? count : 0}`;
        }}
        component="div"
        count={total ? total : 0}
        rowsPerPage={limit}
        onChangeRowsPerPage={(event) =>
          handleChangeLimit(parseInt(event.target.value))
        }
        page={page - 1}
        onChangePage={(event, page) => {
          console.log("event.target.value: ", event.target);
          console.log("page: ", page);
          handleChangePage(page);
        }}
      />
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell align="left" key={column.tittle}>
                  <TableSortLabel
                    active={atrib === column.atributo ? true : false}
                    direction={order}
                    onClick={() => {
                      handleChangeAtrib(column.atributo);
                      handleChangeOrder(order === "desc" ? "asc" : "desc");
                    }}
                  >
                    {column.tittle}
                  </TableSortLabel>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[50, 100, 200]}
        labelRowsPerPage="Filas por página"
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}-${to} de ${count ? count : 0}`;
        }}
        component="div"
        count={total ? total : 0}
        rowsPerPage={limit}
        onChangeRowsPerPage={(event) =>
          handleChangeLimit(parseInt(event.target.value))
        }
        page={page - 1}
        onChangePage={(event, page) => handleChangePage(page)}
      />
    </TableContainer>
  );
}

export default memo(DataTable);
