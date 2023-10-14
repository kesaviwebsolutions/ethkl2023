import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from "easy-peasy";
import MainStore from "./Store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider store={MainStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StoreProvider>
);



