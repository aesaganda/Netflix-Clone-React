import React from 'react'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function PrivateRoute({children}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login',{
            replace: true
        })
    }
    else{
        return (
            children
          )
    }
}

export default PrivateRoute