import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { appReducer } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={appReducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
