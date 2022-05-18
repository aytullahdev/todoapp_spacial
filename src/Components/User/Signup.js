import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
           <div className="w-screen">
      <div
        className={` lg:w-1/4 relative bg-skin-fill w-3/4  mx-auto overflow-hidden sm:rounded-2xl`}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
          alt="People working on laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
        <div className="relative flex flex-col space-y-5 max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div>
           <h1 className="text-4xl  text-skin-base text-extrabold uppercase">Sign up</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              class="input input-bordered w-full "
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              class="input input-bordered w-full "
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              class="input input-bordered w-full "
            />
          </div>
          <div>
              <button  className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8 mx-auto btn">Create</button>
          </div>
          <div>
              <Link to="/signin" className="text-skin-base link" >Alrady have an account? </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Signup;