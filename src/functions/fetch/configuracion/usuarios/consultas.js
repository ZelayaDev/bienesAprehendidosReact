import * as url from "../../url";
import * as utils from "../../../utils/utils";

const header = () => ({
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
  mode: "cors",
  cache: "default",
});

export const getGridUsuarios = async (page, limit, atrib, order, history) => {
  try {
    const response = await fetch(
      `${url.urlGridUsuarios}?page=${page}&limit=${limit}&app=${process.env.REACT_APP_ID_APP}&atrib=${atrib}&order=${order}`,
      header(),
    );
    const decoded = await response.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } catch (error) {
    return "error en consulta";
  }
};

export const getGridUsuariosNoMatriculados = async (
  page,
  limit,
  atrib,
  order,
  history,
) => {
  try {
    const response = await fetch(
      `${url.urlGridWhereNotUsuarios}?page=${page}&limit=${limit}&app=${process.env.REACT_APP_ID_APP}&atrib=${atrib}&order=${order}`,
      header(),
    );
    const decoded = await response.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } catch (error) {
    return "error en consulta";
  }
};

export const getRHHusersByText = async (text, history) => {
  if (text.trim().length > 3) {
    try {
      const query = await fetch(`${url.urlSearchRHH}?text=${text}`, header());
      const decoded = await query.json();
      utils.UnauthorizedRedirect(decoded, history);
      return decoded;
    } catch (error) {
      return error;
    }
  } else {
    return [];
  }
};

export const getDirecciones = async (history) => {
  try {
    const query = await fetch(url.urlDireccionesAuthDB, header());
    const decoded = await query.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } catch (error) {
    return error;
  }
};

export const getDepartamentos = async (id_direccion, history) => {
  try {
    const query = await fetch(
      `${url.urlDepartamentosByDirAuthDB}?id_direccion=${id_direccion}`,
      header(),
    );
    const decoded = await query.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } catch (error) {
    return error;
  }
};

export const guardarUsuarioDesdeRHH = async (userData, history) => {
  const headerPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      cedula: userData.cedula,
      password: "*12345",
      repeat_password: "*12345",
      id_direccion: userData.id_direccion,
      id_departamento: userData.id_departamento,
    }),
  };

  try {
    const query = await fetch(url.urlRegistarAuthDB, headerPost);
    const decoded = await query.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } catch (error) {
    return error;
  }
};
