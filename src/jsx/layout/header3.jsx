import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'



function Header3() {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <Nav className="mr-auto">
                                            <Nav.Item><a href="#intro">Home</a></Nav.Item>
                                            <Nav.Item><a href="#demo">Demo</a></Nav.Item>
                                            <Nav.Item><a href="#support">Suppport</a></Nav.Item>
                                        </Nav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn">
                                        <Link to={'#'} className="btn btn-primary mr-2">Buy</Link>
                                        <Link to={'https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses'} className="btn btn-outline-primary" target="_blank">Hire me</Link>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header3;