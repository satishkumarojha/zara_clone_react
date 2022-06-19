import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  let{isAuth}=useContext(AuthContext);
  if(isAuth){
    return children;
  }
  else{
  return <Navigate to="/login"/>
  }
};

export default RequiredAuth;