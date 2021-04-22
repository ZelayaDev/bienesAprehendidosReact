const authServerUrl = process.env.REACT_APP_AUTH_SERVER;

export const urlLogin = `${authServerUrl}/api/auth/login`;
export const urlValidated = `${authServerUrl}/api/auth/validate?id_app=`;

export const urlGridUsuarios = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/user-filtrados-v2`;

export const urlGridWhereNotUsuarios = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/user-whereNot-v2`;

export const urlSearchRHH = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/search`;

export const urlDireccionesAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/direcciones/filtrada`;

export const urlDepartamentosByDirAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/departamentos/ByIdDireccion`;

export const urlRegistarAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/register`;
