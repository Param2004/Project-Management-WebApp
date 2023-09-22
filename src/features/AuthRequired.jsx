import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

function AuthRequired({ children }) {

    const { user } = useAuth()
    const location = useLocation()

    if(!user){
        return <Navigate to="/login"  state={{ path: location.pathname}} />
    }

  return children
}

export default AuthRequired