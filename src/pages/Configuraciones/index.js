import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout/";
import { Route, useHistory } from "react-router-dom";

//ruta de codigos componentes

import Usuario from "./Usuario";
import Regiones from "./Region";

function Configuraciones() {
  const history = useHistory();

  return (
    <DashboardLayout title="Configuraciones">
      <ul
        style={{
          display: "flex",
          width: "100%",
          height: "80px",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <li onClick={() => history.push("/configuracion")}>Usuarios</li>
        <li onClick={() => history.push("/configuracion/regiones")}>
          Regiones
        </li>
      </ul>
      <Route exact path="/configuracion" component={Usuario} />
      <Route path="/configuracion/regiones" component={Regiones} />
    </DashboardLayout>
  );
}

export default Configuraciones;
