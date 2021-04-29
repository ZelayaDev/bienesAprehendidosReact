import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";
import Container from "../../../components/Container/Container";

//componentes

import DataTable from "../../../components/DataTable/databable";
import { Searchfield } from "../../../components/Searchfield/Searchfield";

function Grid({
  page,
  limit,
  atrib,
  order,
  columns,
  total,
  handleChangePage,
  handleChangeLimit,
  handleChangeAtrib,
  handleChangeOrder,
  titulo,
  descripcion,
  type,
  children,
  label,
  atras,
  onChangeSearch,
  searchField,
  onEnterSearch,
}) {
  return (
    <>
      <TituloDescripcion titulo={titulo} descripcion={descripcion} />
      <Toolbar type={type} label={label} atras={atras}>
        <Searchfield
          onChange={(e) => {
            onChangeSearch(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEnterSearch();
            }
          }}
          value={searchField}
        />
      </Toolbar>
      <Container padding={10}>
        <DataTable
          columns={columns}
          total={total}
          page={page}
          limit={limit}
          handleChangeLimit={handleChangeLimit}
          handleChangePage={handleChangePage}
          atrib={atrib}
          order={order}
          handleChangeAtrib={handleChangeAtrib}
          handleChangeOrder={handleChangeOrder}
        >
          {children}
        </DataTable>
      </Container>
    </>
  );
}

export default Grid;
