import React,{Component} from 'react';
import MainPageComponents from './components/MainPageComponents.js';
import {  Routes, Route, Navigate  } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ErrorPage from "./components/error/ErrorPage";
import Map from "./components/map/Map";
import StarRating from "./components/sidebar/StarRating"
import Sidebar from "./components/sidebar/Sidebar"
import MyRoomComponents from './components/MyRoomComponents.js';

let username="profile"
let email="email"
let etc="etc"

function App(){
  
return(

  
  
      
      <Routes>
        <Route path="/" element={<MainPageComponents/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup/*" element={<Signup />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/myroom" element={<MyRoomComponents username = {username} email = {email} etc={etc}/>} />
      </Routes>
  );
}
export default App;