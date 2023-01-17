import Axios from 'axios';
import {MAMMI_BE_API_URL} from '@env';

const BASE_URL = `${MAMMI_BE_API_URL}api/v1`;

const config = token => {
  return {
    headers: {
      'x-access-token': `${token}`,
    },
  };
};

const getTransactions = token =>
  Axios.get(`${BASE_URL}/transactions`, config(token));

const createTransaction = (body, token) =>
  Axios.post(`${BASE_URL}/transactions`, body, config(token));

const editTransaction = (id, token) =>
  Axios.patch(`${BASE_URL}/transactions/${id}`, config(token));

const deleteTransaction = (id, token) =>
  Axios.delete(`${BASE_URL}/transactions/${id}`, config(token));

const getHistoryTransaction = token =>
  Axios.get(`${BASE_URL}/transactions/history`, config(token));

export {
  getTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
  getHistoryTransaction,
};
