import React from "react";

import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Provincias() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/provincias" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/provincias/nuevo" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/provincias/editar/:id" component={Editar} />
    </>
  );
}

export default Provincias;
