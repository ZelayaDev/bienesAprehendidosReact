import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import Searchfield from "../Searchfield/Searchfield";

const Toolbar = ({ type }) => {
  const history = useHistory();

  const push = (type) => {
    if (type === "usuarios") {
      history.push("/configuracion/nuevo");
    } else {
      history.push(`/configuracion/${type}/nuevo`);
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
        <CustomButton onClick={() => push(type)} style={{ width: "240px" }}>
          Nuevo
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
