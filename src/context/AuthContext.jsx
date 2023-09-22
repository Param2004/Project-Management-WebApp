import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ( { children } ) => {

    const [user, setUser] = useState()

    const login = ({email, password}) => {
        setUser({ email, password})
    }

    const logout = () => {
        setUser(null)
    }

    const register = () => {
        setUser({email, password})
    }

    return( 
        <AuthContext.Provider value={ {user, setUser, login, logout, register}} >
            {children}
        </AuthContext.Provider>
    );
}

export  const useAuth = () =>{
    return useContext(AuthContext)
}
