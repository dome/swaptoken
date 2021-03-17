import React, { } from 'react';
import { Link } from 'react-router-dom';



function Locked() {

    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-5">
                                <Link to={'./'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Locked</h4>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-group mb-4">
                                            <label>Enter Password</label>
                                            <input type="password" className="form-control"
                                                placeholder="Password" />
                                        </div>
                                        <Link to={'./'} className="btn-success btn-block btn-lg border-0 text-center" type="submit">Unlock</Link>
                                    </form>
                                    <div className="new-account text-center mt-3">
                                        <Link className="text-primary" to={'./reset'}>
                                            <h5>Not Maria Pascle?</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locked;