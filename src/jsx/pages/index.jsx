import React, { useState } from 'react';
import Async from 'react-async';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { useClipboard } from "use-clipboard-copy";
import { useForm } from "react-hook-form";
import queryString from 'query-string';
// import { withRouter } from "react-router";
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';

// import Testimonial from '../element/testimonial';
import { ethers } from "ethers";
// import TokenAmount from 'token-amount'
import { Contract } from "@ethersproject/contracts";
// import { getDefaultProvider } from "@ethersproject/providers";
//import { utils } from "@ethersproject/utils";
import { addresses, abis } from "../contracts";
const defaultProvider = new ethers.providers.Web3Provider(window.ethereum);
const signer = defaultProvider.getSigner();
const busd = new Contract(addresses.busd, abis.erc20, defaultProvider);

async function getBalance() {
    console.log("getBalance");
    // Should replace with the end-user wallet, e.g. Metamask
    if (busd && signer) {
        const tokenBalance = await busd.balanceOf(signer.getAddress());
        return tokenBalance.toString()
    }
    return "0";
}

async function getAccount() {
    console.log("getAccount");
    // Should replace with the end-user wallet, e.g. Metamask
    if (signer) {
        return signer.getAddress()
    }
    return "";
}

function Homepage() {
    const clipboard = useClipboard();
    const [acct, setAcct] = useState("");
    const [boloRate, setBoloRate] = useState("");
    //const [balance, setBalance] = useState("");
    const [bolo, setBolo] = useState("");
    const history = useHistory();
    const { register, handleSubmit, setValue, watch, errors } = useForm();
    let location = useLocation();
    let params = queryString.parse(location.search);
    if (params.ref) {
        setValue("refAccount", params.ref)
    }
    //console.log(params.ref);
    // const watchShowAge = watch("usd_amount", false);

    let provider;

    //const 

    const tokenBalance = 0;
    (async () => {
        if (typeof (web3) !== 'undefined') {
            await window.ethereum.enable()
            provider = new ethers.providers.Web3Provider(window.ethereum) // use Metamask or whatever the dApp browser provides
            const swap = new Contract(addresses.swaptoken, abis.swaptoken, provider);
            const boloRate = await swap.rate();
            setBoloRate(boloRate)
            //console.log(provider)
            const { chainId } = await provider.getNetwork()
            //setBolo(0)
            if (chainId !== 56) {

                //alert(chainId)
                //console.log(chainId)
                //history.push("/metamask");
                //return (
                //    <>
                //    </>
                //)
            } else {
                // console.log(chainId)
            }
            //getBalance()

        } else {
            console.log("redirect")
            history.push("/metamask");
            return (
                <>
                </>
            )
        }

        //console.log(await getBalance())
        //const watchAmount = watch(["usd_amount", "number"]);
        //console.log(watchAmount)
        //const wei = await getBalance()
        //setValue("usd_amount", ethers.utils.formatEther(wei))
        //console.log(ethers.utils.formatEther(await getBalance(), { commify: false }));
        //setBalance(ethers.utils.formatEther(await getBalance(), { commify: true }))
    })()

    const handleChange = (event) => {
        // get TokenB from smartcontract
        //setUSD(event.target.value)
        //console.log(event.target.value)
        setBolo(event.target.value * boloRate)
        //console.log(provider)
        //console.log(chainId)
    }
    //console.log(provider)
    //console.log(signer)
    const onSubmit = data => {
        const defaultProvider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = defaultProvider.getSigner()
        const busd = new Contract(addresses.busd, abis.erc20, defaultProvider);
        const busdWithSigner = busd.connect(signer);
        const busdamount = ethers.utils.parseUnits(data.usd_amount, 18);
        console.log(busdamount)
        const swap = new Contract(addresses.swaptoken, abis.swaptoken, defaultProvider);
        const gas = swap.estimateGas.swap(busdamount, data.refAccount);
        //console.log(gas)
        const swapWithSigner = swap.connect(signer);
        var options = { gasPrice: 20000000000, gasLimit: 200000 };
        busdWithSigner.approve(addresses.swaptoken, busdamount).then((signedTX) => {
            console.log(signedTX)
            swapWithSigner.swap(busdamount, data.refAccount, options);
        });
    }


    return (
        <>
            <Header1 />
            <div className="intro">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="intro-form-exchange">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="mr-sm-2">Send</label>
                                        <div className="input-group mb-3">
                                            <select name='currency' className="form-control">
                                                <option data-display="busd" value="bitcoin">USDT</option>
                                            </select>
                                            <input type="number" name="usd_amount" className="form-control" onChange={handleChange} ref={register({ required: true })} />
                                        </div>

                                        <div className="intro-content">
                                            <ExternalLink href="https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955">
                                                <h6 className="mb-0">USDT:0x55d398326f99059ff775485246999027b319795</h6>
                                            </ExternalLink>
                                            <Async promiseFn={getBalance}>
                                                {({ data, error, isLoading }) => {
                                                    (() => isLoading ? console.log("Async getBalance isLoading") : null)();
                                                    if (data) {
                                                        return (
                                                            <h6 className="mb-0"> Balance : {parseFloat(ethers.utils.formatEther(data)).toPrecision(4)} </h6>
                                                        )
                                                    }
                                                    
                                                    if (error) {
                                                        console.log(error);
                                                    }
                                                }}
                                            </Async>
                                        </div> <br />

                                        <label className="mr-sm-2">Referal Account</label>
                                        <div className="input-group mb-3">
                                            <input type="text" color="secondary" name="refAccount" ref={register({ required: true, pattern: /^0x[a-fA-F0-9]{40}$/ })} className="form-control" />
                                        </div>
                                        <div className="balance-widget">
                                            <ul className="list-unstyled">
                                                <li className="media">
                                                    <i className="cc BOLO mr-3"></i>
                                                    <div className="media-body">
                                                        <h5 className="m-0">Get</h5>
                                                    </div>
                                                    <div className="text-right">

                                                        <h5>{bolo ? parseFloat(bolo).toPrecision(4) : 0} BOLO</h5>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-group">

                                        {provider ? (

                                            <div>
                                                <div className="d-flex justify-content-between mt-0 align-items-center">
                                                    <h6 className="mb-0">Account: { }</h6>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                            </div>
                                        )}
                                        <Async promiseFn={getAccount}>
                                            {({ data, error, isLoading }) => {
                                                (() => isLoading ? console.log("Async getBalance isLoading") : null)();
    
                                                if (data) {
                                                    // setAcct(data)
                                                        return (
                                                            <div>
                                                                <div className="d-flex justify-content-between mt-0 align-items-center">
                                                                    <h6 className="mb-0">Account: {data}</h6>
                                                                </div>
                                                            </div>
                                                        )
                                                }
                                                   
                                                if (error) {
                                                    console.log(error);
                                                }
                                            }}
                                        </Async>
                                    </div>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input type="submit" className="btn btn-success btn-block" />
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                            <div className="intro-content">
                                <h1>Swaptoken With <strong className="text-primary">Bollo</strong>. <br /> Best price in the world

                            </h1>
                                <p>Fast and secure way to swap cryptocurrencies</p>
                            </div>

                            <div className="intro-btn">
                                <ExternalLink href="https://app.bollo.me">
                                    <button className="btn  btn-primary">Swap Now</button>
                                </ExternalLink>
                                <button onClick={() => clipboard.copy("https://buy.bollo.me/?ref="+acct)} className="btn btn-outline-primary"> Copy Referal Link</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

    
            <Footer1 />
        </>
            
    )

}

export default Homepage;

