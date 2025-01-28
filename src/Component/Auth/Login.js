import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../../context/Auth/AuthContext';

const Login = () => {
const {logout,setIsAuthenticated} = useContext(authContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate()

    const login = (token) => {
        localStorage.setItem('auth_token', token); // Use 'auth_token'
        setIsAuthenticated(true);
        navigate(`/home`);
      };
    
    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     // // Handle login logic here
    //     // console.log("Logged in with", email, password, rememberMe);
        
    // };

    return (
        <div className="d-flex justify-content-center align-items-center login" style={{ height: '100vh' }} >
            <div className="card p-4 login-box" >
                <h2 className="text-center mb-4">Login</h2>
                <form>
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

                    <button className="btn btn-primary w-100" onClick={login}>Log In</button>
                </form>

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
