import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout/";
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

function NotFoundPage() {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: Esta página no existe.
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            Intentaste alguna ruta con equivocada o viniste aquí por error. Sea
            lo que sea, intente usar la navegación
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={imagen}
            />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default NotFoundPage;
