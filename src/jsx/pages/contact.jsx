import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Contact() {

    return (
        <><Header1 />
            <div className="contact-form section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>Metamask error!</h2>
                                <img src={require('./../../images/metamask.svg')} alt="" className="img-fluid" />
                                <p>Please install and activate metamask. Please  <Link to={'#'}>Install metamask</Link>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="info-list">
                                <h5 className="mb-3">Address</h5>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i> Pune, India</li>
                                    <li><i className="fa fa-phone"></i> (+880) 1843 666660</li>
                                    <li><i className="fa fa-envelope"></i> quixlab.com@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-5">


                                            <label for="contactName">
                                                Full name
                                        </label>


                                            <input type="text" className="form-control" id="contactName"
                                                placeholder="Full name" />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-5">


                                            <label for="contactEmail">
                                                Email
                                        </label>


                                            <input type="email" className="form-control" id="contactEmail"
                                                placeholder="hello@domain.com" />

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-7 mb-md-9">

                                            <label for="contactMessage">
                                                What can we help you with?
                                        </label>

                                            <textarea className="form-control" id="contactMessage" rows="5"
                                                placeholder="Tell us what we can help you with!"></textarea>

                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-auto">


                                        <button type="submit" className="btn btn-primary lift">
                                            Send message
                                    </button>

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />

            <Footer1 />
        </>
    )
}

export default Contact;