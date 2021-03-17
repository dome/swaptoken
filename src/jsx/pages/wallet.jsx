import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Wallet() {

    return (
        <><Header1 />
            <div className="appss section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-lg-6 col-md-12">
                            <div className="appss-img">
                                <img className="img-fluid" src={require('./../../images/app2.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="appss-content">
                                <h3>Mobile app</h3>
                                <p>Get the best mobile app to exchange or buy crypto on the go:</p>
                                <ul>
                                    <li><i className="la la-check"></i> Best rates on the market</li>
                                    <li><i className="la la-check"></i> High limits</li>
                                    <li><i className="la la-check"></i> No verification for exchange transactions</li>
                                    <li><i className="la la-check"></i> More than 150 cryptocurrencies</li>
                                    <li><i className="la la-check"></i> Buy bitcoin | buy crypto with USD, EUR or GBP</li>
                                </ul>
                                <div className="mt-4">
                                    <Link to={'#'} className="btn btn-primary my-1 waves-effect">
                                        <img src={require('./../../images/android.svg')} alt="" />
                                    </Link>
                                    <Link to={'#'} className="btn btn-primary my-1 waves-effect">
                                        <img src={require('./../../images/apple.svg')} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wallet-feature section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title">
                                <h2>Tradix for wallets</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wallet-feature-content">
                                <span><i className="la la-user-plus"></i></span>
                                <h4>Built-in white-label instant exchange</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wallet-feature-content">
                                <span><i className="la la-bank"></i></span>
                                <h4>Dedicated support line</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wallet-feature-content">
                                <span><i className="la la-exchange"></i></span>
                                <h4>Top-up the wallet with 140+ cryptos</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wallet-feature-content">
                                <span><i className="la la-exchange"></i></span>
                                <h4>Vast cross-marketing opportunities</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wallet-feature-content">
                                <span><i className="la la-exchange"></i></span>
                                <h4>Revenue share from every transaction</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wallet-feature-content">
                                <span><i className="la la-exchange"></i></span>
                                <h4>Revenue share from every transaction</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="all-coin section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>All your digital assets in one place</h2>
                                <p>Take full control of your tokens and collectibles by storing them on your own device.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="all-coins">
                                <span><i className="cc ADA" title="ADA"></i></span>
                                <span><i className="cc ADA-alt" title="ADA"></i></span>
                                <span><i className="cc ADC" title="ADC"></i></span>
                                <span><i className="cc ADC-alt" title="ADC"></i></span>
                                <span><i className="cc AEON" title="AEON"></i></span>
                                <span><i className="cc AEON-alt" title="AEON"></i></span>
                                <span><i className="cc AMP" title="AMP"></i></span>
                                <span><i className="cc AMP-alt" title="AMP"></i></span>
                                <span><i className="cc ANC" title="ANC"></i></span>
                                <span><i className="cc ANC-alt" title="ANC"></i></span>
                                <span><i className="cc ARCH" title="ARCH"></i></span>
                                <span><i className="cc ARCH-alt" title="ARCH"></i></span>
                                <span><i className="cc ARDR" title="ARDR"></i></span>
                                <span><i className="cc ARDR-alt" title="ARDR"></i></span>
                                <span><i className="cc ARK" title="ARK"></i></span>
                                <span><i className="cc ARK-alt" title="ARK"></i></span>
                                <span><i className="cc AUR" title="AUR"></i></span>
                                <span><i className="cc AUR-alt" title="AUR"></i></span>
                                <span><i className="cc BANX" title="BANX"></i></span>
                                <span> <i className="cc BANX-alt" title="BANX"></i></span>
                                <span><i className="cc BAT" title="BAT"></i></span>
                                <span><i className="cc BAT-alt" title="BAT"></i></span>
                                <span><i className="cc BAY" title="BAY"></i></span>
                                <span><i className="cc BAY-alt" title="BAY"></i></span>
                                <span><i className="cc BC" title="BC"></i></span>
                                <span><i className="cc BC-alt" title="BC"></i></span>
                                <span><i className="cc BCN" title="BCN"></i></span>
                                <span><i className="cc BCN-alt" title="BCN"></i></span>
                                <span><i className="cc BFT" title="BFT"></i></span>
                                <span><i className="cc BFT-alt" title="BFT"></i></span>
                                <span><i className="cc BRK" title="BRK"></i></span>
                                <span><i className="cc BRK-alt" title="BRK"></i></span>
                                <span><i className="cc BRX" title="BRX"></i></span>
                                <span><i className="cc BRX-alt" title="BRX"></i></span>
                                <span><i className="cc BSD" title="BSD"></i></span>
                                <span><i className="cc BSD-alt" title="BSD"></i></span>
                                <span><i className="cc BTA" title="BTA"></i></span>
                                <span><i className="cc BTC" title="BTC"></i></span>
                                <span><i className="cc BTC-alt" title="BTC"></i></span>
                                <span><i className="cc BCH" title="BCC"></i></span>
                                <span><i className="cc BCH-alt" title="BCC"></i></span>
                                <span><i className="cc BTCD" title="BTCD"></i></span>
                                <span><i className="cc BTCD-alt" title="BTCD"></i></span>
                                <span><i className="cc BTM" title="BTM"></i></span>
                                <span><i className="cc BTM-alt" title="BTM"></i></span>
                                <span><i className="cc BTS" title="BTS"></i></span>
                                <span><i className="cc BTS-alt" title="BTS"></i></span>
                                <span><i className="cc BURST" title="BURST"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="all-coin-content">
                                <h3>Multi-Coin Support</h3>
                                <p>Manage BTC, BCH, ETH, ETC, LTC, and all your ERC-20 tokens.
                            </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="all-coin-content">
                                <h3>Digital collectibles</h3>
                                <p>Cats, monsters, art - store all your ERC721 collectibles in a single beautiful gallery.
                            </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="all-coin-content">
                                <h3>Secure storage</h3>
                                <p>Your keys are protected with Secure Enclave and biometric authentication technology.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="all-coin section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>Easily send and receive crypto</h2>
                                <p>Pay anyone in the world with just their Tradix Wallet username</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="wallet-map">
                                <img src={require('./../../images/map.png')} alt="" className="img-fluid" />
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

export default Wallet;