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
import Requredauth from "./Components/Secure/Requredauth";
import Progressbar from "./Components/Progressbar";
import Notrequredauth from "./Components/Secure/Notrequredauth";
function App() {
  const [them, setThem] = useState("theme-swiss");
  
  return (
    <div>
      <div className="App patterns min-w-screen relative min-h-screen flex justify-center items-center ">
     
        <Selectthem setThem={setThem} them={them} />
        <div className={`${them}`}>
         
          <Routes>
            <Route path="/" element={<Requredauth><Home /></Requredauth>} />
            <Route path="/signin" element={<Notrequredauth><Login /></Notrequredauth>} />
            <Route path="/signup" element={<Notrequredauth><Signup /></Notrequredauth>} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
