import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const element = document.getElementById("root");
const root = createRoot(element);
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);


reportWebVitals();
