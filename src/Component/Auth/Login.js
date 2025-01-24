import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/Auth/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(authContext)
    const { login } = context
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Here you should send the credentials to your backend for authentication
        // For now, we're just simulating a successful login
        if (username === 'user' && password === 'password') {
            login('auth_token_example'); // Simulate successful login with a token
            navigate('/home'); // Redirect to home after login
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
