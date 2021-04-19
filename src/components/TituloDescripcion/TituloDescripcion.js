import React from "react";
import { Typography } from "@material-ui/core";

function TituloDescripcion({ titulo, descripcion }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      {titulo ? (
        <Typography variant="h3" gutterBottom gutterTop>
          {titulo}
        </Typography>
      ) : (
        ""
      )}
      {descripcion ? (
        <Typography variant="body2" gutterBottom gutterTop>
          {descripcion}
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
}

export default TituloDescripcion;
