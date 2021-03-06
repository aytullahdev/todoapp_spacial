/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./Firebase";
import Progressbar from "./Progressbar";

const Home = () => {
  const [user,loading] = useAuthState(auth)
  if(loading){
    return <Progressbar/>
  }
  return (
    <div>
      <div
        className={` relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl`}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
          alt="People working on laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
            <span className="block">Welcome to our App</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-skin-muted">
            Make you daily Task fast and Smart
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                to="/dashboard"
                className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3  border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
              >
                {" "}
                Get started{" "}
              </Link>
              {!user && <Link
                to="/signup"
                className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                {" "}
                Create a Account{" "}
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
