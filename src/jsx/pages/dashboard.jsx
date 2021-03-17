import React, { } from 'react';
 import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import BtcChart from '../charts/btc';
import EthChart from '../charts/eth';
import LtcChart from '../charts/ltc';
import XrpChart from '../charts/xrp';
import AreaChart from '../charts/area';



function Dashboard() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-xxl-4">
                            <div className="card balance-widget">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Your Portfolio </h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="balance-widget">
                                        <div className="total-balance">
                                            <h3>$63411.00</h3>
                                            <h6>Total Balance</h6>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="media">
                                                <i className="cc BTC mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Bitcoin</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 BTC</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <i className="cc LTC mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Litecoin</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 LTC</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <i className="cc XRP mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Ripple</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 XRP</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <i className="cc DASH mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Dash</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 XRP</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-8 col-xxl-8">
                            <div className="card profile_chart">
                                <div className="card-header py-0">
                                    <div className="chart_current_data">
                                        <h3>254856 <span>USD</span></h3>
                                        <p className="text-success">125648 <span>USD (20%)</span></p>
                                    </div>
                                    {/* <div className="duration-option">
                                        <Linkid="all" className="active">ALL</Link>
                                        <Linkid="one_month" className="">1M</Link>
                                        <Linkid="six_months">6M</Link>
                                        <Linkid="one_year" className="">1Y</Link>
                                        <Linkid="ytd" className="">YTD</Link>
                                    </div> */}
                                </div>
                                <div className="card-body">
                                    <AreaChart />
                                    <div className="chart-content text-center">
                                        <div className="row">
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">24hr Volume</p>
                                                    <h5>$1236548.325</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Market Cap</p>
                                                    <h5>19B USD</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Circulating Supply</p>
                                                    <h5>29.4M BTC</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">All Time High</p>
                                                    <h5>19.783.06 USD</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Typical hold time </p>
                                                    <h5>88 days</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Trading activity </p>
                                                    <h5>70% buy </h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Popularity </p>
                                                    <h5>#1 most held </h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Popularity </p>
                                                    <h5>#1 most held </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-xxl-12">
                            <div className="card">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Follow</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-6 col-xxl-6">
                                            <div className="widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <span><i className="cc BTC"></i></span>
                                                            <h5 className="d-inline-block ml-2 mb-3">Bitcoin <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span className="badge badge-success ml-2">+ 06%</span>
                                                        </h4>
                                                    </div>
                                                    <BtcChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-6 col-xxl-6">
                                            <div className="widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <span><i className="cc ETH"></i></span>
                                                            <h5 className="d-inline-block ml-2 mb-3">Ethereum <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span className="badge badge-danger ml-2">- 06%</span>
                                                        </h4>
                                                    </div>
                                                    <EthChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-6 col-xxl-6">
                                            <div className="widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <span><i className="cc LTC"></i></span>
                                                            <h5 className="d-inline-block ml-2 mb-3">Litecoin <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span className="badge badge-primary ml-2"> 06%</span>
                                                        </h4>
                                                    </div>
                                                    <LtcChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-6 col-xxl-6">
                                            <div className="widget-card">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="widget-stat">
                                                        <div className="coin-title">
                                                            <span><i className="cc XRP"></i></span>
                                                            <h5 className="d-inline-block ml-2 mb-3">Ripple <span>(24h)</span>
                                                            </h5>
                                                        </div>
                                                        <h4>USD 1254.36 <span className="badge badge-danger ml-2">- 06%</span>
                                                        </h4>
                                                    </div>
                                                    <XrpChart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-xxl-4">
                            <div className="card">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Exchange</h4>
                                </div>
                                <div className="card-body">
                                    <div className="buy-sell-widget">
                                        <form method="post" name="myform" className="currency_validate">
                                            <div className="form-group">
                                                <label className="mr-sm-2">Currency</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                        <option value="litecoin">Litecoin</option>
                                                    </select>
                                                    <input type="text" name="usd_amount" className="form-control"
                                                        value="125.00 USD" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="mr-sm-2">Payment Method</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                        <option value="litecoin">Litecoin</option>
                                                    </select>
                                                    <input type="text" name="usd_amount" className="form-control"
                                                        value="125.00 USD" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="mr-sm-2">Enter your amount</label>
                                                <div className="input-group">
                                                    <input type="text" name="currency_amount" className="form-control"
                                                        placeholder="0.0214 BTC" />
                                                    <input type="text" name="usd_amount" className="form-control"
                                                        placeholder="125.00 USD" />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <p className="mb-0">Monthly Limit</p>
                                                    <h6 className="mb-0">$49750 remaining</h6>
                                                </div>
                                            </div>
                                            <button type="submit" name="submit" className="btn btn-success btn-block">Exchange
                                            Now</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-xxl-8">
                            <div className="card">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Recent Activities</h4>
                                    <Link to={'#'}>View More </Link>
                                </div>
                                <div className="card-body">
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
                                                            <i className="cc BTC"></i> Bitcoin
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
                                                            <i className="cc LTC"></i> Litecoin
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
                                                            <i className="cc XRP"></i> Ripple
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
                                                            <i className="cc DASH"></i> Dash
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
                                                            <i className="cc BTC"></i> Bitcoin
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

export default Dashboard;