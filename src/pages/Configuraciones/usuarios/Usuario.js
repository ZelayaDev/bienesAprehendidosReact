import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Usuario() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/nuevo" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/editar/:id" component={Editar} />
    </>
  );
}

export default Usuario;
