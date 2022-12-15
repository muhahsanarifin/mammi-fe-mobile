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

const getProducts = token => Axios.get(`${BASE_URL}/products`, config(token));

const editProduct = (body, id, token) =>
  Axios.patch(`${BASE_URL}/products/${id}`, body, config(token));

const deleteProduct = (id, token) =>
  Axios.delete(`${BASE_URL}/products/${id}`, config(token));

const createProduct = (id, token) =>
  Axios.post(`${BASE_URL}products/${id}`, config(token));

export {getProducts, editProduct, deleteProduct, createProduct};
