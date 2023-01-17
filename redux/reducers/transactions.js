import {ActionType} from 'redux-promise-middleware';
import {actionStrings} from '../actions/actionStrings';

const initialState = {
  result: {
    dataCount: null,
    next: null,
    previous: null,
    totalPages: null,
    data: [],
  },
  isLoading: false,
  isError: false,
  err: null,
  confirms: false,
};

const transactionReducer = (prevState = initialState, {payload, type}) => {
  const {Pending, Rejected, Fulfilled} = ActionType;
  const {
    getTransactions,
    createTransaction,
    editTransaction,
    deleteTransaction,
    getHistoryransaction,
  } = actionStrings;
  switch (type) {
    case getTransactions.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getTransactions.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case getTransactions.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: payload.data.result,
      };
    case createTransaction.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createTransaction.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case createTransaction.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: {
          id: payload.data.result.id,
          user_id: payload.data.result.user_id,
          delivery_id: payload.data.result.delivery_id,
          promo_id: payload.data.result.promo_id,
          notes: payload.data.result.notes,
          status: payload.data.result.status,
          created_at: payload.data.result.created_at,
          updated_at: payload.data.result.updated_at,
          total: payload.data.result.total,
          product_id: payload.data.result.product_id,
          size_id: payload.data.result.size_id,
          qty: payload.data.result.qty,
          subtotal: payload.data.result.subtotal,
        },
      };
    case editTransaction.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editTransaction.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case editTransaction.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: payload.data,
      };
    case deleteTransaction.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case deleteTransaction.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case deleteTransaction.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: {
          message: payload.data.result.msg,
        },
      };
    case getHistoryransaction.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getHistoryransaction.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.msg,
      };
    case getHistoryransaction.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: [
          {
            product_name: payload.data.result.product_name,
            price: payload.data.result.price,
            image: payload.data.result.image,
            notes: payload.data.result.notes,
            status: payload.data.result.status,
          },
        ],
      };
    default:
      return prevState;
  }
};

export default transactionReducer;
