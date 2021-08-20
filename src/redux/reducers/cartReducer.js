const ADD_ORDER = '/cracker-store/cart/ADD_ORDER',
      REMOVE_ORDER = '/cracker-store/cart/REMOVE_ORDER',
      GENERAL_ORDERS_INFO = '/cracker-store/cart/GENERAL_ORDERS_INFO';

const initialState = {
    orders: [],
    totalOrders: 0,
    totalWeightOrders: 0
}

export const cart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    action.payload
                ]
            }
        case REMOVE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.id)
            }
        case GENERAL_ORDERS_INFO:
            return {
                ...state,
                totalOrders: state.orders.length,
                totalWeightOrders: state.orders.reduce((sum, item) => (sum += +item.weight), 0)
            }        
        default: 
            return state;    
    }
};

export const setAddOrder = data => ({ type: ADD_ORDER, payload: data });

export const setRemoveOrder = id => ({ type: REMOVE_ORDER, id });

export const setGeneralOrdersInfo = () => ({ type: GENERAL_ORDERS_INFO });

export const getTheRemovalOfOrder = id => dispatch => {
    dispatch(setRemoveOrder(id));
    dispatch(setGeneralOrdersInfo());
};