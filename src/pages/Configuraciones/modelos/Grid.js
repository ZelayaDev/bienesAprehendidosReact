import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";

function Grid() {
  return (
    <>
      <TituloDescripcion
        titulo="Modelos"
        descripcion="Pantalla de modificacion y creacion de nuevos Modelos."
      />
      <Toolbar type="modelos" />
      <div style={{ backgroundColor: "red", height: "100%" }}>Grid</div>
    </>
  );
}

export default Grid;
