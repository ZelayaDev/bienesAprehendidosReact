import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";

function Grid() {
  return (
    <>
      <TituloDescripcion
        titulo="Medios"
        descripcion="Pantalla de modificacion y creacion de nuevo medios."
      />
      <Toolbar type="medios" />
      <div style={{ backgroundColor: "red", height: "100%" }}>Grid</div>
    </>
  );
}

export default Grid;
