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

const getUsers = token => Axios.get(`${BASE_URL}/users`, config(token));

const deleteUser = token =>
  Axios.delete(`${BASE_URL}/users/user/delete`, config(token));

const register = body => Axios.post(`${BASE_URL}/users`, body);

const editPassword = (body, token) =>
  Axios.patch(`${BASE_URL}/users/password/edit`, body, config(token));

export {getUsers, deleteUser, register, editPassword};
