import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import Footer2 from '../layout/footer2';



function VerifyStep1() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form action="#" className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon"><i className="fa fa-shield"></i></span>
                                            <h4>Please verify your identity before adding your card</h4>
                                            <p>Uploading your ID helps as ensure the safety and security of your founds</p>
                                        </div>

                                        <div className="text-center">
                                            <Link to={'./verify-step-2'} type="submit" className="btn btn-success pl-5 pr-5">Upload ID</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default VerifyStep1;