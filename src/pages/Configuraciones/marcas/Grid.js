import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";
import Container from "../../../components/Container/Container";

//componentes

import DataTable from "../../../components/DataTable/databable";
import BackdropSpinner from "../../../components/BackDrop/backDrop";

function Grid() {
  //local state

  const [rows, setRows] = useState({});

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [atrib, setAtrib] = useState("Id_Marcas_Aeronaval");
  const [order, setOrder] = useState("desc");

  //plantillas de columnas

  const columns = [
    { tittle: "Marca Ref", atributo: "Id_Marcas_Aeronaval" },
    { tittle: "Medio", atributo: "medio" },
    { tittle: "Nombre", atributo: "Nombre_Marca" },
    { tittle: "Estatus", atributo: "Estatus_Marca" },
  ];

  // funciones

  const handleChangePage = (page) => setPage(page + 1);
  const handleChangeLimit = (limit) => setLimit(limit);
  const handleChangeAtrib = (atrib) => setAtrib(atrib);
  const handleChangeOrder = (order) => setOrder(order);

  //destructuracion de los datos de la fuente

  const { results } = rows;
  const { total } = rows;
  return (
    <>
      <TituloDescripcion
        titulo="Marcas"
        descripcion="Pantalla de modificacion y creacion de nuevas Marcas."
      />
      <Toolbar type="marcas" />
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
        ></DataTable>
      </Container>
    </>
  );
}

export default Grid;
