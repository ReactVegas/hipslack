import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from 'reducers';

const loggerMiddleware = createLogger({
  level: 'info', collapsed: true
});

const customCreateStore = applyMiddleware(
  thunkMiddleware, loggerMiddleware
)(createStore);

const store = customCreateStore(rootReducer);

if (module.hot) {
  module.hot.accept('reducers', () => {
    store.replaceReducer(require('reducers').rootReducer);
  });
}

export { store };
