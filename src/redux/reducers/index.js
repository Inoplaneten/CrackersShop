import { combineReducers } from 'redux';
import { formAddOrder } from './formAddOrderReducer';
import { cart } from './cartReducer';

export const rootReducer = combineReducers({
    formAddOrder,
    cart
});