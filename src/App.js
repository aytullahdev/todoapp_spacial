/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState } from "react";
import Selectthem from "./Components/Selectthem";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Pagenotfound from "./Components/Pagenotfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [them, setThem] = useState("theme-swiss");
  
  return (
    <div>
      <div className="App patterns min-w-screen relative min-h-screen flex justify-center items-center ">
        <Selectthem setThem={setThem} them={them} />
        <div className={`${them}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
