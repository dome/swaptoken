import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header3 from '../layout/header3';
import Footer1 from '../layout/footer1';



function Demo() {

    return (
        <>
            <Header3 />

            <div className="intro section-padding position-relative" id="intro">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-md-6">
                            <div className="intro-content">
                                <h1>Landing Page with <br /> Dashboard Template</h1>
                                <p>Tradix is the complete UI of Front end and Backend. Sign in, Signup, Phone and ID card verification, One time password verify and add bank, debit card settings and profile etc pages included. </p>
                                <a href="#demo" className="btn btn-primary" data-scroll-nav="1">View Demo</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 py-md-5">
                            <div className="intro-demo_img">
                                <img src={require('./../../images/portfolio.png')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="demo section-padding page-section" id="demo">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-heading text-center">
                                <span>Explore</span>
                                <h2>Landing Page</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/home1.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Homepage</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./index2'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/home2.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Homepage</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./price'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/price.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Price</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./wallet'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/wallet.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Wallet</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./about'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/about.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>About</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./team'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/team.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Team</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./blog'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/blog.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Blog</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./blog-single'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/blog-single.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Blog Single</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./career'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/career.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Career</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./contact'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/contact.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Contact</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./helpdesk'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/helpdesk.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Help Desk</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./faq'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/faq.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>FAQ</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./privacy-policy'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/privacy.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Privacy Policy</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./terms-condition'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/landing/terms.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Terms Condition</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-heading text-center">
                                <span>Explore</span>
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./dashboard'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/dashboard.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Dashboard</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./buy-sell'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/buy-sell.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Buy and Sell</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./accounts'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/accounts.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Accounts</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/settings.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings-preferences'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/preferences.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Preferences</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings-security'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/security.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Security</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings-account'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/linked-account.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Linked Account</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./history'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/history.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>History</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./signin'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/signin.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Signin</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./signup'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/signup.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Signup</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./reset'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/reset.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Reset</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./lock'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/lock.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Locked</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./otp-1'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/otp-phone.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>OTP Number</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./otp-2'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/otp-code.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>OTP Code</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-1'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/verify-id.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Verify ID</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-2'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/upload-id.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Upload ID</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-3'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/id-verifing.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>ID Verifying</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-4'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/id-verified.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>ID Verified</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./add-debit-card'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/add-debit-card.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Add Debit Card</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-6'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/success.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Success</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-5'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/choose-account.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Recommendation</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./add-bank-acc'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard/add-bank.png')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Add Bank Account</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="features section-padding mb-80" id="support">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section_heading">
                                <span>Problem?</span>
                                <h3>Don't Worry, I am waiting your question</h3>
                                <p>Refreshing my inbox, waiting for your mail </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-content">
                                <span><i className="fa fa-skype"></i></span>
                                <h4>sporsho9</h4>
                                <p>Without sleeping time, I am avaiable in skype. I recommend Skype</p>
                                <Link href="skype:profile_name?sporsho9">Add Skype <i className="la la-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-content">
                                <span><i className="fa fa-envelope"></i></span>
                                <h4>quixlab.com@gmail.com</h4>
                                <p>When you send me email, I get notification, and quickly reply you</p>
                                <Link href="mailto:quixlab.com@gmail.com">Send Email <i className="la la-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-content">
                                <span><i className="fa fa-life-ring"></i></span>
                                <h4>Hire me</h4>
                                <p>You have need more design or customization? Dont worry about Quality</p>
                                <Link href="https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses">Hire Now <i className="la la-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    )
}

export default Demo;