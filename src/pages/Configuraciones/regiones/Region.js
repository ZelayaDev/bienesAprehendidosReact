import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

function Regiones() {
  return (
    <>
      {/* Grid */}
      <Route exact path="/configuracion/regiones" component={Grid} />
      {/* nuevo */}
      <Route path="/configuracion/regiones/nuevo" component={Nuevo} />
      {/* modificar  */}
      <Route path="/configuracion/regiones/editar/:id" component={Editar} />
    </>
  );
}

export default Regiones;
