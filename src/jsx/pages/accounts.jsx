import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';



function Accounts() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card profile_card">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="mr-3 rounded-circle mr-0 mr-sm-3" src={require('./../../images/profile/2.png')} width="60"
                                            height="60" alt="" />
                                        <div className="media-body">
                                            <span>Hello</span>
                                            <h4 className="mb-2">Maria Pascle</h4>
                                            <p className="mb-1"> <span><i className="fa fa-phone mr-2 text-primary"></i></span> +1
                                            235 5547</p>
                                            <p className="mb-1"> <span><i className="fa fa-envelope mr-2 text-primary"></i></span>
                                                hello@example.com
                                        </p>
                                        </div>
                                    </div>

                                    <ul className="card-profile__info">
                                        <li>
                                            <h5 className="mr-4">Address</h5>
                                            <span className="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
                                        </li>
                                        <li className="mb-1">
                                            <h5 className="mr-4">Total Log</h5>
                                            <span>103 Time (Today 5 Times)</span>
                                        </li>
                                        <li>
                                            <h5 className="text-danger mr-4">Last Log</h5>
                                            <span className="text-danger">3 February, 2019, 10:00 PM</span>
                                        </li>
                                    </ul>
                                    <div className="social-icons">
                                        <Link className="facebook text-center" to={'#'}><span><i
                                            className="fa fa-facebook"></i></span></Link>
                                        <Link className="twitter text-center" to={'#'}><span><i
                                            className="fa fa-twitter"></i></span></Link>
                                        <Link className="youtube text-center" to={'#'}><span><i
                                            className="fa fa-youtube"></i></span></Link>
                                        <Link className="googlePlus text-center" to={'#'}><span><i
                                            className="fa fa-google"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card acc_balance">
                                <div className="card-header">
                                    <h4 className="card-title">Wallet</h4>
                                </div>
                                <div className="card-body">
                                    <span>Available BTC</span>
                                    <h3>0.0230145 BTC</h3>

                                    <div className="d-flex justify-content-between my-4">
                                        <div>
                                            <p className="mb-1">Buy this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                        <div>
                                            <p className="mb-1">Sell this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                    </div>

                                    <div className="btn-group mb-3">
                                        <button className="btn btn-primary">Sell</button>
                                        <button className="btn btn-success">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Withdraw</h4>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                </div>
                                                <input type="text" className="form-control" placeholder="5000 USD" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text"><i className="fa fa-bank"></i></label>
                                                </div>
                                                <select className="form-control">
                                                    <option>Bank of America ********45845</option>
                                                    <option>Master Card ***********5458</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button className="btn btn-primary btn-block">Withdraw Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title">All Activities</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>

                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc BTC"></i> BTC
                                                    </td>
                                                        <td>
                                                            Using - Bank *******5264
                                                    </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc LTC"></i> LTC
                                                    </td>
                                                        <td>
                                                            Using - Card *******8475
                                                    </td>
                                                        <td className="text-success">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc XRP"></i> XRP
                                                    </td>
                                                        <td>
                                                            Using - Card *******8475
                                                    </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc DASH"></i> DASH
                                                    </td>
                                                        <td>
                                                            Using - Card *******2321
                                                    </td>
                                                        <td className="text-success">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc BTC"></i> BTC
                                                    </td>
                                                        <td>
                                                            Using - Card *******2321
                                                    </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Accounts;