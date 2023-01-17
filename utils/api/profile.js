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

const editprofile = (body, token) =>
  Axios.patch(`${BASE_URL}/users/profile/edit`, body, config(token));

const getprofilecontact = (id, token) =>
  Axios.get(`${BASE_URL}/users/profile/${id}`, config(token));

const getprofiledetail = (id, token) =>
  Axios.get(`${BASE_URL}/users/${id}`, config(token));

export {editprofile, getprofilecontact, getprofiledetail};
