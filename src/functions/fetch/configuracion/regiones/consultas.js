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

export const getGridRegiones = async (
  page,
  limit,
  atrib,
  order,
  text,
  history,
) => {
  const response = await fetch(
    `${url.urlGridRegiones}?page=${page}&limit=${limit}&atrib=${atrib}&order=${order}&text=${text}`,
    header(),
  );
  const decoded = await response.json();
  utils.UnauthorizedRedirect(decoded, history);
  return decoded;
};
