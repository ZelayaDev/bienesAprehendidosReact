const authServerUrl = process.env.REACT_APP_AUTH_SERVER;

export const urlLogin = `${authServerUrl}/api/auth/login`;
export const urlValidated = `${authServerUrl}/api/auth/validate?id_app=`;

export const urlGridUsuarios = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/user-filtrados-v2`;

export const urlGridWhereNotUsuarios = `${process.env.REACT_APP_AUTH_SERVER}/api/auth/user-whereNot-v2`;
