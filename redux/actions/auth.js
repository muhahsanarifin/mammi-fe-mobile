import {ActionType} from 'redux-promise-middleware';
import {login, logout} from '../../utils/api/auth';
import {actionStrings} from './actionStrings';

const {Pending, Rejected, Fulfilled} = ActionType;

// TODO: Login actions
const loginPending = () => ({
  type: actionStrings.authLogin.concat('-', Pending),
});

const loginRejected = error => ({
  type: actionStrings.authLogin.concat('-', Rejected),
  payload: {error},
});

const loginFulfilled = data => ({
  type: actionStrings.authLogin.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Logout actions
const logoutPending = () => ({
  type: actionStrings.authLogout.concat('-', Pending),
});

const logoutRejected = error => ({
  type: actionStrings.authLogout.concat('-', Rejected),
  payload: {error},
});

const logoutFulfilled = data => ({
  type: actionStrings.authLogout.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Login Thunk
const loginThunk = (body, cbSuccess, cbDenied, cbFromInput) => {
  return async dispatch => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess(result.data.result.msg);
    } catch (error) {
      dispatch(loginRejected(error));
      typeof cbDenied === 'function' &&
        cbDenied(error.response.data.result.msg);
    } finally {
      typeof cbFromInput === 'function' && cbFromInput();
    }
  };
};

// TODO: Logout Thunk
const logoutThunk = token => {
  return async dispatch => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      dispatch(logoutFulfilled(result.data));
    } catch (error) {
      dispatch(logoutRejected(error));
    }
  };
};

const authAction = {
  loginThunk,
  logoutThunk,
};

export default authAction;
