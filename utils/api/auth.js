import Axios from 'axios';

import {MAMMI_BE_API_URL} from '@env';

const BASE_URL = `${MAMMI_BE_API_URL}api/v1`;

const config = accessToken => {
  return {
    headers: {
      'x-access-accessToken': `${accessToken}`,
    },
  };
};

const login = body => Axios.post(`${BASE_URL}/auth/login`, body);

const logout = accessToken =>
  Axios.delete(`${BASE_URL}/auth/logout`, config(accessToken));

export {login, logout};
