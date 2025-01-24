import authContext from './AuthContext';
import { useEffect, useState } from 'react';

const AuthState = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('auth_token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setIsAuthenticated(false);
    };

    return (
        <authContext.Provider value={{ isAuthenticated, login, logout }}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;
