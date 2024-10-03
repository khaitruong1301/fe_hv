// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { getDataTextStorage } from './UtilsFunction';
// import { TOKEN_AUTHOR } from './Interceptors';

// const ProtectedRoute = () => {
//   const accessToken = getDataTextStorage(TOKEN_AUTHOR); // Lấy accessToken từ localStorage

//   return accessToken ? <Outlet></Outlet> : <Navigate to="/"/>
//   // Nếu đã đăng nhập, render các component được bảo vệ
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDataTextStorage, getDataJSONStorage } from "./UtilsFunction";
import { TOKEN_AUTHOR, USER_LOGIN } from "./Interceptors";

const ProtectedRoute = ({ requiredRole }) => {
  const accessToken = getDataTextStorage(TOKEN_AUTHOR); // Get the accessToken from localStorage
  const userLogin = getDataJSONStorage(USER_LOGIN); // Get the user data, including role

  if (!accessToken || !userLogin) {
    return <Navigate to="/" />; // Redirect to login if not authenticated
  }

  const userRole = userLogin.role;

  // Check if the user role matches the required role for the route
  if (userRole !== requiredRole) {
    // Redirect to the correct page based on their role
    switch (userRole) {
      case "Administrator":
        return <Navigate to="/admin" />;
      case "Student":
        return <Navigate to="/student" />;
      case "Instructor":
        return <Navigate to="/instructor" />;
      case "Manager":
        return <Navigate to="/manager" />;
      default:
        return <Navigate to="/" />; // Redirect to login if role is invalid or undefined
    }
  }

  return <Outlet />; // Render the protected route if the role matches
};

export default ProtectedRoute;
