import React from "react";
import { Route } from "react-router-dom";

//Plantilla de paginas

import DashboardLayout from "../../layouts/DashboardLayout/";
import {
  PestanasVertical,
  PestanasHorizontal,
} from "../../components/Pestanas/Pestanas";
import Container from "../../components/Container/Container";

//ruta de codigos componentes

import Usuario from "./usuarios/Usuario";
import Regiones from "./regiones/Region";
import Zonas from "./zonas/Zonas";
import Provincias from "./provincias/Provincias";
import Bases from "./bases/Bases";
import Medios from "./medios/Medios";
import Marcas from "./marcas/Marcas";
import Modelos from "./modelos/Modelos";

function Configuraciones() {
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

  return (
    <DashboardLayout title="Configuraciones">
      <PestanasHorizontal items={rutasItems} />
      <PestanasVertical items={rutasItems}>
        <Container>
          <Route path="/configuracion" component={Usuario} />
          <Route path="/configuracion/regiones" component={Regiones} />
          <Route path="/configuracion/zonas" component={Zonas} />
          <Route path="/configuracion/provincias" component={Provincias} />
          <Route path="/configuracion/bases" component={Bases} />
          <Route path="/configuracion/medios" component={Medios} />
          <Route path="/configuracion/marcas" component={Marcas} />
          <Route path="/configuracion/modelos" component={Modelos} />
        </Container>
      </PestanasVertical>
    </DashboardLayout>
  );
}

export default Configuraciones;
