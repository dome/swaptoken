import React, { } from 'react';
 import { Link } from 'react-router-dom';
import { Line } from 'peity-react';
import { Tabs, Tab } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
import BtcChart from '../charts/btc';
import DashChart from '../charts/dash';
import EosChart from '../charts/eos';
import EthChart from '../charts/eth';
import LtcChart from '../charts/ltc';
import UsdChart from '../charts/usd';
import XrpChart from '../charts/xrp';
import XtzChart from '../charts/xtz';



function Price() {

    return (
        <><Header1 />
            <div className="pricing section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="coin-search">
                                <div className="search-box">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Search Coin" />
                                        <button className="btn btn-success">Search</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-12 coin-view">
                            <div className="sort-view">
                                <div className="search-timeline">
                                    <Link to={'#'} className="active">1H</Link>
                                    <Link to={'#'}>24H</Link>
                                    <Link to={'#'}>1W</Link>
                                    <Link to={'#'}>1M</Link>
                                    <Link to={'#'}>1Y</Link>
                                </div>
                            </div>
                            <Tabs defaultActiveKey="grid">
                                <Tab eventKey="grid" title="Grid">
                                    <div className="price-grid mt-3">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc BTC"></i></span>
                                                            <div className="media-body">
                                                                Bitcoin
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <BtcChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc LTC"></i></span>
                                                            <div className="media-body">
                                                                Litecoin
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <LtcChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc DASH"></i></span>
                                                            <div className="media-body">
                                                                Dashcoin
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <DashChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc XRP"></i></span>
                                                            <div className="media-body">
                                                                Ripple
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <XrpChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc ETH"></i></span>
                                                            <div className="media-body">
                                                                Ethereum
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <EthChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc USDT"></i></span>
                                                            <div className="media-body">
                                                                Tether
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <UsdChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc EOS"></i></span>
                                                            <div className="media-body">
                                                                Eosio
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <EosChart />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="media">
                                                            <span><i className="cc XTZ"></i></span>
                                                            <div className="media-body">
                                                                Tezos
                                    </div>
                                                        </div>
                                                        <p className="mb-0"> 24h</p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3>USD 62,548.2254</h3>
                                                        <span className="text-success">+2.05%</span>
                                                        <XtzChart />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="list" title="List">
                                    <div className="market-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Change</th>
                                                        <th>Chart</th>
                                                        <th>Trade</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc BTC"></i>
                                                            <span>Bitcoin <b>BTC</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-success">+1.13%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc ETH"></i>
                                                            <span>Ethereum <b>ETH</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-success">+1.13%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc BCH-alt"></i>
                                                            <span>Bitcoin Cash <b>BCH</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-success">+1.13%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc LTC"></i>
                                                            <span>Litecoin <b>LTC</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-danger">-0.47%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc BTC"></i>
                                                            <span>Bitcoin <b>BTC</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-success">+1.13%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc ETH"></i>
                                                            <span>Ethereum <b>ETH</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-success">+1.13%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc BCH-alt"></i>
                                                            <span>Bitcoin Cash <b>BCH</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-success">+1.13%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4
                                                    </td>
                                                        <td className="coin_icon">
                                                            <i className="cc LTC"></i>
                                                            <span>Litecoin <b>LTC</b></span>
                                                        </td>

                                                        <td>
                                                            USD 680,175.06
                                                    </td>
                                                        <td>
                                                            <span className="text-danger">-0.47%</span>
                                                        </td>
                                                        <td>
                                                            <Line
                                                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                                                height="16" min="0" width="200"
                                                            />
                                                        </td>
                                                        <td><Link to={'#'} className="btn btn-success">Buy</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />

            <Footer1 />
        </>
    )
}

export default Price;