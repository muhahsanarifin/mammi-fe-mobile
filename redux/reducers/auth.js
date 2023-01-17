import {ActionType} from 'redux-promise-middleware';
import {actionStrings} from '../actions/actionStrings';

const initialState = {
  data: {
    id: null,
    role: '',
    picture: '',
    token: '',
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  err: null,
  confirms: false,
};

const authReducer = (prevState = initialState, {payload, type}) => {
  const {Pending, Rejected, Fulfilled} = ActionType;
  const {authLogin, authLogout} = actionStrings;
  switch (type) {
    case authLogin.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogin.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case authLogin.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        data: payload.data.result.data,
      };

    case authLogout.concat('_', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogout.concat('_', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case authLogout.concat('_', Fulfilled):
      return initialState;

    default:
      return prevState;
  }
};
export default authReducer;
