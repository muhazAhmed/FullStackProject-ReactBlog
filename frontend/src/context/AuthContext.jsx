import React, { useEffect, useState, createContext } from 'react'
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    // const navigate = useNavigate();
    
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem ("user")) || null)

    const login = async (input) => {
        const res = await axios.post("/auth/login", input);
       setCurrentUser (res.data) 
    }

    const logout = async (input) => {
        await axios.post("/auth/logout");
        // navigate("/login");
       setCurrentUser (null) 
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
