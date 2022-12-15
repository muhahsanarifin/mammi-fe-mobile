import Axios from 'axios';
import {MAMMI_BE_API_URL} from '@env';

const BASE_URL = `${MAMMI_BE_API_URL}/api/v1`;

const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

const getPromos = token => Axios.get(`${BASE_URL}/promos`, config(token));

const createPromo = (data, token) =>
  Axios.post(`${BASE_URL}/promos`, data, config(token));

export {getPromos, createPromo};
