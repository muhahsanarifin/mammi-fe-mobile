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

const getProducts = () => Axios.get(`${BASE_URL}/products`);

const editProduct = (body, id, accessToken) =>
  Axios.patch(`${BASE_URL}/products/${id}`, body, config(accessToken));

const deleteProduct = (id, accessToken) =>
  Axios.delete(`${BASE_URL}/products/${id}`, config(accessToken));

const createProduct = (body, accessToken) =>
  Axios.post(`${BASE_URL}products`, body, config(accessToken));

export {getProducts, editProduct, deleteProduct, createProduct};
