import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import Progressbar from '../Progressbar';
import { isEmpty } from '@firebase/util';
import { toast } from "react-toastify";
const Createtodo = () => {
    const [taskName, setTaskName] = useState('');
    const [tascDesc, setTascDesc] = useState('');
    const [user,loading]=useAuthState(auth)
    if(loading){
        return <Progressbar/>
    }
    const handle=()=>{
        if(isEmpty(taskName) || isEmpty(tascDesc)){ toast.error("Plz Fill up the inputs");return;}
        const task={
            email:user.email,
            tname:taskName,
            tdesc:tascDesc,
            done:0,
        }
        fetch('https://ayttodo.herokuapp.com/addtask',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(task),
        }).then(res=>res.json())
        .then(data=>{data?.insertedId && toast.success("Task Added Sucessfully");setTaskName('');setTascDesc('');});
        

    }
    return (
        <div>
            <div className="w-screen mt-20">
      <div
        className={` lg:w-2/4 w-3/4 relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl`}
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
              Create TODO
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Task Name"
              class="input  input-bordered w-full "
              value={taskName}
              onChange={(e)=>setTaskName(e.target.value)}
              
            />
          </div>
          <div>
            <textarea
              className='h-40 w-full input p-4 rounded-lg'
              type="password"
              placeholder="Task Details"
              value={tascDesc}
              onChange={(e)=>setTascDesc(e.target.value)}

              
              
            />
          </div>
          <div>
          </div>
          <div>
            <button
              className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8 mx-auto btn"
              onClick={() => handle()}
            >
              CREATE
            </button>
          </div>
          <div>
            <Link to="/tasklist" className="text-skin-base link">
              TASKS LIST{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Createtodo;