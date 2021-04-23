import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import {
  Card,
  CardContent,
  Button,
  CardHeader,
  Typography,
  Select,
  CardActions,
  MenuItem,
} from "@material-ui/core";

//componentes

import Container from "../../../components/Container/Container";
import {
  Searchfield,
  ContentBox,
  ContentCard,
} from "../../../components/Searchfield/Searchfield";
import {
  getRHHusersByText,
  getDirecciones,
  getDepartamentos,
  guardarUsuarioDesdeRHH,
} from "../../../functions/fetch/configuracion/usuarios/consultas";
import {
  msgWarn,
  msgSuccess,
  errorToast,
} from "../../../functions/utils/utils";

function RHH({ refetchUsuariosNot }) {
  const history = useHistory();
  const [selectedUser, setSelectedUser] = useState({
    cedula: "",
    nombre: "",
    id_direccion: "",
    id_departamento: "",
  });
  const [users, setUsers] = useState([]);
  const [selectData, setSelectData] = useState({
    direcciones: [],
    departamentos: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSearchField = async (e) => {
    const text = e.target.value;
    if (text.length > 3) {
      try {
        const data = await getRHHusersByText(text, history);
        setUsers(data);
      } catch (error) {
        msgWarn(`No hay conexion... ${error}`);
      }
    } else {
      setUsers([]);
    }
  };

  const handleOnGuardar = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const data = await guardarUsuarioDesdeRHH(selectedUser, history);

      if (data === "usuario creado") {
        msgSuccess(data);
        setSelectedUser({
          ...selectedUser,
          cedula: "",
          nombre: "",
          id_direccion: "",
          id_departamento: "",
        });
        refetchUsuariosNot();
      } else {
        errorToast(data);
      }
    } catch (error) {
      msgWarn(`No hay conexion... ${error}`);
    }

    setIsLoading(false);
  };

  const getDataDepartamentos = async (id_direccion) => {
    const data = await getDepartamentos(parseInt(id_direccion), history);
    setSelectData({ ...selectData, departamentos: data });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDirecciones(history);
      setSelectData({ ...selectData, direcciones: data });
    };

    try {
      getData();
    } catch (error) {
      msgWarn(`No hay conexion... ${error}`);
    }
  }, [history]);

  return (
    <>
      <TituloDescripcion
        titulo="Buscar en recursos humanos"
        descripcion="Pantalla de matrícula en la base de datos de usuarios de aplicaciones del SENAN."
      />
      <Button
        variant="contained"
        color="default"
        style={{ width: "80px", margin: "1rem" }}
        onClick={() => history.push("/configuracion/nuevo")}
      >
        Atras
      </Button>
      <Container padding={10} style={{ position: "relative", padding: "1rem" }}>
        <Searchfield onChange={handleOnSearchField} />
        <ContentBox>
          {users.length ? (
            <ContentCard>
              {users.map((item) => (
                <Button
                  variant="contained"
                  color="default"
                  style={{ margin: ".25rem" }}
                  onClick={() => {
                    setSelectedUser({
                      ...selectedUser,
                      cedula: item.u_cedula,
                      nombre: `${item.u_nombre} ${item.u_apellido}`,
                    });
                    setUsers([]);
                  }}
                >{`${item.u_cedula} ${item.u_nombre} ${item.u_apellido}`}</Button>
              ))}
            </ContentCard>
          ) : (
            ""
          )}
        </ContentBox>
      </Container>
      {selectedUser.cedula.trim().length ? (
        <Card style={{ minWidth: "40ch", margin: "2rem", padding: "1rem" }}>
          <CardHeader
            title="Informacion general"
            subheader="Usuario selecionado:"
          />
          <form onSubmit={(event) => handleOnGuardar(event)}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justiftyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Cedula
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {selectedUser.cedula}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Nombre completo:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {selectedUser.nombre}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Direccion:
              </Typography>

              <div>
                <Select
                  labelId="direccion-select-label"
                  value={selectedUser.id_direccion}
                  onChange={(e) => {
                    setSelectedUser({
                      ...selectedUser,
                      id_direccion: e.target.value,
                      id_departamento: "",
                    });
                    getDataDepartamentos(e.target.value);
                  }}
                  autoWidth
                >
                  {selectData.direcciones.length ? (
                    selectData.direcciones.map((direccion) => {
                      return (
                        <MenuItem value={direccion.id} key={direccion.id}>
                          {direccion.nombre}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem>No hay direcciones disponibles</MenuItem>
                  )}
                </Select>
              </div>
              <Typography variant="h6" gutterBottom>
                Departamento:
              </Typography>
              <div>
                <Select
                  labelId="departamento-select-label"
                  value={selectedUser.id_departamento}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      id_departamento: e.target.value,
                    })
                  }
                  autoWidth
                >
                  {selectData.departamentos.length ? (
                    selectData.departamentos.map((departamento) => (
                      <MenuItem value={departamento.id} key={departamento.id}>
                        {departamento.nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>No hay departamentos disponibles</MenuItem>
                  )}
                </Select>
              </div>
            </CardContent>
            <CardActions>
              {!isLoading ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={
                    selectedUser.id_direccion && selectedUser.id_departamento
                      ? false
                      : true
                  }
                >
                  Guardar
                </Button>
              ) : (
                "cargando..."
              )}
            </CardActions>
          </form>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}

export default RHH;
