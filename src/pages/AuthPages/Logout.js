import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';

const Logout = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            await logoutUser();
            navigate('/auth-login');
        };

        handleLogout();
    }, [logoutUser, navigate]);

    return null
};

export default Logout;
