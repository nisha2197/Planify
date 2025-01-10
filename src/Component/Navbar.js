import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode}} 
            data-bs-theme={`${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">Planify</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">About Us</a>
                            </li>
                        </ul>
                        {props.isDarkModeEnabled && <div className="form-check form-switch mx-2">
                            <a><i className="bi bi-moon-fill"></i></a>
                        </div>
                        }
                        <div className="form-check form-switch">
                            <input className="form-check-input text-center" type="checkbox" role="switch" onClick={props.toggleThemMode} id="flexSwitchCheckDefault" />
                            {!props.isDarkModeEnabled && <a><i className="bi bi-brightness-high-fill"></i></a>}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
