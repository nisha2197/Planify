import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom';
import authContext from '../../context/Auth/AuthContext'

const AuthRoute = ({ element, ...rest }) => {

    const context = useContext(authContext);
    const { isAuthenticated } = context
    return (
        <Route
            {...rest}
            render={() => (isAuthenticated ? element : <Navigate to="/" />)}
        />
    )
}

export default AuthRoute
