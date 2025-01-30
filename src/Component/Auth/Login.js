import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../../context/Auth/AuthContext';
import api from '../../Environment/environment';

const Login = () => {
    const { setIsAuthenticated } = useContext(authContext); // Ensure this function is in context to update authentication state
    const apiUrl = api;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false); // State to track loading
    const [error, setError] = useState(''); // State to handle errors
    const navigate = useNavigate();

    // Async login function
    const login = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true); // Set loading state to true

        const obj = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch(`${apiUrl}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });

            const data = await response.json();

            if (response.ok) {
                // Successfully logged in
                localStorage.setItem('auth_token', data.access_token);
                setIsAuthenticated(true);
                navigate('/home');
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred while logging in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center login" style={{ height: '100vh' }}>
            <div className="card p-4 login-box">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                </form>

                {error && <div className="text-danger mt-3">{error}</div>}

                <div className="mt-3 text-center">
                    <Link to="/forgot-password">Forgot your password?</Link>
                </div>

                <div className="mt-2 text-center">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
