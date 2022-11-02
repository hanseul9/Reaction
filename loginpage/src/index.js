import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './components/LoginStyle.css' //인덱스 스타일 적용

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
