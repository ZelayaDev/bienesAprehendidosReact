import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export const UnauthorizedRedirect = (data, history) => {
  if (data === "conexion error" || data === "No esta autorizado") {
    localStorage.clear();
    history.push("/login");
  }
};

export const UserRedirect = (user, history) => {
  if (user && user.rol !== "Administrador")
    return history.push("/create-orders");
};

toast.configure({
  autoClose: 4000,
  draggable: true,
  position: toast.POSITION.TOP_CENTER,
});

export const logout = (history, setUser) => {
  history.push("/login");
  setUser(null);
  localStorage.clear();
};

export const errorToast = (text) => toast.error(text);
export const msgSuccess = (text) => toast.success(text);
export const msgWarn = (text) => toast.warn(text);
