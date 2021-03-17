import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'





function Header1() {


    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/bolo-64.png')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <Nav className="ml-auto">

                                            <Nav.Item><Link to={'#'}>Swap</Link></Nav.Item>
                                        </Nav>

                                    </Navbar.Collapse>

                                </Navbar>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1;
