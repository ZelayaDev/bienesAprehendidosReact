import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Marcas() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/marcas" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/marcas/nuevo" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/marcas/editar/:id" component={Editar} />
    </>
  );
}

export default Marcas;
