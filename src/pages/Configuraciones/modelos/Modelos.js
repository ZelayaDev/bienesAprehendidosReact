import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Modelos() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/modelos" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/modelos/nuevo" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/modelos/editar/:id" component={Editar} />
    </>
  );
}

export default Modelos;
