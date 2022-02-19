import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Dashboard = ({ children }) => {
    return (
        <>
            <Topbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default Dashboard