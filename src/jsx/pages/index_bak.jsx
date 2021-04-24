import React, { } from 'react';
import { Link } from 'react-router-dom';
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
import Testimonial from '../element/testimonial';
//import { provider } from 'web3-core'
//import { Contract } from 'web3-eth-contract'
import MyERC20 from "../utils/ERC20.json";
// import getWeb3 from "../utils/getWeb3";
import Web3 from "web3";

import {
    ConnectionRejectedError,
    UseWalletProvider,
    useWallet,
} from 'use-wallet'
import TokenAmount from 'token-amount'


var tokenBalance= "0"
var busdTestnet = "0xed0cdb9c9045013b1716931f42f64c2415d89a60"
var busd = "'0xe9e7cea3dedca5984780bafc599bd69add087d56'"

function Homepage() {
    //const wallet = useWallet()
    
    const { account, connect, reset, status, balance } = useWallet()
    // BSC Testnet 
   // const web3 = new Web3('https://rpc-bsc-testnet.8api.sh/')
    //const web3 = getWeb3();

    const activate = async (connector) => {
        //getTokenbalance()
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();
            const ERC20Instance = new web3.eth.Contract(
                MyERC20.abi,
                busdTestnet
            )
            //console.log(networkId)
            console.log(networkId)
            tokenBalance =  await ERC20Instance.methods.balanceOf(accounts[0]).call();
            connect(connector)

        } catch (error) {

        }
    }



    return (
        <>
            <Header1 />

            <div className="intro">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="intro-content">
                                <h1>Swaptoken With <strong className="text-primary">XXX</strong>. <br /> Best price in the world

                            </h1>
                                <p>Fast and secure way to purchase or exchange 150+ cryptocurrencies</p>
                            </div>

                            <div className="intro-btn">
                                <Link className="btn btn-primary">Get Started</Link>
                                <Link to={'#'} className="btn btn-outline-primary">Browse Now</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                            <div className="intro-form-exchange">

                                <div className="form-group">
                                    <label className="mr-sm-2">Send</label>
                                    <div className="input-group mb-3">
                                        <select name='currency' className="form-control">
                                            <option data-display="busd" value="bitcoin">BUSD</option>
                                        </select>
                                        <input type="text" name="usd_amount" className="form-control" value= {TokenAmount.format(tokenBalance, 18, { symbol: '' })} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="mr-sm-2">Get</label>
                                    <div className="input-group mb-3">
                                        <select name='currency' className="form-control">
                                            <option data-display="SWAP" value="bolo">SWAP</option>
                                           
                                        </select>
                                        <input type="text" name="usd_amount" className="form-control" value="" />
                                    </div>

                                    {status === 'connected' ? (
                                        
                                        <div>
                                            <div className="d-flex justify-content-between mt-0 align-items-center">
                                                <h6 className="mb-0">Balance: {balance === '-1'
                                                    ? '…'
                                                    : TokenAmount.format(tokenBalance, 18, { symbol: 'BUSD' })}</h6>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                        </div>
                                    )}
                                </div>
                                {status}
                                {(() => {
                                    
                                    if (status === 'connected') {

                                        return (
                                            <button className="btn btn-success btn-block">Swap Now <i className="la la-arrow-right"></i> </button>
                                        )
                                    } else {
                                        return (
                                            <button className="btn btn-success btn-block" onClick={() => activate('injected')}>Connect <i className="la la-arrow-right"></i> </button>
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price-grid section-padding">
                <div className="container">
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
            </div>

            <div className="getstart section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title">
                                <h2>Get started in a few minutes</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-user-plus"></i></span>
                                <h3>Create an account</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-bank"></i></span>
                                <h3>Link your bank account</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-exchange"></i></span>
                                <h3>Start buying & selling</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio section-padding" data-scroll-index="2">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Create your cryptocurrency portfolio today</h2>
                                <p>Tradix has a variety of features that make it the best place to start trading</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6">
                            <div className="portfolio_list">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-bar-chart"></i></span>
                                            <div className="media-body">
                                                <h4>Manage your portfolio</h4>
                                                <p>Buy and sell popular digital currencies, keep track of them in the one
                                                place.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-calendar-check-o"></i></span>
                                            <div className="media-body">
                                                <h4>Recurring buys</h4>
                                                <p>Invest in cryptocurrency slowly over time by scheduling buys daily,
                                                weekly,
                                                or monthly.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-lock"></i></span>
                                            <div className="media-body">
                                                <h4>Vault protection</h4>
                                                <p>For added security, store your funds in a vault with time delayed
                                                withdrawals.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-mobile"></i></span>
                                            <div className="media-body">
                                                <h4>Mobile apps</h4>
                                                <p>Stay on top of the markets with the Tradix app for <Link
                                                    to={'#'}>Android</Link>
                                                    or
                                                <Link to={'#'}>iOS</Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="portfolio_img">
                                <img src={require('./../../images/portfolio.png')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trade-app section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Trade. Anywhere</h2>
                                <p> All of our products are ready to go, easy to use and offer great value to any kind of
                                business
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-mobile"></i></span>
                                    <h4 className="card-title">Mobile</h4>
                                    <p>All the power of Tradix's cryptocurrency exchange, in the palm of your hand. Download
                                    the
                                    Tradix mobile crypto trading app today</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-desktop"></i></span>
                                    <h4 className="card-title">Desktop</h4>
                                    <p>Powerful crypto trading platform for those who mean business. The Tradix crypto
                                    trading
                                    experience, tailor-made for your Windows or MacOS device.</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-connectdevelop"></i></span>
                                    <h4 className="card-title">API</h4>
                                    <p>The Tradix API is designed to provide an easy and efficient way to integrate your
                                    trading
                                    application into our platform.</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-xl-12">
                            <div className="trusted-business py-5 text-center">
                                <h3>Trusted by Our <strong>Partners & Investors</strong></h3>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="testimonial section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>What our customer says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="testimonial-content">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="promo section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>The most trusted cryptocurrency platform</h2>
                                <p> Here are a few reasons why you should choose Tradix
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center py-5">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={require('./../../images/svg/protect.svg')} alt="" />
                                </div>
                                <h3>Secure storage </h3>
                                <p>We store the vast majority of the digital assets in secure offline storage.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={require('./../../images/svg/cyber.svg')} alt="" />
                                </div>
                                <h3>Protected by insurance</h3>
                                <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={require('./../../images/svg/finance.svg')} alt="" />
                                </div>
                                <h3>Industry best practices</h3>
                                <p>Tradix supports a variety of the most popular digital currencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appss section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            <div className="appss-content">
                                <h2>The secure app to store crypto yourself</h2>
                                <ul>
                                    <li><i className="la la-check"></i> All your digital assets in one place</li>
                                    <li><i className="la la-check"></i> Use Decentralized Apps</li>
                                    <li><i className="la la-check"></i> Pay friends, not addresses</li>
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
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="appss-img">
                                <img className="img-fluid" src={require('./../../images/app.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/1.jpg')} alt="" />
                                    <div className="card-body">
                                        <Link href="blog-single.html">
                                            <h4 className="card-title">Why does Litecoin need MimbleWimble?</h4>
                                        </Link>
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                        of
                                        old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/5.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, 2019</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/2.jpg')} alt="" />
                                    <div className="card-body">
                                        <Link href="blog-single.html">
                                            <h4 className="card-title">How to securely store your HD wallet seeds?</h4>
                                        </Link>
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                        of
                                        old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/6.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, 2019</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/3.jpg')} alt="" />
                                    <div className="card-body">
                                        <Link href="blog-single.html">
                                            <h4 className="card-title">Exclusive Interview With Xinxi Wang Of Litecoin</h4>
                                        </Link>
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                        of
                                        old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/7.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, 2019</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="get-touch section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>Get in touch. Stay in touch.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-shield"></i></span>
                                    <div className="media-body">
                                        <h4>24 / 7 Support</h4>
                                        <p>Got a problem? Just get in touch. Our support team is available 24/7.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-cubes"></i></span>
                                    <div className="media-body">
                                        <h4>Tradix Blog</h4>
                                        <p>News and updates from the world’s leading cryptocurrency exchange.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-certificate"></i></span>
                                    <div className="media-body">
                                        <h4>Careers</h4>
                                        <p>Help build the future of technology. Start your new career at Tradix.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-life-ring"></i></span>
                                    <div className="media-body">
                                        <h4>Community</h4>
                                        <p>Tradix is global. Join the discussion in our worldwide communities.
                                    </p>
                                    </div>
                                </div>
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

//export default Homepage;

export default () => (
    <UseWalletProvider
        chainId={97}
        connectors={{
        }}
    >
        <Homepage />
    </UseWalletProvider>
)
