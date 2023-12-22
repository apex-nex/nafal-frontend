import React, { createContext, useContext, useEffect, useState } from "react";
import { get } from "../components/helpers/api_helper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("mode"));

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
        try {
            const data = await get('/admin/auth', { "Authorization": `Bearer ${token}` });
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Function to toggle dark mode
    const toggleDarkMode = (mode = false) => {
        if (mode) {
            localStorage.setItem("mode", true)
        }
        setIsDarkMode(mode);
    };

    useEffect(() => {
        userAuthentication()
    }, [])

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, isDarkMode, storeTokenInLS, logoutUser, toggleDarkMode }}>
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