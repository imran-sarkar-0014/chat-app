import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as StoreProvider } from 'react-redux'

import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

