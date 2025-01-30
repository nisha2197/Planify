import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from '../../context/Auth/AuthContext';

const AuthRoute = ({ element , publicRoute = false}) => {
    const { isAuthenticated } = useContext(authContext);
    // If not authenticated, redirect to login
    if (!isAuthenticated && !publicRoute) {
        // Check if the requested component is Login or SignUp to redirect properly
        return <Navigate to="/login" />;
    }

    // If authenticated, render the protected element
    return element;
};

export default AuthRoute;
