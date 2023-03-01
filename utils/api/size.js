import Axios from axios;
import {MAMMI_BE_API_URL} from '@env';

const BASE_URL = `${MAMMI_BE_API_URL}/api/v1`;


const config = accessToken => {
  return {
    headers: {
      'x-access-token': `${accessToken}`,
    },
  };
};

const getSizes = () => Axios.get(`${BASE_URL}/deliveries`);

const getSize = id => Axios.get(`${BASE_URL}/deliveries/${id}`);

const createSize = (body, accessToken) =>
  Axios.post(`${BASE_URL}/deliveries/create`, body, config(accessToken));

const deleteSize = (id, accessToken) =>
  Axios.delete(`${BASE_URL}/deliveries/delete/${id}`, config(accessToken));

const editSize = (id, body, accessToken) =>
  Axios.patch(`${BASE_URL}/deliveries/edit/${id}`, body, config(accessToken));

export {getSizes, getSize, createSize, deleteSize, editSize};