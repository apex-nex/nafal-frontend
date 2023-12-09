import React, { useEffect } from 'react'
import { useAuth } from "../../store/auth"

const Logout = () => {
    const { LogoutUser } = useAuth()
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])

    return window.location.replace("/admin/login")
}

export default Logout