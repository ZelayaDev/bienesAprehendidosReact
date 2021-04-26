import React, { useState, useEffect } from "react";
import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import {
  Button,
  CardHeader,
  Typography,
  Select,
  CardActions,
  MenuItem,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Box,
  InputLabel,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Container from "../../../components/Container/Container";
import { getDetallesUsuario } from "../../../functions/fetch/configuracion/usuarios/consultas";
import {
  msgWarn,
  msgSuccess,
  errorToast,
} from "../../../functions/utils/utils";

function Editar({ match, refetchUsuarios }) {
  const { id: id_usuario } = match.params;
  const history = useHistory();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [permiso, setPermiso] = useState(0);
  const [userData, setUserData] = useState({
    password: "",
    password_match: "",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getDetallesUsuario(id_usuario, history);
      setUser(data);
      setPermiso(data.estado);
    };
    try {
      getData();
    } catch (error) {
      msgWarn(`No hay conexion... ${error}`);
    }
  }, [id_usuario, history]);

  console.log(user);

  return (
    <>
      <TituloDescripcion
        titulo="Perfil de usuario"
        descripcion="Pantalla de administración y modificación de generales del usuario."
      />
      <Button
        variant="contained"
        color="default"
        style={{ width: "80px", margin: "1rem" }}
        onClick={() => history.push("/configuracion")}
      >
        Atras
      </Button>
      <Container padding={10}>
        <Grid xs={12}>
          <Card>
            <CardContent
              style={{
                display: "flex",
                justiftyContent: "center",
                alignItems: "flex-start",
                padding: "2rem",
              }}
            >
              <Grid container spacing={2}>
                <Grid xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Cedula
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    {user.cedula}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Nombre completo:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    {`${user.nombre} ${user.apellido}`}
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Direccion:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    {user.direccion}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Permisos:
                  </Typography>
                  <div>
                    <Select
                      value={permiso}
                      onChange={(e) => setPermiso(parseInt(e.target.value))}
                      autoWidth
                    >
                      <MenuItem value={1}>Administrador</MenuItem>
                      <MenuItem value={0}>Usuario regular</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                //className={classes.submit}
              >
                Guardar Detalles
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid xs={6}>
          {/* <Card>
            <CardContent>
              <h3>contenido</h3>
              <h3>contenido</h3>
              <h3>contenido</h3>
              <h3>contenido</h3>
              <h3>contenido</h3>
            </CardContent>
            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                //className={classes.submit}
              >
                Guardar Detalles
              </Button>
            </Box>
          </Card> */}
        </Grid>
      </Container>
    </>
  );
}

export default Editar;
