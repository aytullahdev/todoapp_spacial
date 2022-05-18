import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../Firebase';

const Dashboard = () => {
    return (
        <div>
           <div className='flex space-y-10 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row '>
           <Link to="/" className='btn btn-lg outline-none hover:bg-blue-600 border-none bg-blue-500 text-4xl text-white uppercase rounded-lg'>HOME</Link>
               <Link to="/tasklist" className='btn btn-lg outline-none hover:bg-green-600 border-none bg-green-500 text-4xl text-white uppercase rounded-lg'>MY TASKS</Link>
               <Link to="/createtodo" className='btn btn-lg outline-none hover:bg-orange-600 border-none bg-orange-500 text-4xl text-white uppercase rounded-lg'>ADD TASKS</Link>
               <Link to="/createtodo" className='btn btn-lg outline-none hover:bg-orange-600 border-none bg-orange-500 text-4xl text-white uppercase rounded-lg' onClick={()=> signOut(auth) }>LOG OUT</Link>
           </div>
        </div>
    );
};

export default Dashboard;