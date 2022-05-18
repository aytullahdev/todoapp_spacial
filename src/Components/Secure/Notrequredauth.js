import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase';
import Progressbar from '../Progressbar';
const Notrequredauth = ({children}) => {
    const location = useLocation();
     let from = location.state?.from?.pathname || "/dashboard";
     let navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Progressbar/>
    }
    if(user){
        navigate(from, { replace: true });
    }
    return children;
};

export default Notrequredauth;