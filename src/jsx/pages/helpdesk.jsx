import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function HelpDesk() {

    return (
        <><Header1 />
            <div className="helpdesk-search section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="helpdesk-search-content">
                                <p className="mb-1">Tradix knowledge Base</p>
                                <h2 className="mb-5">How can we help you today?</h2>
                                <div className="helpdesk-form">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Search here" />
                                        <button type="submit" className="btn btn-success">
                                            Search
                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="help-category section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="help-cat">
                                <span className="la la-video-camera"></span>
                                <h4>Video Guide</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="help-cat">
                                <span className="la la-support"></span>
                                <h4>FAQ</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="help-cat">
                                <span className="la la-book"></span>
                                <h4>API for developers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <Link to={'#'} className="sub-cat">
                                <h5> Troubleshooting </h5>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link to={'#'} className="sub-cat">
                                <h5> Partnership </h5>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link to={'#'} className="sub-cat">
                                <h5> Getting started </h5>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link to={'#'} className="sub-cat">
                                <h5> Wallets </h5>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link to={'#'} className="sub-cat">
                                <h5> Healthy Tips </h5>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <Link to={'#'} className="sub-cat">
                                <h5> Crypto-definitions </h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="troubleshooting section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>Troubleshooting</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="troubleshooting-content">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <h4>My Transaction</h4>
                                        <ul>
                                            <li><Link to={'#'}>My transaction is stuck</Link></li>
                                            <li><Link to={'#'}>The amount is too low</Link></li>
                                            <li><Link to={'#'}>Sorry, payment was not received</Link></li>
                                            <li><Link to={'#'}>Still didn't get my refund</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <h4>My Wallet</h4>
                                        <ul>
                                            <li><Link to={'#'}>My wallet address is recognized as invalid</Link></li>
                                            <li><Link to={'#'}>What does ‘Not yet redeemed?’ mean</Link></li>
                                            <li><Link to={'#'}>I sent my ABC coins to a non-ABC wallet</Link></li>
                                            <li><Link to={'#'}>ETH contract addresses</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <h4>Other</h4>
                                        <ul>
                                            <li><Link to={'#'}>Customer service doesn't reply</Link></li>
                                            <li><Link to={'#'}>The amount is too low</Link></li>
                                            <li><Link to={'#'}>Can't log in</Link></li>
                                            <li><Link to={'#'}>Can’t enable / disable 2-FA</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ticket-box section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ticket-box-content">
                                <h3>Can't find what you're looking for?</h3>
                                <p>Let us help you!</p>
                                <Link to={'#'} className="btn btn-success">Submit Ticket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Bottom />

            <Footer1 />
        </>
    )
}

export default HelpDesk;