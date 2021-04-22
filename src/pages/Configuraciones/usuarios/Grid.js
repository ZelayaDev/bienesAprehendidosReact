import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";
import Container from "../../../components/Container/Container";

//componentes

import DataTable from "../../../components/DataTable/databable";

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
}) {
  return (
    <>
      <TituloDescripcion titulo={titulo} descripcion={descripcion} />
      <Toolbar type={type} label={label} atras={atras} />
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
