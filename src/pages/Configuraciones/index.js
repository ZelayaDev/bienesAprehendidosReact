import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout/";
import { Route } from "react-router-dom";
import VerticalTab from "../../components/VerticalTab/VerticalTab";

//ruta de codigos componentes

import Usuario from "./Usuario";
import Regiones from "./Region";
import Zonas from "./Zonas";
import Provincias from "./Provincias";
import Bases from "./Bases";
import Medios from "./Medios";
import Marcas from "./Marcas";
import Modelos from "./Modelos";

function Configuraciones() {
  const verticalTabItems = [
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

  return (
    <DashboardLayout title="Configuraciones">
      <VerticalTab items={verticalTabItems}>
        <Route exact path="/configuracion" component={Usuario} />
        <Route path="/configuracion/regiones" component={Regiones} />
        <Route path="/configuracion/zonas" component={Zonas} />
        <Route path="/configuracion/provincias" component={Provincias} />
        <Route path="/configuracion/bases" component={Bases} />
        <Route path="/configuracion/medios" component={Medios} />
        <Route path="/configuracion/marcas" component={Marcas} />
        <Route path="/configuracion/modelos" component={Modelos} />
      </VerticalTab>
    </DashboardLayout>
  );
}

export default Configuraciones;
