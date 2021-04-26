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

const headerPost = (payload) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
  mode: "cors",
  cache: "default",
  body: JSON.stringify(payload),
});

export const getGridUsuarios = async (
  page,
  limit,
  atrib,
  order,
  text,
  history,
) => {
  const response = await fetch(
    `${url.urlGridUsuarios}?page=${page}&limit=${limit}&app=${process.env.REACT_APP_ID_APP}&atrib=${atrib}&order=${order}&text=${text}`,
    header(),
  );
  const decoded = await response.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};

export const getGridUsuariosNoMatriculados = async (
  page,
  limit,
  atrib,
  order,
  text,
  history,
) => {
  const response = await fetch(
    `${url.urlGridWhereNotUsuarios}?page=${page}&limit=${limit}&app=${process.env.REACT_APP_ID_APP}&atrib=${atrib}&order=${order}&text=${text}`,
    header(),
  );
  const decoded = await response.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};

export const getRHHusersByText = async (text, history) => {
  if (text.trim().length > 3) {
    const query = await fetch(`${url.urlSearchRHH}?text=${text}`, header());
    const decoded = await query.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } else {
    return [];
  }
};

export const getDirecciones = async (history) => {
  const query = await fetch(url.urlDireccionesAuthDB, header());
  const decoded = await query.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};

export const getDepartamentos = async (id_direccion, history) => {
  const query = await fetch(
    `${url.urlDepartamentosByDirAuthDB}?id_direccion=${id_direccion}`,
    header(),
  );
  const decoded = await query.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};

export const guardarUsuarioDesdeRHH = async (userData, history) => {
  const query = await fetch(
    url.urlRegistarAuthDB,
    headerPost({
      cedula: userData.cedula,
      password: "*12345",
      repeat_password: "*12345",
      id_direccion: userData.id_direccion,
      id_departamento: userData.id_departamento,
    }),
  );
  const decoded = await query.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};

export const matricularAuthDB = async (id_user, id_lista, history) => {
  const query = await fetch(
    url.urlMatriculaAuthDB,
    headerPost({
      id_user: id_user,
      id_lista: id_lista,
      estado: false,
    }),
  );
  const decoded = await query.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};

export const getDetallesUsuario = async (id_user, history) => {
  const query = await fetch(
    `${url.urlUsuarioDetails}?id_user=${id_user}`,
    header(),
  );
  const decoded = await query.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded.filter(
    (user) => user.id_app === parseInt(process.env.REACT_APP_ID_APP),
  )[0];
};
