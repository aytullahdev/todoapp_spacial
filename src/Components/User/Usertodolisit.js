import React from 'react';
import Singletaskcard from './Singletaskcard';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import Progressbar from '../Progressbar';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
const Usertodolisit = () => {
    
    const [user,loading]=useAuthState(auth);
    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
    fetch(`https://ayttodo.herokuapp.com/task?email=${user.email}`).then(res =>
      res.json()
    )
  )
  if(loading || isLoading){
      return <Progressbar/>
  }
    
    
     const handledone=(id)=>{
        fetch(`https://ayttodo.herokuapp.com/done/${id}`)
        .then(res=>res.json())
        .then(rdata=>{console.log(rdata); toast.success("Sucessfully Updated"); refetch();});

     }
     const handledel=(id)=>{
        fetch(`https://ayttodo.herokuapp.com/del/${id}`)
        .then(res=>res.json())
        .then(rdata=>{console.log(rdata);toast.success("Sucessfully Deleted"); refetch();});
        
        
     }
    return (
        <div>
         {data.length<=0 && <div className='text-3xl font-semibold text-center'>YOU HAVE NO TASK TO DO</div>}
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-5 gap-10 text-left'>
               
                {data.length>=1 && data.map((el)=>{
                   return <Singletaskcard cdata={el} key={el._id} handledone={handledone} handledel={handledel}/>
                })}
            </div>
        </div>
    );
};

export default Usertodolisit;