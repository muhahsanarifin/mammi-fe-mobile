import {ActionType} from 'redux-promise-middleware';
import {
  getUsers,
  deleteUser,
  register,
  editPassword,
} from '../../modules/api/users';
import {actionStrings} from './actionStrings';

const {Pending, Rejected, Fulfilled} = ActionType;

// TODO: User Register actions
const registerPending = () => ({
  type: actionStrings.userRegister.concat('-', Pending),
});

const registerRejected = error => ({
  type: actionStrings.userRegister.concat('-', Rejected),
  payload: {error},
});

const registerFulfilled = data => ({
  type: actionStrings.userRegister.concat('-', Fulfilled),
  payload: {data},
});

// TODO: User Get actions
const getUsersPending = () => ({
  type: actionStrings.getUsers.concat('-', Pending),
});

const getUsersRejected = error => ({
  type: actionStrings.getUsers.concat('-', Rejected),
  payload: {error},
});

const getUsersFulfilled = data => ({
  type: actionStrings.getUsers.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Edit Password actions
const editPasswordPending = () => ({
  type: actionStrings.editPassword.concat('-', Pending),
});

const editPasswordRejected = error => ({
  type: actionStrings.editPassword.concat('-', Rejected),
  payload: {error},
});

const editPasswordFulfilled = data => ({
  type: actionStrings.editPassword.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Delete User actions
const deleteUserPending = () => ({
  type: actionStrings.deleteUser.concat('-', Pending),
});

const deleteUserRejected = error => ({
  type: actionStrings.deleteUser.concat('-', Rejected),
  payload: {error},
});

const deleteUserFulfilled = data => ({
  type: actionStrings.deleteUser.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Register Thunk
const registerThunk = (body, cbSuccess, cbDenied, cbLoading) => {
  return async dispatch => {
    try {
      dispatch(registerPending());
      typeof cbLoading === 'function' && cbLoading();
      const result = await register(body);
      console.log(result.data);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(registerRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Get Users Thunk
const getUsersThunk = (token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getUsersPending());
      const result = await getUsers(token);
      console.log(result.data);
      dispatch(getUsersFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(getUsersRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Delete User Thunk
const deleteUserThunk = (token, cbSuccess, cbDenied, cbLoading) => {
  return async dispatch => {
    try {
      dispatch(deleteUserPending());
      typeof cbLoading === 'function' && cbLoading();
      const result = await deleteUser(token);
      console.log(result.data);
      dispatch(deleteUserFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(deleteUserRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Edit Password Thunk
const editPasswordThunk = (body, token, cbSuccess, cbDenied, cbLoading) => {
  return async dispatch => {
    try {
      dispatch(editPasswordPending());
      typeof cbLoading === 'function' && cbLoading();
      const result = await editPassword(body, token);
      console.log(result.data);
      dispatch(editPasswordFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(editPasswordRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

const usersAction = {
  registerThunk,
  getUsersThunk,
  deleteUserThunk,
  editPasswordThunk,
};

export default usersAction;
