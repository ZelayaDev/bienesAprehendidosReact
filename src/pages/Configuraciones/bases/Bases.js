import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Bases() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/bases" component={Grid} />
      {/* nuevo  */}
      <Route path="/configuracion/bases/nuevo" component={Nuevo} />
      {/* modificar */}
      <Route path="/configuracion/bases/editar/:id" component={Editar} />
    </>
  );
}

export default Bases;
