import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={'./dashboard'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i className="la la-igloo"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./buy-sell'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i className="la la-exchange"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./accounts'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i className="la la-user"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./settings'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i className="la la-tools"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;