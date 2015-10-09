import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from 'reducers';

let loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

let localStorageMiddleWare = (store) => (next) => (action) => {
  let result = next(action);
  window.localStorage.setItem('state', JSON.stringify(store.getState()));
  return result;
};

let customCreateStore = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  localStorageMiddleWare
)(createStore);

let initialState = JSON.parse(window.localStorage.getItem('state')) || {};
let store = customCreateStore(rootReducer, initialState);

if (module.hot) {
  module.hot.accept('reducers', () => {
    store.replaceReducer(require('reducers').rootReducer);
  });
}

export {store};
