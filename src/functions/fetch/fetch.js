import * as url from "./url";

export const loginUser = async (cedula, password) => {
  const bodyData = {
    cedula,
    password,
  };

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(url.urlLogin, header);
    return await response.json();
  } catch (error) {
    return "Credenciales invalidas";
  }
};

export const getUserData = async (accessToken, id_app) => {
  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(`${url.urlValidated}${id_app}`, header);
    return await response.json();
  } catch (error) {
    return "error en consulta de usuario";
  }
};

export const getGridUsuarios = async (page, limit, atrib, order) => {
  const header = () => ({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });

  try {
    const response = await fetch(
      `${url.urlGridUsuarios}?page=${page}&limit=${limit}&app=${process.env.REACT_APP_ID_APP}&atrib=${atrib}&order=${order}`,
      header,
    );
    return await response.json();
  } catch (error) {
    return "error en consulta";
  }
};

export const getGridUsuariosNoMatriculados = async (
  page,
  limit,
  atrib,
  order,
) => {
  const header = () => ({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });

  try {
    const response = await fetch(
      `${url.urlGridWhereNotUsuarios}?page=${page}&limit=${limit}&app=${process.env.REACT_APP_ID_APP}&atrib=${atrib}&order=${order}`,
      header,
    );
    return await response.json();
  } catch (error) {
    return "error en consulta";
  }
};
