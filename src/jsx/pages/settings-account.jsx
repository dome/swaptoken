import React, {  } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import SettingsNav from '../element/settings-nav';



function SettingsAccount() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-md-4">
                        <SettingsNav />
                    </div>
                    <div className="col-xl-9 col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Linked Account or Card</h4>
                            </div>
                            <div className="card-body">
                                <div className="form">
                                    <ul className="linked_account">
                                        <li>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="media">
                                                        <span className="mr-3"><i className="fa fa-bank"></i></span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">Bank of America</h5>
                                                            <p>Bank **************5421</p>
                                                        </div>
                                                        <div className="edit-option">
                                                            <Link to={'#'}><i className="fa fa-eye"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="verify">
                                                        <div className="verified">
                                                            <span><i className="la la-check"></i></span>
                                                            <Link to={'#'}>Verified</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="media my-4">
                                                        <span className="mr-3"><i className="fa fa-cc-mastercard"></i></span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">Master Card</h5>
                                                            <p>Credit Card *********5478</p>
                                                        </div>
                                                        <div className="edit-option">
                                                            <Link to={'#'}><i className="fa fa-eye"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="verify">
                                                        <div className="verified">
                                                            <span><i className="la la-check"></i></span>
                                                            <Link to={'#'}>Verified</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="media">
                                                        <span className="mr-3"><i className="fa fa-credit-card"></i></span>
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">Debit Card</h5>
                                                            <p>Prepaid Card *********5478</p>
                                                        </div>
                                                        <div className="edit-option">
                                                            <Link to={'#'}><i className="fa fa-eye"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="verify">
                                                        <div className="not-verify">
                                                            <span><i className="la la-close"></i></span>
                                                            <Link to={'#'}>Not verified</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="mt-5">
                                        <Link to={'./verify-step-5'} className="btn btn-primary px-4 mr-3">Add Bank
                                            Account</Link>
                                        <Link to={'././verify-step-1'} className="btn btn-success px-4">Add Debit
                                            Account</Link>
                                    </div>
                                </div>
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

export default SettingsAccount;