import React from "react";

function Editar({ match }) {
  const { id: id_usuario } = match.params;
  return <div>Soy editar Bases {`${id_usuario}`}</div>;
}

export default Editar;
