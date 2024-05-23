import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn, checkingStatus } = useAuthStatus();
  
  if (checkingStatus) {
    return(
        <h1 className="display-1 my-5 text-center text-secondary">
            Loading...
        </h1>
    )
  }
  

 return isLoggedIn ? <Outlet/> : <Navigate to={"/login"}/>





};

export default PrivateRoute;
