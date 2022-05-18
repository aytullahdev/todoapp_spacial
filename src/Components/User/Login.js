import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase";
import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let navigator = useNavigate();
  useEffect(() => {
    if (user) {
      toast.success("Sucessfully Loged In");
      navigator("/");
    }
  }, [loading, user]);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const handle = () => {
    if (email === "" || pwd === "") {
      toast.error("Enter email and password");
      return;
    }
    signInWithEmailAndPassword(email, pwd)
  };
  return (
    <div className="w-screen">
      <div
        className={` lg:w-1/4 w-3/4 relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl`}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
          alt="People working on laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
        <div className="relative flex flex-col space-y-5 max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl uppercase text-skin-base text-extrabold">
              Log IN
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              class="input input-bordered w-full "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              class="input input-bordered w-full "
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div>
            <span className="text-red-500 text-xs">{error?.message}</span>
          </div>
          <div>
            <button
              className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8 mx-auto btn"
              onClick={() => handle()}
            >
              LOG IN
            </button>
          </div>
          <div>
            <Link to="/signup" className="text-skin-base link">
              Creat a new account?{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
