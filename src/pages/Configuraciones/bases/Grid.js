import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";

function Grid() {
  return (
    <>
      <TituloDescripcion
        titulo="Bases"
        descripcion="Pantalla de modificacion y creacion de nuevas Bases."
      />
      <Toolbar type="bases" />
      <div style={{ backgroundColor: "red", height: "100%" }}>Grid</div>
    </>
  );
}

export default Grid;
