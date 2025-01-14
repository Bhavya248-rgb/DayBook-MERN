import React from 'react'
import { Route,Navigate } from 'react-router-dom';

const PrivateRoute = ({element:component}) => {
    const token = localStorage.getItem('token');
    console.log("Token from Private route:",token)

  return (
    token ? component : <Navigate to="/login" replace/>
)
}

export default PrivateRoute