import React from 'react';
import {Provider} from 'react-redux';
import App from 'components/App';
import {store} from 'store';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>, document.getElementById('App')
);
