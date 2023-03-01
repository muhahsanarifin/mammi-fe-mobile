import Axios from 'axios';
import {MAMMI_BE_API_URL} from '@env';

const BASE_URL = `${MAMMI_BE_API_URL}api/v1`;

const config = accessToken => {
  return {
    headers: {
      'x-access-token': `${accessToken}`,
    },
  };
};

const getTransactions = (accessToken, queryParams) =>
  Axios.get(`${BASE_URL}/transactions?${queryParams}`, config(accessToken));

const createTransaction = (body, accessToken) =>
  Axios.post(`${BASE_URL}/transactions/create`, body, config(accessToken));

const editTransaction = (id, body, accessToken) =>
  Axios.post(`${BASE_URL}/transactions/edit${id}`, body, config(accessToken));

const updateStatusTransaction = (id, body, accessToken) =>
  Axios.patch(
    `${BASE_URL}/transactions/status/update/${id}`,
    body,
    config(accessToken),
  );

const deleteTransaction = (id, accessToken) =>
  Axios.delete(`${BASE_URL}/transactions/delete/${id}`, config(accessToken));

const getHistoryTransaction = (accessToken, queryParams) =>
  Axios.get(
    `${BASE_URL}/transactions/history?${queryParams}`,
    config(accessToken),
  );

const getDataDashboard = accessToken =>
  Axios.get(`${BASE_URL}/transactions/data/dashboard`, config(accessToken));

export {
  getTransactions,
  createTransaction,
  editTransaction,
  updateStatusTransaction,
  deleteTransaction,
  getHistoryTransaction,
  getDataDashboard,
};
