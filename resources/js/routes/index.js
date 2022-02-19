import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {
                    routes.map((route) => {
                        return <Route key={route.path} path={route.path} exact={route.exact} />
                    })
                }
            </Routes>
        </Router>
    )
}

export default AppRoutes