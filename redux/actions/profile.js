import {ActionType} from 'redux-promise-middleware';
import {
  editprofile,
  getprofilecontact,
  getprofiledetail,
} from '../../modules/api/profile';
import {actionStrings} from './actionStrings';

const {Pending, Rejected, Fulfilled} = ActionType;

// TODO: Edit Profile actions
const editProfilePending = () => ({
  type: actionStrings.editProfile.concat('-', Pending),
});

const editProfileRejected = error => ({
  type: actionStrings.editProfile.concat('-', Rejected),
  payload: {error},
});

const editProfileFulfilled = data => ({
  type: actionStrings.editProfile.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Get Profile Contact actions
const getProfileContactPending = () => ({
  type: actionStrings.getProfileContact.concat('-', Pending),
});

const getProfileContactRejected = error => ({
  type: actionStrings.getProfileContact.concat('-', Rejected),
  payload: {error},
});

const getProfileContactFulfilled = data => ({
  type: actionStrings.getProfileContact.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Get Profile Detail actions
const getProfileDetailPending = () => ({
  type: actionStrings.getProfileDetail.concat('-', Pending),
});

const getProfileDetailRejected = error => ({
  type: actionStrings.getProfileDetail.concat('-', Rejected),
  payload: {error},
});

const getProfileDetailFulfilled = data => ({
  type: actionStrings.getProfileDetail.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Edit Profile Thunk
const editProfileThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editProfilePending());
      const result = await editprofile(body, token);
      console.log(result.data);
      dispatch(editProfileFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(editProfileRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Get Profile Thunk
const getProfileContactThunk = (id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getProfileContactPending());
      const result = await getprofilecontact(id, token);
      console.log(result.data);
      dispatch(getProfileContactFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(getProfileContactRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Get Profile Detail Thunk
const getProfileDetailThunk = (id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getProfileDetailPending());
      const result = await getprofiledetail(id, token);
      console.log(result.data);
      dispatch(getProfileDetailFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(getProfileDetailRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

const ProfilesAction = {
  editProfileThunk,
  getProfileContactThunk,
  getProfileDetailThunk,
};

export default ProfilesAction;
