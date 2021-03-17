import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Team() {

    return (
        <><Header1 />
            <div className="join-team section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="join-team-content text-center">
                                <h2 className="mb-2">Want to work with us?</h2>
                                <p className="mb-4">We're always looking to hire talented folks to join our ever-growing team of
                                designers, engineers, and support staff.</p>
                                <Link to={'#'} className="btn btn-primary px-4 py-2">View Open Position</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-member section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Small team. Big hearts.</h2>
                                <p>Our focus is always on finding the best people to work with. Our bar is high, but you
                                    look
                                ready to take on the challenge.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-4">
                            <img src={require('./../../images/team/1.jpg')} className="img-fluid rounded shadow-md" alt="..." />
                        </div>
                        <div className="col-3">
                            <img src={require('./../../images/team/2.jpg')} className="img-fluid rounded shadow-md mb-4" alt="..." />
                            <img src={require('./../../images/team/3.jpg')} className="img-fluid rounded shadow-md" alt="..." />
                        </div>
                        <div className="col-5">
                            <div className="row mb-4">
                                <div className="col-5">
                                    <img src={require('./../../images/team/4.jpg')} className="img-fluid rounded shadow-md mb-4" alt="..." />
                                </div>
                                <div className="col-7">
                                    <img src={require('./../../images/team/5.jpg')} className="img-fluid rounded shadow-md mb-4" alt="..." />
                                </div>
                                <div className="col-12">
                                    <img src={require('./../../images/team/6.jpg')} className="img-fluid rounded shadow-md" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="trusted-business py-5 text-center">
                                <h3>Trusted by over <strong>Millions of business</strong> around the world</h3>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/1.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/2.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/3.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/4.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/5.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/5.webp')} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="interested-join section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="interested-join-content text-center">
                                <h2>Interested in joining our team?</h2>
                                <p>Hit us up and we'll get in touch with you.</p>
                                <Link to={'#'} className="btn btn-primary">Apply Now</Link>
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

export default Team;