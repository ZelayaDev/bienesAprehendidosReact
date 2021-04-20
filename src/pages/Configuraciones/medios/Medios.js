import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Medios() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/medios" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/medios" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/medios/:id" component={Editar} />
    </>
  );
}
export default Medios;
