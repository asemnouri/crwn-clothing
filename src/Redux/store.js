// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer'

// const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares))

// export default store;


//redux-presist
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore } from 'redux-persist'
import rootReducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor =persistStore(store)//for creating our providor that wraps the App.js

export default {store,persistor};