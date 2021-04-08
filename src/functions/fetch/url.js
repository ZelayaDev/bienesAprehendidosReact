const authServerUrl = process.env.REACT_APP_AUTH_SERVER;

export const urlLogin = `${authServerUrl}/api/auth/login`;
export const urlValidated = `${authServerUrl}/api/auth/validate?id_app=`;
