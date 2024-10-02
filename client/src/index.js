// index.js

// import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';

import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AppProvider>
);