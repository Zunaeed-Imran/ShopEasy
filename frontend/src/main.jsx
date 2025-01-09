import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} >
      <StrictMode>
        <App />
        <ToastContainer position='top-right' />
      </StrictMode>
    </PersistGate>
  </Provider>,
);
