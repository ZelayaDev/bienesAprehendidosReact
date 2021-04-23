import React, { useState, useContext } from "react";
import {
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./styles";
import BackdropSpinner from "../../components/BackDrop/backDrop";
import { errorToast, msgWarn } from "../../functions/utils/utils";
import { loginUser, getUserData } from "../../functions/fetch/login/consultas";
import { UserContext } from "../../context/user/UserContext";
import logo from "../../assets/escudo_actual.png";

function Login() {
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  const [Cedula, setCedula] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const id_app = parseInt(process.env.REACT_APP_ID_APP);
  const handleOnChangeCedula = (e) => setCedula(e.target.value);
  const handleOnChangePassword = (e) => setPassword(e.target.value);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (user !== null) {
      setUser(null);
    }

    try {
      const query = await loginUser(Cedula, Password);
      if (query.accessToken) {
        localStorage.setItem("token", query.accessToken);
        const user = await getUserData(id_app, history);
        if (user[0]?.id_app === id_app && user[0]?.estado === 1) {
          setUser(user[0]);
          history.push("/");
        } else {
          errorToast(
            "Usuario no tiene acceso a esta aplicacion, contacte al administrador.",
          );
        }
      } else {
        errorToast("SERVER ERROR");
      }
    } catch (error) {
      msgWarn(`ERROR: ${error}`);
    }

    setIsLoading(false);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <BackdropSpinner isLoading={isLoading} />
      {localStorage.token && <Redirect to="/" />}
      <Helmet title="Iniciar sesión" />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="Logo" src={logo} className={classes.logo} />
          <Typography component="h1" variant="h2" className={classes.logoLabel}>
            Bienes Aprehendidos
          </Typography>
          <form className={classes.form} onSubmit={handleOnSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Cedula"
              autoComplete="cedula"
              value={Cedula}
              onChange={handleOnChangeCedula}
              autoFocus
              name="cedula"
              className={classes.inputs}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              value={Password}
              name="password"
              className={classes.inputs}
              onChange={handleOnChangePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ fontFamily: "Audiowide", fontWeight: "cursive" }}
            >
              Entrar
            </Button>
            <Box mt={5}>
              <Typography
                variant="body2"
                color="textPrimary"
                align="center"
                style={{ fontFamily: "Audiowide", fontWeight: "cursive" }}
              >
                {`Copyright ${`Telematica`} © `}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
