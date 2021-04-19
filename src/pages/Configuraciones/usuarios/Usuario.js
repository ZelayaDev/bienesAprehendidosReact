import React from "react";
import { Route } from "react-router-dom";

// plantilla de grud

import Grid from "./Grid";
import Nuevo from "./Nuevo";
import Editar from "./Editar";

const rutasItems = [
  {
    label: "Usuarios",
    ruta: "/configuracion",
  },
  {
    label: "Regiones",
    ruta: "/configuracion/regiones",
  },
  {
    label: "Zonas",
    ruta: "/configuracion/zonas",
  },
  {
    label: "Provincias",
    ruta: "/configuracion/provincias",
  },
  {
    label: "Bases",
    ruta: "/configuracion/bases",
  },
  {
    label: "Medios",
    ruta: "/configuracion/medios",
  },
  {
    label: "Marcas",
    ruta: "/configuracion/marcas",
  },
  {
    label: "Modelos",
    ruta: "/configuracion/modelos",
  },
];

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
