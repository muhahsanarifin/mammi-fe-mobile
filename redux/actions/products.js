import {ActionType} from 'redux-promise-middleware';
import {
  getProducts,
  editProduct,
  deleteProduct,
  createProduct,
} from '../../modules/api/product';
import {actionStrings} from './actionStrings';

const {Pending, Rejected, Fulfilled} = ActionType;

// TODO: getProducts actions
const getProductsPending = () => ({
  type: actionStrings.getProducts.concat('-', Pending),
});

const getProductsRejected = error => ({
  type: actionStrings.getProducts.concat('-', Rejected),
  payload: {error},
});

const getProductsFulfilled = data => ({
  type: actionStrings.getProducts.concat('-', Fulfilled),
  payload: {data},
});

// TODO: editProduct actions
const editProductPending = () => ({
  type: actionStrings.editProduct.concat('-', Pending),
});

const editProductRejected = error => ({
  type: actionStrings.editProduct.concat('-', Rejected),
  payload: {error},
});

const editProductFulfilled = data => ({
  type: actionStrings.editProduct.concat('-', Fulfilled),
  payload: {data},
});

// TODO: deleteProduct actions
const deleteProductPending = () => ({
  type: actionStrings.deleteProduct.concat('-', Pending),
});

const deleteProductRejected = error => ({
  type: actionStrings.deleteProduct.concat('-', Rejected),
  payload: {error},
});

const deleteProductFulfilled = data => ({
  type: actionStrings.deleteProduct.concat('-', Fulfilled),
  payload: {data},
});

// TODO: createProduct actions
const createProductPending = () => ({
  type: actionStrings.createProduct.concat('-', Pending),
});

const createProductRejected = error => ({
  type: actionStrings.createProduct.concat('-', Rejected),
  payload: {error},
});

const createProductFulfilled = data => ({
  type: actionStrings.createProduct.concat('-', Fulfilled),
  payload: {data},
});

// TODO: Get Products Thunk
const getProductsThunk = (token, cbSuccess, cbDenied, cbLoading) => {
  return async dispatch => {
    try {
      dispatch(getProductsPending());
      typeof cbLoading === 'function' && cbLoading();
      const result = await getProducts(token);
      console.log(result.data);
      dispatch(getProductsFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(getProductsRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Edit Product Thunk
const editProductThunk = (body, id, token, cbSuccess, cbDenied, cbLoading) => {
  return async dispatch => {
    try {
      dispatch(editProductPending());
      typeof cbLoading === 'function' && cbLoading();
      const result = await editProduct(body, id, token);
      console.log(result.data);
      dispatch(editProductFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(editProductRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Delete Product Thunk
const deleteProductThunk = (id, token, cbSuccess, cbDenied, cbLoading) => {
  return async dispatch => {
    try {
      dispatch(deleteProductPending());
      typeof cbLoading === 'function' && cbLoading();
      const result = await deleteProduct(id, token);
      console.log(result.data);
      dispatch(deleteProductFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(deleteProductRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

// TODO: Create Product Thunk
const createProductThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(createProductPending());
      const result = await createProduct(body, token);
      console.log(result.data);
      dispatch(createProductFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(createProductRejected(error));
      typeof cbDenied === 'function' && cbDenied();
    }
  };
};

const productsAction = {
  getProductsThunk,
  editProductThunk,
  deleteProductThunk,
  createProductThunk,
};

export default productsAction;
