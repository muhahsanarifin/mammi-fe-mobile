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

const getUsers = (accessToken, queryParams) =>
  Axios.get(`${BASE_URL}/users?${queryParams}`, config(accessToken));

const deleteAccount = accessToken =>
  Axios.delete(`${BASE_URL}/users/acc/delete`, config(accessToken));

const register = body => Axios.post(`${BASE_URL}/users/register`, body);

const editPassword = (body, accessToken) =>
  Axios.patch(`${BASE_URL}/users/password/edit`, body, config(accessToken));

export {getUsers, deleteAccount, register, editPassword};
