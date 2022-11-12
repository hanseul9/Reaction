//로그인 컴포넌트를 띄운다.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import ErrorPage from "./components/error/ErrorPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup/*" element={<Signup/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
