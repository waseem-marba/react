import React from 'react'

const Home = () => {
    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-md-12 grid-margin">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="font-weight-bold mb-0">RoyalUI Dashboard</h4>
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary btn-icon-text btn-rounded">
                                    <i className="ti-clipboard btn-icon-prepend"></i>Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Sales</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Revenue</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Downloads</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40016</h3>
                                    <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Returns</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home