import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'
import Dashboard from '../layouts/admin/Dashboard';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} element={isAuthenticated ? <Dashboard><Component /></Dashboard> : <Navigate replace to='/login' />} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(PrivateRoute)