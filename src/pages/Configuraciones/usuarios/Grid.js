import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";

function Grid() {
  return (
    <>
      <TituloDescripcion
        titulo="Usuarios"
        descripcion="Pantalla de modificacion y creacion de nuevo usuarios."
      />
      <Toolbar type="usuarios" />
      <div style={{ backgroundColor: "red", height: "100%" }}>Grid</div>
    </>
  );
}

export default Grid;
