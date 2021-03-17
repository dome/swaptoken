import React, { } from 'react';
import { Link } from 'react-router-dom';



function Bottom() {

    return (
        <>
            <div className="bottom section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-logo">
                                <img className="pb-3" src={require('./../../images/bolo-32.png')} alt="" />

                                
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Bottom;