import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
//import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Metamask() {

    return (
        <><Header1 />
            <div className="contact-form section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>Metamask error!</h2>
                                <h2>Please check you network.</h2>
                                <img src={require('./../../images/metamask.svg')} alt="" className="img-fluid" />
                                <p>Please install and activate metamask. Please  <a href='https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask'>Install metamask</a>
                            </p>
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

export default Metamask;