import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

let store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => saveState({ cart: store.getState().cart } ));

window.__store__ = store;

export default store;