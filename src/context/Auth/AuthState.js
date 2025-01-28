import { useEffect, useState } from 'react';
import authContext from './AuthContext';

const AuthState = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Default to false, change as needed

    useEffect(() => {
        const token = localStorage.getItem('auth_token'); // Use 'auth_token' for consistency
        
        if (token) {
            setIsAuthenticated(null);
        }
    }, []);


    const logout = () => {
        localStorage.removeItem('auth_token'); // Use 'auth_token'
        setIsAuthenticated(false);
    };

    return (
        <authContext.Provider value={{ isAuthenticated, logout, setIsAuthenticated }}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;
