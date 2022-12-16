import {ActionType} from 'redux-promise-middleware';
import {
  getTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
  getHistoryTransaction,
} from '../../modules/api/transactions';
import {actionStrings} from './actionStrings';

const {Pending, Rejected, Fulfilled} = ActionType;

// TODO: Get Transactions actions
const getTransactionsPending = () => ({
  type: actionStrings.getTransactions.concat('-', Pending),
});

const getTransactionsRejected = error => ({
  type: actionStrings.getTransactions.concat('-', Rejected),
  payload: {error},
});

const getTransactionsFulfilled = data => ({
  type: actionStrings.getTransactions.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Create Transactions actions
const createTransactionsPending = () => ({
  type: actionStrings.createTransaction.concat('-', Pending),
});

const createTransactionsRejected = error => ({
  type: actionStrings.createTransaction.concat('-', Rejected),
  payload: {error},
});

const createTransactionsFulfilled = data => ({
  type: actionStrings.createTransaction.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Edit Transactions actions
const editTransactionsPending = () => ({
  type: actionStrings.editTransaction.concat('-', Pending),
});

const editTransactionsRejected = error => ({
  type: actionStrings.editTransaction.concat('-', Rejected),
  payload: {error},
});

const editTransactionsFulfilled = data => ({
  type: actionStrings.editTransaction.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Delete Transactions actions
const deleteTransactionsPending = () => ({
  type: actionStrings.deleteTransaction.concat('-', Pending),
});

const deleteTransactionsRejected = error => ({
  type: actionStrings.deleteTransaction.concat('-', Rejected),
  payload: {error},
});

const deleteTransactionsFulfilled = data => ({
  type: actionStrings.deleteTransaction.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Get Hisoty Transactions actions
const getHistoryTransactionsPending = () => ({
  type: actionStrings.getHistoryransaction.concat('-', Pending),
});

const getHistoryTransactionsRejected = error => ({
  type: actionStrings.getHistoryransaction.concat('-', Rejected),
  payload: {error},
});

const getHistoryTransactionsFulfilled = data => ({
  type: actionStrings.getHistoryransaction.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Get Transactions Thunk
const getTransactionsThunk = (token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getTransactionsPending());
      const result = await getTransactions(token);
      console.log(result.data);
      dispatch(getTransactionsFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(getTransactionsRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Create Transactions Thunk
const createTransactionsThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(createTransactionsPending());
      const result = await createTransaction(body, token);
      console.log(result.data);
      dispatch(createTransactionsFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(createTransactionsRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Edit Transactions Thunk
const editTransactionsThunk = (id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editTransactionsPending());
      const result = await editTransaction(id, token);
      console.log(result.data);
      dispatch(editTransactionsFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(editTransactionsRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Delete Transactions Thunk
const deleteTransactionsThunk = (id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(deleteTransactionsPending());
      const result = await deleteTransaction(id, token);
      console.log(result.data);
      dispatch(deleteTransactionsFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(deleteTransactionsRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Get  History Transactions Thunk
const getHistoryTransactionsThunk = (token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getHistoryTransactionsPending());
      const result = await getHistoryTransaction(token);
      console.log(result.data);
      dispatch(getHistoryTransactionsFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(getHistoryTransactionsRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

const transactionsAction = {
  getTransactionsThunk,
  createTransactionsThunk,
  editTransactionsThunk,
  deleteTransactionsThunk,
  getHistoryTransactionsThunk,
};

export default transactionsAction;
