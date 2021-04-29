import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { TableRow, TableCell, Chip } from "@material-ui/core";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

import BackdropSpinner from "../../../components/BackDrop/backDrop";

import { getGridRegiones } from "../../../functions/fetch/configuracion/regiones/consultas";

import {
  errorToast,
  msgSuccess,
  msgWarn,
} from "../../../functions/utils/utils";

import ErrorMessage from "../../503/503";

function Regiones() {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [atrib, setAtrib] = useState("Id_Region_Aeronaval");
  const [order, setOrder] = useState("asc");
  const [text, setText] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleChangePage = (page) => setPage(page + 1);
  const handleChangeLimit = (limit) => setLimit(limit);
  const handleChangeAtrib = (atrib) => setAtrib(atrib);
  const handleChangeOrder = (order) => setOrder(order);

  const columns = [
    { tittle: "Region Ref", atributo: "Id_Region_Aeronaval" },
    { tittle: "Nombre", atributo: "Nombre_Region" },
    { tittle: "Estatus", atributo: "Estatus_Region" },
  ];

  const handleOnSearchField = (e) => {
    setSearchField(e.target.value);
  };

  const FiltrarContent = () => {
    setText(searchField);
  };

  const { isLoading, data, refetch, error } = useQuery(
    ["Regiones", page, limit, atrib, order, text],
    () => getGridRegiones(page, limit, atrib, order, text, history),
    {
      staleTime: 180000,
    },
  );

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <BackdropSpinner isLoading={isLoading} />;
  }

  return (
    <>
      {/* Grid */}
      <Route
        exact
        path="/configuracion/regiones"
        render={(props) => (
          <Grid
            page={page}
            limit={limit}
            atrib={atrib}
            order={order}
            columns={columns}
            total={data.total}
            handleChangePage={handleChangePage}
            handleChangeLimit={handleChangeLimit}
            handleChangeAtrib={handleChangeAtrib}
            handleChangeOrder={handleChangeOrder}
            titulo="Regiones"
            descripcion="Pantalla regiones para la aplicacion de bienes aprendidos"
            type="regiones"
            label="Nuevo"
            onChangeSearch={handleOnSearchField}
            searchField={searchField}
            onEnterSearch={FiltrarContent}
            {...props}
          >
            {data.results.map((fila, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Chip
                    color="primary"
                    label={fila.Id_Region_Aeronaval}
                    clickable
                    onClick={() =>
                      history.push(
                        `/configuracion/regiones/editar/${fila.Id_Region_Aeronaval}`,
                      )
                    }
                  />
                </TableCell>
                <TableCell align="left">{fila.Nombre_Region}</TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "bold",
                    color: fila.Estatus_Region ? "green" : "red",
                  }}
                >
                  {fila.Estatus_Region ? "Activo" : "Inactivo"}
                </TableCell>
              </TableRow>
            ))}
          </Grid>
        )}
      />
      {/* nuevo */}
      <Route path="/configuracion/regiones/nuevo" component={Nuevo} />
      {/* modificar  */}
      <Route path="/configuracion/regiones/editar/:id" component={Editar} />
    </>
  );
}

export default Regiones;
