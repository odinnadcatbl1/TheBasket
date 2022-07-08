import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <div className='appContainer'>
        <App/>
      </div>
    </Provider>
  </React.StrictMode>
);

