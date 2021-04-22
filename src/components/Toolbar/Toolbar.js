import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import Searchfield from "../Searchfield/Searchfield";

const Toolbar = ({ type, label = "Nuevo", atras = {} }) => {
  const history = useHistory();

  const push = (type) => {
    switch (type) {
      case "usuarios":
        return history.push("/configuracion/nuevo");
      case "usuariosNot":
        return history.push("/configuracion/rhh");
      default:
        return history.push(`/configuracion/${type}/nuevo`);
    }
  };

  return (
    <Grid
      style={{
        display: "flex",
        width: "100%",
      }}
      container
      spacing
    >
      <Cajas>
        {/* izquierda */}
        {atras.donde && (
          <CustomButton
            variant="contained"
            color="default"
            style={{ width: "80px" }}
            onClick={() => history.push(atras.donde)}
          >
            Atras
          </CustomButton>
        )}
        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => push(type)}
          style={{ width: "180px" }}
        >
          {label}
        </CustomButton>
      </Cajas>
      <Cajas>
        {/* derecha */}
        <Searchfield />
      </Cajas>
    </Grid>
  );
};

const Cajas = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-around",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </Grid>
  );
};

export default Toolbar;
