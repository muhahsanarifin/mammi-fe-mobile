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

const editProfile = (body, accessToken) =>
  Axios.patch(`${BASE_URL}/users/acc/profile/edit`, body, config(accessToken));

const getProfileContact = accessToken =>
  Axios.get(`${BASE_URL}/users/acc/profile/contact/id`, config(accessToken));

const getProfileDetail = accessToken =>
  Axios.get(`${BASE_URL}/users/acc/profile/detail/id`, config(accessToken));

export {editProfile, getProfileContact, getProfileDetail};
