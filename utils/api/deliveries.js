import Axios from axios;
import {MAMMI_BE_API_URL} from '@env';

const BASE_URL = `${MAMMI_BE_API_URL}api/v1`;


const config = accessToken => {
  return {
    headers: {
      'x-access-token': `${accessToken}`,
    },
  };
};

const getDeliveries = () => Axios.get(`${BASE_URL}/deliveries`);

const getDelivery = id => Axios.get(`${BASE_URL}/deliveries/${id}`);

const createDelivery = (body, accessToken) =>
  Axios.post(`${BASE_URL}/deliveries/create`, body, config(accessToken));

const deleteDelivery = (id, accessToken) =>
  Axios.delete(`${BASE_URL}/deliveries/delete/${id}`, config(accessToken));

const editDelivery = (id, body, accessToken) =>
  Axios.patch(`${BASE_URL}/deliveries/edit/${id}`, body, config(accessToken));

export {
  getDeliveries,
  getDelivery,
  createDelivery,
  deleteDelivery,
  editDelivery,
};