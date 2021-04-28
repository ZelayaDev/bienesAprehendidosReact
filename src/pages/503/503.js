import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import imagen from "../../assets/Spotting bugs.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 560,
  },
}));

function ErrorMessage() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h1">
          Error 503: Sin conexion al servidor.
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          Para solicitar ayuda referente a este problema, contacte a telemática.
        </Typography>
        <Box textAlign="center">
          <img alt="Under development" className={classes.image} src={imagen} />
        </Box>
      </Container>
    </Box>
  );
}

export default ErrorMessage;
