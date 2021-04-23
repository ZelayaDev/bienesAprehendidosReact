import * as url from "../url";
import * as utils from "../../utils/utils";

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

export const getUserData = async (id_app, history) => {
  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const response = await fetch(`${url.urlValidated}${id_app}`, header);
    const decoded = await response.json();
    utils.UnauthorizedRedirect(decoded, history);
    return decoded;
  } catch (error) {
    return "error en consulta de usuario";
  }
};
