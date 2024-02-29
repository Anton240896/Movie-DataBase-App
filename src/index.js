import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Movie-DataBase-App">
      <App />
      <GlobalStyles />
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
