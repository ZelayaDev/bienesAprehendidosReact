const authServerUrl = process.env.REACT_APP_AUTH_SERVER;

export const urlLogin = `${authServerUrl}/api/auth/login`;
export const urlValidated = `${authServerUrl}/api/auth/validate?id_app=`;

export const urlGridUsuarios = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/user-filtrados-v2`;

export const urlGridWhereNotUsuarios = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/user-whereNot-v2`;

export const urlSearchRHH = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/search`;

export const urlDireccionesAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/direcciones/filtrada`;

export const urlDepartamentosByDirAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/departamentos/ByIdDireccion`;

export const urlRegistarAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/register`;

export const urlMatriculaAuthDB = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/matricula`;

export const urlUsuarioDetails = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/permisos`;

export const urlPasswordReset = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/reset`;

// regiones

export const urlGridRegiones = `${process.env.REACT_APP_BACK_END}/api/regiones`;
