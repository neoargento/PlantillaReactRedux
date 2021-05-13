import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

// Redux
import Store from './Redux/Store';

// CSS
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>  
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);