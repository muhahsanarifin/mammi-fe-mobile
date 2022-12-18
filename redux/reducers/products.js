import {ActionType} from 'redux-promise-middleware';
import {actionStrings} from '../actions/actionStrings';

const initialState = {
  result: {
    dataCount: null,
    next: null,
    previous: null,
    totalPages: null,
    data: [
      {
        id: null,
        product_name: '',
        price: null,
        category_name: '',
        image: '',
        created_at: '',
        updated_at: '',
        description: null,
      },
    ],
  },
  isLoading: false,
  isError: false,
  err: null,
  confirms: false,
};

const productReducer = (prevState = initialState, {payload, type}) => {
  const {Pending, Rejected, Fulfilled} = ActionType;
  const {getProducts, editProduct, deleteProduct, createProduct} =
    actionStrings;
  switch (type) {
    case getProducts.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProducts.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.message,
      };
    case getProducts.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        result: payload.data.result,
      };
    case editProduct.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProduct.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        err: payload.error.response?.data.result.message,
      };
    case editProduct.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: true,
        result: payload.data.result,
      };
    case deleteProduct.concat('-', Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: true,
      };
    case deleteProduct.concat('-', Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: true,
      };
    case deleteProduct.concat('-', Fulfilled):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: true,
      };

    default:
      return prevState;
  }
};

export default productReducer;
