import { useEffect, useState } from 'react';
import authContext from './AuthContext';
import api from '../../Environment/environment';

const AuthState = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('auth_token')); // Default to false, change as needed
    const apiUrl = api
    useEffect(() => {
        const token = localStorage.getItem('auth_token');

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);


    const logout = () => {
        localStorage.removeItem('auth_token');
        setIsAuthenticated(false);
    };

    const signUpUser = async (obj) => {
        const response = await fetch(`${apiUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            },
            body: JSON.stringify(obj)
        });
    }

    return (
        <authContext.Provider value={{ isAuthenticated, logout, setIsAuthenticated, signUpUser }}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;
