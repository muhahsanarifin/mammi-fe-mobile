import Axios from "axios"

const BASE_URL = `${process.env.BACK_END_URL_MAMMI}api/v1`;

const config = token => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

const login = (body) => Axios.post(`${BASE_URL}/auth`,body);

const logout = (token) => Axios.post(`${BASE_URL}/auth/logout`, config(token));

export {
  login,
  logout
}