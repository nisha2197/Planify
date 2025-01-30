import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../context/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Navbar(props) {
    const context = useContext(authContext);
    const { isAuthenticated, logout } = context

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to the login page after logout
    };
    return (
        <>
            {isAuthenticated &&
                <div>
                    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode }}
                        data-bs-theme={`${props.mode}`}>
                        <div className="container-fluid">
                            <Link className="navbar-brand text-white" to="/home">Planify</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/about">About Us</Link>
                                    </li>
                                </ul>
                                {
                                    props.isDarkModeEnabled &&
                                    <div className="form-check form-switch mx-2">
                                        <a><i className="bi bi-moon-fill"></i>
                                        </a>
                                    </div>
                                }
                                <div className="form-check form-switch mx-3" style={{ borderRight: '2px solid white', paddingRight: '6px' }}>
                                    <input className="form-check-input text-center" type="checkbox" role="switch" onClick={props.toggleThemMode}
                                        id="flexSwitchCheckDefault" />
                                    {
                                        !props.isDarkModeEnabled && <a>
                                            <i className="bi bi-brightness-high-fill text-white"></i>
                                        </a>
                                    }
                                </div>
                                {
                                    isAuthenticated &&
                                    <a onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right fs-4 text-white"></i>
                                    </a>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            }
        </>
    )
}
