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
  matricularAuthDB,
} from "../../../functions/fetch/configuracion/usuarios/consultas";

import {
  errorToast,
  msgSuccess,
  msgWarn,
} from "../../../functions/utils/utils";

import ErrorMessage from "../../503/503";

function Usuario() {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [atrib, setAtrib] = useState("nombre");
  const [order, setOrder] = useState("asc");
  const [text, setText] = useState("");
  const [searchField, setSearchField] = useState("");

  const columnsUsuarios = [
    { tittle: "Cedula", atributo: "cedula" },
    { tittle: "Nombre", atributo: "nombre" },
    { tittle: "Permiso", atributo: "permiso" },
  ];
  const columnsUsuariosNot = [
    { tittle: "Acción", atributo: "cedula" },
    { tittle: "Cedula", atributo: "cedula" },
    { tittle: "Nombre", atributo: "nombre" },
  ];

  const handleChangePage = (page) => setPage(page + 1);
  const handleChangeLimit = (limit) => setLimit(limit);
  const handleChangeAtrib = (atrib) => setAtrib(atrib);
  const handleChangeOrder = (order) => setOrder(order);

  const handleMatricular = async (id_user, id_lista) => {
    try {
      const query = await matricularAuthDB(id_user, id_lista, history);
      if (query === "usuario matriculado.") {
        refetchUsuarios();
        refetchUsuariosNot();
        msgSuccess("Matricula Exitosa");
      } else {
        errorToast(query);
      }
    } catch (error) {
      msgWarn(error);
    }
  };

  const handleOnSearchFieldNoMatriculado = (e) => {
    setSearchField(e.target.value);
  };

  const handleOnSearchFieldUsuarios = (e) => {
    setSearchField(e.target.value);
  };

  const FiltrarContent = () => {
    setText(searchField);
  };

  const {
    isLoading: cargandoUsuarios,
    data: dataUsuarios,
    refetch: refetchUsuarios,
    error: errorUsuarios,
  } = useQuery(
    ["Usuarios", page, limit, atrib, order, text],
    () => getGridUsuarios(page, limit, atrib, order, text, history),
    {
      staleTime: 180000,
    },
  );

  const {
    isLoading: cargandoUsuariosNot,
    data: dataUsuariosNot,
    refetch: refetchUsuariosNot,
    error: errorUsuariosNot,
  } = useQuery(
    ["UsuariosNoMatriculados", page, limit, atrib, order, text],
    () =>
      getGridUsuariosNoMatriculados(page, limit, atrib, order, text, history),
    {
      staleTime: 180000,
    },
  );

  if (errorUsuarios || errorUsuariosNot) {
    return <ErrorMessage />;
  }

  if (cargandoUsuarios || cargandoUsuariosNot) {
    return (
      <BackdropSpinner isLoading={cargandoUsuarios || cargandoUsuariosNot} />
    );
  }

  return (
    <>
      {/* usuarios del sistema */}
      <Route
        exact
        path="/configuracion"
        render={(props) => (
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
            onChangeSearch={handleOnSearchFieldUsuarios}
            searchField={searchField}
            onEnterSearch={FiltrarContent}
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
                <TableCell align="left">{`${row.nombre} ${row.apellido}`}</TableCell>
                <TableCell align="left">{row.permiso}</TableCell>
              </TableRow>
            ))}
          </Grid>
        )}
      />
      {/* usuarios no matriculados  */}
      <Route
        path="/configuracion/nuevo"
        render={(props) => (
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
            onChangeSearch={handleOnSearchFieldNoMatriculado}
            searchField={searchField}
            onEnterSearch={FiltrarContent}
            {...props}
          >
            {dataUsuariosNot.results.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Chip
                    color="primary"
                    label="Matricular"
                    clickable
                    onClick={() =>
                      handleMatricular(row.id, process.env.REACT_APP_ID_LISTA)
                    }
                  />
                </TableCell>
                <TableCell align="left">{row.cedula}</TableCell>
                <TableCell align="left">{`${row.nombre} ${row.apellido}`}</TableCell>
              </TableRow>
            ))}
          </Grid>
        )}
      />
      {/* pagina de matricula de recursos humanos */}
      <Route
        path="/configuracion/rhh"
        render={(props) => (
          <RHH refetchUsuariosNot={refetchUsuariosNot} {...props} />
        )}
      />
      {/* modificar */}
      <Route
        path="/configuracion/editar/:id"
        render={(props) => (
          <Editar refetchUsuarios={refetchUsuarios} {...props} />
        )}
      />
    </>
  );
}

export default Usuario;
