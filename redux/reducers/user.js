import {ActionType} from 'redux-promise-middleware';
import {actionStrings} from '../actions/actionStrings';

const initialState = {
  userResult: {
    dataCount: null,
    next: null,
    previous: null,
    totalPages: null,
    data: [],
  },
  registerUserResult: {
    message: '',
  },
  isLoading: false,
  isError: false,
  err: null,
  confirms: false,
};

const userReducer = (prevState = initialState, {payload, type}) => {
  const {Pending, Rejected, Fulfilled} = ActionType;
  const {getUsers, deleteUser, userRegister, editPassword} = actionStrings;
  switch (type) {
    case getUsers.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getUsers.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case getUsers.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: payload.data.result,
      };
    case deleteUser.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case deleteUser.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case deleteUser.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: true,
      };

    case userRegister.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case userRegister.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
      };
    case userRegister.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: payload.data.message,
      };
    case editPassword.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editPassword.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response.data,
      };
    case editPassword.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: payload.data.msg,
      };

    default:
      return prevState;
  }
};

export default userReducer;
