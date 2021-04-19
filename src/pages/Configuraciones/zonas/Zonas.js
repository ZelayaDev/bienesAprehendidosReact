import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Zonas() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/zonas" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/zonas/nuevo" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/zonas/editar/:id" component={Editar} />
    </>
  );
}
export default Zonas;
