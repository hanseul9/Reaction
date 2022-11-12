import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './components/Login/LoginStyle.css' //인덱스 스타일 적용
import './components/Signup/SignupStyle.css' 

const element = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
