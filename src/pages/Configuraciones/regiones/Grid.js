import React from "react";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";

function Grid() {
  return (
    <div>
      <TituloDescripcion
        titulo="Regiones"
        descripcion="Pantalla de modificacion y creacion de nuevo regiones."
      />
      <Toolbar type="regiones" />
      <div style={{ backgroundColor: "yellow" }}>Grid</div>
    </div>
  );
}

export default Grid;
