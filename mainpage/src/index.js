import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import '../src/components/Login/LoginStyle.module.css'; //인덱스 스타일 적용
//import '../src/components/Signup/SignupStyle.module.css'; 
import '../src/components/error/ErrorPageStyle.css'; 

const element = document.getElementById("root");
const root = createRoot(element);
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
