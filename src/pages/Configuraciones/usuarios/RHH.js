import React from "react";
import { useHistory } from "react-router-dom";
import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
  CardActions,
  Select,
} from "@material-ui/core";

//componentes

import Container from "../../../components/Container/Container";
import Searchfield from "../../../components/Searchfield/Searchfield";

function RHH() {
  const history = useHistory();
  return (
    <>
      <TituloDescripcion
        titulo="Buscar en recursos humanos"
        descripcion="alguna descripcion"
      />
      <Button
        variant="contained"
        color="default"
        style={{ width: "80px", marginTop: "1rem", marginBottom: "1rem" }}
        onClick={() => history.push("/configuracion/nuevo")}
      >
        Atras
      </Button>
      <Container padding={10}>
        <Searchfield />
        <Card style={{ width: "450px", padding: "1rem", marginTop: "1rem" }}>
          <CardHeader
            title="Informacion general"
            subheader="Usuario selecionado:"
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justiftyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Cedula:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              8-850-1742
            </Typography>
            <Typography variant="h6" gutterBottom>
              Nombre completo:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Anthony Salvattore Cardoze Agrio
            </Typography>
            <Typography variant="h6" gutterBottom>
              Direccion:
            </Typography>
            <div>
              <Select
                labelId="direccion-select-label"
                //value={id_direccion}
                //onChange={handleOnChangeDireccion}
                autoWidth
              >
                {/* {direcciones && direcciones.length > 0 ? (
                        direcciones.map((direccion) => {
                          return (
                            <MenuItem value={direccion.id} key={direccion.id}>
                              {direccion.nombre}
                            </MenuItem>
                          );
                        })
                      ) : (
                        <MenuItem>No hay direcciones disponibles</MenuItem>
                      )} */}
              </Select>
            </div>
            <Typography variant="h6" gutterBottom>
              Departamento:
            </Typography>
            <div>
              <Select
                labelId="departamento-select-label"
                //value={id_departamento}
                //onChange={(e) => setIdDepartamento(e.target.value)}
                autoWidth
              >
                {/* {departamentos && departamentos.length > 0 ? (
                        departamentos.map((departamento) => (
                          <MenuItem
                            value={departamento.id}
                            key={departamento.id}
                          >
                            {departamento.nombre}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>No hay departamentos disponibles</MenuItem>
                      )} */}
              </Select>
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              Guardar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default RHH;
