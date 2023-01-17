import Axios from 'axios';
import {MAMMI_BE_API_URL} from "@env"

const BASE_URL = `${MAMMI_BE_API_URL}api/v1`;

const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

const login = (body) => Axios.post(`${BASE_URL}/auth/login`, body);

const logout = (token) => Axios.delete(`${BASE_URL}/auth/logout`, config(token));

export {login, logout};
