import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { TableRow, TableCell, Chip } from "@material-ui/core";

// plantilla de grud

import Grid from "./Grid";
import RHH from "./RHH";
import Editar from "./Editar";
import BackdropSpinner from "../../../components/BackDrop/backDrop";

//fetch functions

import {
  getGridUsuarios,
  getGridUsuariosNoMatriculados,
} from "../../../functions/fetch/fetch";

function Usuario() {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [atrib, setAtrib] = useState("nombre");
  const [order, setOrder] = useState("asc");

  const columnsUsuarios = [
    { tittle: "Cedula", atributo: "cedula" },
    { tittle: "Nombre", atributo: "nombre" },
    { tittle: "Permiso", atributo: "permiso" },
  ];
  const columnsUsuariosNot = [
    { tittle: "Acción", atributo: "cedula" },
    { tittle: "Cedula", atributo: "cedula" },
    { tittle: "Nombre", atributo: "nombre" },
    { tittle: "Dirección", atributo: "direccion" },
  ];

  const handleChangePage = (page) => setPage(page + 1);
  const handleChangeLimit = (limit) => setLimit(limit);
  const handleChangeAtrib = (atrib) => setAtrib(atrib);
  const handleChangeOrder = (order) => setOrder(order);

  const {
    isLoading: cargandoUsuarios,
    data: dataUsuarios,
    refetch: refetchUsuarios,
  } = useQuery(
    ["Usuarios", page, limit, atrib, order],
    () => getGridUsuarios(page, limit, atrib, order),
    {
      staleTime: 180000,
    },
  );

  const {
    isLoading: cargandoUsuariosNot,
    data: dataUsuariosNot,
    refetch: refetchUsuariosNot,
  } = useQuery(
    ["UsuariosNoMatriculados", page, limit, atrib, order],
    () => getGridUsuariosNoMatriculados(page, limit, atrib, order),
    {
      staleTime: 180000,
    },
  );

  return (
    <>
      {/* usuarios del sistema */}
      <Route
        exact
        path="/configuracion"
        render={(props) =>
          cargandoUsuarios ? (
            <BackdropSpinner isLoading={cargandoUsuarios} />
          ) : (
            <Grid
              page={page}
              limit={limit}
              atrib={atrib}
              order={order}
              columns={columnsUsuarios}
              total={dataUsuarios.total}
              handleChangePage={handleChangePage}
              handleChangeLimit={handleChangeLimit}
              handleChangeAtrib={handleChangeAtrib}
              handleChangeOrder={handleChangeOrder}
              titulo="Usuarios"
              descripcion="Pantalla usuarios para la aplicacion de bienes aprendidos"
              type="usuarios"
              label="Matricular"
              {...props}
            >
              {dataUsuarios.results.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left">
                    <Chip
                      color="primary"
                      label={row.cedula}
                      clickable
                      onClick={() =>
                        history.push(`/configuracion/editar/${row.id_usuario}`)
                      }
                    />
                  </TableCell>
                  <TableCell align="left">{`${row.nombre.split(" ")[0]} ${
                    row.apellido.split(" ")[0]
                  }`}</TableCell>
                  <TableCell align="left">{row.permiso}</TableCell>
                </TableRow>
              ))}
            </Grid>
          )
        }
      />
      {/* usuarios no matriculados  */}
      <Route
        path="/configuracion/nuevo"
        render={(props) =>
          cargandoUsuariosNot ? (
            <BackdropSpinner isLoading={cargandoUsuariosNot} />
          ) : (
            <Grid
              page={page}
              limit={limit}
              atrib={atrib}
              order={order}
              columns={columnsUsuariosNot}
              total={dataUsuariosNot.total}
              handleChangePage={handleChangePage}
              handleChangeLimit={handleChangeLimit}
              handleChangeAtrib={handleChangeAtrib}
              handleChangeOrder={handleChangeOrder}
              titulo="Usuarios no matriculados"
              descripcion="Pantalla de matricula de usuarios para bienes aprendidos."
              type="usuariosNot"
              label="Agregar desde RHH"
              atras={{
                donde: "/configuracion",
              }}
              {...props}
            >
              {dataUsuariosNot.results.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left">
                    <Chip color="primary" label="Matricular" clickable />
                  </TableCell>
                  <TableCell align="left">{row.cedula}</TableCell>
                  <TableCell align="left">{`${row.nombre.split(" ")[0]} ${
                    row.apellido.split(" ")[0]
                  }`}</TableCell>
                  <TableCell align="left">{row.direccion}</TableCell>
                </TableRow>
              ))}
            </Grid>
          )
        }
      />
      {/* pagina de matricula de recursos humanos */}
      <Route path="/configuracion/rhh" render={(props) => <RHH />} />
      {/* modificar */}
      <Route path="/configuracion/editar/:id" component={Editar} />
    </>
  );
}

export default Usuario;
