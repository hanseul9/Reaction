import React,{Component} from 'react';
import MainPageComponents from './components/MainPageComponents.js';
import {  Routes, Route, Navigate  } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ErrorPage from "./components/error/ErrorPage";
import Map from "./components/map/Map";
import StarRating from "./components/sidebar/StarRating"
import Sidebar from "./components/sidebar/Sidebar"


const App = () => (
      <Routes>
        <Route path="/" element={<MainPageComponents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup/*" element={<Signup />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
  );
    
export default App;