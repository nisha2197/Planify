import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from '../../context/Auth/AuthContext';

const AuthRoute = ({ element }) => {
    const { isAuthenticated } = useContext(authContext);
    console.log(isAuthenticated)
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        // Check if the requested component is Login or SignUp to redirect properly
        return <Navigate to="/signup" />;
    }

    // If authenticated, render the protected element
    return element;
};

export default AuthRoute;
