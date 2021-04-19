import React from "react";

function Editar({ match }) {
  const { id: id_region } = match.params;
  return <div>Soy editar {`${id_region}`}</div>;
}

export default Editar;
