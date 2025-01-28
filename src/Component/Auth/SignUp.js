import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log("Signed up with", name, email, password);
    };
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center login">
                <div className="card p-4 login-box">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name"
                                placeholder="Enter your full name"
                                value={name} onChange={(e) => setName(e.target.value)} required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                value={email} onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"
                                className="form-control" id="password" placeholder="Create a password"
                                value={password} onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm-password"
                                placeholder="Confirm your password" value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="agree"
                                checked={agree} onChange={() => setAgree(!agree)} required />
                            <label className="form-check-label" htmlFor="agree">I agree to the
                                <a href="#"> Terms of Service</a> and <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-color w-100">Sign Up</button>
                    </form>

                    <div className="mt-2 text-center">
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
