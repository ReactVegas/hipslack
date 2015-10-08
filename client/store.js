import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from 'reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

let localStorage = store => next => action => {
  let result = next(action);
  window.localStorage.setItem('state', JSON.stringify(store.getState()));
  return result;
};

const customCreateStore = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  localStorage
)(createStore);

let initialState = JSON.parse(window.localStorage.getItem('state')) || {};
const store = customCreateStore(rootReducer, initialState);

if (module.hot) {
  module.hot.accept('reducers', () => {
    store.replaceReducer(require('reducers').rootReducer);
  });
}

export { store };
