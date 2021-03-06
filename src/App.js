/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState } from "react";
import Selectthem from "./Components/Selectthem";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Pagenotfound from "./Components/Pagenotfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Requredauth from "./Components/Secure/Requredauth";
import Progressbar from "./Components/Progressbar";
import Notrequredauth from "./Components/Secure/Notrequredauth";
import Dashboard from "./Components/User/Dashboard";
import Usertodolisit from "./Components/User/Usertodolisit";
import Createtodo from "./Components/User/Createtodo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Components/Firebase";
function App() {
  const [them, setThem] = useState("theme-swiss");
  const [user,loaoding]=useAuthState(auth)
  if(loaoding){
    return <Progressbar/>
  }
  return (
    <div>
      <div className="App patterns min-w-screen relative min-h-screen flex justify-center items-center ">
        <div>
         { user && <Link to='/dashboard' className=" absolute top-0 left-0 text-lg btn btn-success text-white m-2">💻 DASHBOARD</Link>}
        </div>
        <Selectthem setThem={setThem} them={them} />
        <div className={`${them}`}>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Notrequredauth><Login /></Notrequredauth>} />
            <Route path="/signup" element={<Notrequredauth><Signup /></Notrequredauth>} />
            <Route path="/dashboard" element={<Requredauth><Dashboard/></Requredauth>}/>
            <Route path="/tasklist" element={<Requredauth><Usertodolisit/></Requredauth>}/>
            <Route path="/createtodo" element={<Requredauth><Createtodo/></Requredauth>}/>
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
