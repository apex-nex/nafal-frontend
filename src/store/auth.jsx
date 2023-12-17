import React, { createContext, useContext, useEffect, useState } from "react";
import { get } from "../components/helpers/api_helper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null)

    // set token
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    let isLoggedIn = !!token

    // logout functionality 
    const logoutUser = () => {
        setToken("")
        return localStorage.removeItem("token");
    }

    // JWT Authentication - verify user

    const userAuthentication = async () => {
        console.log("token", token)
        try {
            const data = await get('/admin/auth', {"Authorization": `Bearer ${token}`});
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        userAuthentication()
    },[])

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, storeTokenInLS, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue;
}