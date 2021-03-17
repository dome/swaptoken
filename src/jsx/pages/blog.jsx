import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';



function Blog() {

    return (
        <><Header1 />
            <div className="blog section-padding border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="blog-grid">
                                        <div className="card">
                                            <img className="img-fluid" src={require('./../../images/blog/1.jpg')} alt="" />
                                            <div className="card-body">
                                                <Link to={'/blog-single'}>
                                                    <h4 className="card-title">Why does Litecoin need MimbleWimble?</h4>
                                                </Link>
                                                <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said
                                                    a
                                                    load of
                                                old tosh baking cakes.!</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="meta-info">
                                                    <Link to={'/'} className="author"><img src={require('./../../images/avatar/5.jpg')} alt="" />
                                                        Admin</Link>
                                                    <Link to={'/'} className="post-date"><i className="la la-calendar"></i> 31 July,
                                                    2019</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="blog-grid">
                                        <div className="card">
                                            <img className="img-fluid" src={require('./../../images/blog/2.jpg')} alt="" />
                                            <div className="card-body">
                                                <Link to={'/blog-single'}>
                                                    <h4 className="card-title">How to securely store your HD wallet seeds?</h4>
                                                </Link>
                                                <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said
                                                    a
                                                    load of
                                                old tosh baking cakes.!</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="meta-info">
                                                    <Link to={'/'} className="author"><img src={require('./../../images/avatar/6.jpg')} alt="" />
                                                        Admin</Link>
                                                    <Link to={'/'} className="post-date"><i className="la la-calendar"></i> 31 July,
                                                    2019</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="blog-grid">
                                        <div className="card">
                                            <img className="img-fluid" src={require('./../../images/blog/3.jpg')} alt="" />
                                            <div className="card-body">
                                                <Link to={'/blog-single'}>
                                                    <h4 className="card-title">Exclusive Interview With Xinxi Wang Of Litecoin
                                                </h4>
                                                </Link>
                                                <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said
                                                    a
                                                    load of
                                                old tosh baking cakes.!</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="meta-info">
                                                    <Link to={'/'} className="author"><img src={require('./../../images/avatar/7.jpg')} alt="" />
                                                        Admin</Link>
                                                    <Link to={'/'} className="post-date"><i className="la la-calendar"></i> 31 July,
                                                    2019</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="blog-grid">
                                        <div className="card">
                                            <img className="img-fluid" src={require('./../../images/blog/3.jpg')} alt="" />
                                            <div className="card-body">
                                                <Link to={'/blog-single'}>
                                                    <h4 className="card-title">Exclusive Interview With Xinxi Wang Of Litecoin
                                                </h4>
                                                </Link>
                                                <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said
                                                    a
                                                    load of
                                                old tosh baking cakes.!</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="meta-info">
                                                    <Link to={'/'} className="author"><img src={require('./../../images/avatar/7.jpg')} alt="" />
                                                        Admin</Link>
                                                    <Link to={'/'} className="post-date"><i className="la la-calendar"></i> 31 July,
                                                    2019</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <div className="blog-sidebar">
                                <div className="widget-search">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Subscribe Now" />
                                        <span><i className="la la-search"></i></span>
                                    </form>
                                </div>
                                <div className="widget-recent-post">
                                    <h3 className="post-title">Recent Post</h3>
                                    <ul className="list-unstyled">
                                        <li className="media">
                                            <img src={require('./../../images/blog/post_1.jpg')} className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                                <div className="meta-info">
                                                    <Link to={'/'}><i className="la la-user"></i> Admin</Link>
                                                    <Link to={'/'}><i className="la la-calendar"></i> 31 July, 2019</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media my-4">
                                            <img src={require('./../../images/blog/post_2.jpg')} className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                                <div className="meta-info">
                                                    <Link to={'/'}><i className="la la-user"></i> Admin</Link>
                                                    <Link to={'/'}><i className="la la-calendar"></i> 31 July, 2019</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img src={require('./../../images/blog/post_3.jpg')} className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                                <div className="meta-info">
                                                    <Link to={'/'}><i className="la la-user"></i> Admin</Link>
                                                    <Link to={'/'}><i className="la la-calendar"></i> 31 July, 2019</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget-category">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                        <span className="badge badge-primary">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Dapibus ac facilisis in
                                        <span className="badge badge-primary">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Morbi leo risus
                                        <span className="badge badge-primary">1</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget-tag">
                                    <h3 className="widget-title">Tags</h3>
                                    <div className="tag-group">
                                        <Link to={'/'}>Tradix</Link>
                                        <Link to={'/'}>Song</Link>
                                        <Link to={'/'}>Title</Link>
                                        <Link to={'/'}>Good</Link>
                                        <Link to={'/'}>Dashboard</Link>
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

export default Blog;