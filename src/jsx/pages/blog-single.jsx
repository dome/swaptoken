import React, { } from 'react';
 import { Link } from 'react-router-dom';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';



function BlogSingle() {

    return (
        <><Header1 />
            <div className="blog section-padding border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-single-post single">
                                <ul className="post-nfo">
                                    <li><i className="la la-calendar"></i>April 25, 2018</li>
                                    <li><i className="la la-comment-o"></i><Link to={'#'} title="">4 Comments</Link></li>
                                    <li><i className="la la-bookmark-o"></i><Link to={'#'} title="">Apartments</Link></li>
                                </ul>
                                <h3>Real Estate near ocean</h3>
                                <div className="blog-img">
                                    <img src={require('./../../images/blog/1.jpg')} alt="" className="img-fluid" />
                                </div>
                                {/* <!--blog-img end--> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget
                                    porta.
                                    Aliquam ebendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex.
                                    Aenean
                                    luctus, orci condimentum cursus, quam lorem
                                    vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices,
                                    ullamcorper finibus magna sollicitudin. Vivamus sed massa sit amet diam porta dignissim
                                    at
                                    in lorem. In facilisis quis erat at tempus.
                                Aliquam semper diam mollis mollis. Mauris dictum, ante ac interdum.</p>
                                <p> Astibulum, nibh ipsum condimentum felis, quis luctus nisi nisl sed orci. Pellentesque
                                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed
                                    tempus
                                    puet rutrum ultrces. Cras pretium pretium odio aliquam
                                    tortor interduma. Morbi commodo egestas mauris, et porttitor ipsum iaculis fermentum.
                                Phasellus ante nibh, posuere gravida odio mattis cursus. </p>
                                <blockquote>Donec sapien odio, mollis ut phaliquet hendrerit erat. Etiam mollis odio ac
                                    libero
                                    ultrices cursus. Mauris massa felis, rutrum vitae velit et. Aliquam ac neque in dui
                                    eleifend
                                elementum vitae mi.</blockquote>
                                <p>Praesent bibendum eget justo ac volutpat. Proin laoreet hendrerit porttitor. Praesent ac
                                    lobortis urna. Nam vi ligula nec posuere ornare. Integer aliquet libero at lectus
                                    scelerisque fermentum. Sed dapibus massa ut ex semper porttitor.
                                    Donec blandit dui sit amet nunc sagittis, ut convallis ligula tempor. Vestibulum at
                                tincidunt mi. Proin venenatis dui et ex lobortis ultricies. </p>
                                <div className="blg-dv">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blg-sm">
                                                <img src={require('./../../images/blog/2.jpg')} alt="" className="img-fluid" />
                                            </div>
                                            {/* <!--blg-sm end--> */}
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="blg-info">
                                                <p>Orci varius natoque penatibus et magnis disa parturient montes, nascetur
                                                    ridiculus mus. Vestibulum scelerisque commodo ultricies. Phasellus vite
                                                    ipsum eget diam feme ntum tempor quis nec diam. Nulla at lacus
                                                    consequat.
                                            </p>
                                            </div>
                                            {/* <!--blg-info end--> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!--blg-dv end--> */}
                                <p>Ut egestas fringilla commodo. Phasellus ac mi vel massa mattis elementum non et quam.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Praesent at nibh eros. Curabitur rutrum fermentum
                                    augue, ut auctor elit tempor scelerisque. Pellentesque habitant morbi tristique senectus
                                    et
                                    netus et malesuada fames ac turpis egestas. Vivamus sed ante eu justo feugiat fringilla
                                    sit
                                    amet quis arcu. Vivamus eget cursus ligula,
                                condimentum feugiat velit, a viverra urna placerat et.</p>
                                <ul className="bg-links">
                                    <li>Nunc varius varius dolor, sit amet dignissim ligula placerat ullamcorper quam a
                                        magna
                                    tempus ornare. </li>
                                    <li>Aliquam sapien lorem, aliquet consequat neque vel, placerat euismod isl vitae velit
                                    elementum aliquet.</li>
                                    <li>Sed id orci laoreet, lacinia ligula eget, fringilla metus. Quisque nec or
                                        condimentum
                                    accumsan neque. </li>
                                </ul>
                                {/* <!--bg-links end--> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget
                                    porta.
                                    Aliquam ebendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex.
                                    Aenean
                                    luctus, orci condimentum cursus, quam lorem
                                    vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices,
                                    ullamcorper finibus magna sollicitudin. Vivamus sed massa sit amet diam porta dignissim
                                    at
                                    in lorem. In facilisis quis erat at tempus.
                                Aliquam semper diam mollis mollis. Mauris dictum, ante ac interdum.</p>
                                <p> Astibulum, nibh ipsum condimentum felis, quis luctus nisi nisl sed orci. Pellentesque
                                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed
                                    tempus
                                    puet rutrum ultrces. Cras pretium pretium odio aliquam
                                    tortor interduma. Morbi commodo egestas mauris, et porttitor ipsum iaculis fermentum.
                                Phasellus ante nibh, posuere gravida odio cursus risus. </p>
                                <div className="post-share">
                                    <ul className="social-links">
                                        <li><Link to={'#'} title=""><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to={'#'} title=""><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to={'#'} title=""><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to={'#'} title=""><i className="fa fa-linkedin"></i></Link></li>
                                    </ul>
                                    <Link href="#comment-sec" title="">Write A Comment <i className="la la-arrow-right"></i></Link>
                                </div>
                                {/* <!--post-share end--> */}
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src={require('./../../images/blog/cm-img.png')} alt="" />
                                    </div>
                                    {/* <!--author-img end--> */}
                                    <div className="cm-info">
                                        <h3>Endrey Tomson</h3>
                                        <p>Etiam euismod iaculis urna vel venenatis. Morbi rutrum commodo enim. Vivamus
                                            tinci
                                            dunt leo vel arcu elnd euismodtis purus in, pulvinar tellus nisl aliquam pretium
                                            ac.
                                    </p>
                                        <ul className="social-links">
                                            <li><Link to={'#'} title=""><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={'#'} title=""><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to={'#'} title=""><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={'#'} title=""><i className="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--cm-info-sec end--> */}
                            </div>
                            {/* <!--blog-single-post end--> */}
                            <div className="comment-section">
                                <h3 className="p-title">Comments</h3>
                                <ul>
                                    <li>
                                        <div className="cm-info-sec">
                                            <div className="cm-img">
                                                <img src={require('./../../images/blog/cm-img.png')} alt="" />
                                            </div>
                                            {/* <!--author-img end--> */}
                                            <div className="cm-info">
                                                <h3>Kritsofer Nolan</h3>
                                                <h4>April 25, 2018</h4>
                                            </div>
                                        </div>
                                        {/* <!--cm-info-sec end--> */}
                                        <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id,
                                            porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut
                                            sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc
                                        molestie. </p>
                                        <Link to={'#'} title="" className="cm-reply">Reply</Link>
                                    </li>
                                    <li>
                                        <div className="cm-info-sec">
                                            <div className="cm-img">
                                                <img src={require('./../../images/blog/cm-img.png')} alt="" />
                                            </div>
                                            {/* <!--author-img end--> */}
                                            <div className="cm-info">
                                                <h3>Kritsofer Nolan</h3>
                                                <h4>April 25, 2018</h4>
                                            </div>
                                        </div>
                                        {/* <!--cm-info-sec end--> */}
                                        <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id,
                                            porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut
                                            sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc
                                        molestie. </p>
                                        <Link to={'#'} title="" className="cm-reply">Reply</Link>
                                    </li>
                                    <li>
                                        <div className="cm-info-sec">
                                            <div className="cm-img">
                                                <img src={require('./../../images/blog/cm-img.png')} alt="" />
                                            </div>
                                            {/* <!--author-img end--> */}
                                            <div className="cm-info">
                                                <h3>Kritsofer Nolan</h3>
                                                <h4>April 25, 2018</h4>
                                            </div>
                                        </div>
                                        {/* <!--cm-info-sec end--> */}
                                        <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id,
                                            porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut
                                            sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc
                                        molestie. </p>
                                        <Link to={'#'} title="" className="cm-reply">Reply</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--comment-section end--> */}
                            <div className="post-comment-sec" id="comment-sec">
                                <h3 className="p-title">Leave a reply</h3>
                                <form className="js-ajax-form" novalidate="novalidate">
                                    <div className="form-fieldss">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 pl-0">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="name"
                                                        placeholder="Your Name" id="name" />
                                                </div>
                                                {/* <!-- form-field end--> */}
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" name="email"
                                                        placeholder="Your Email" id="email" />
                                                </div>
                                                {/* <!-- form-field end--> */}
                                            </div>
                                            <div className="col-lg-4 col-md-4 pr-0">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="phone"
                                                        placeholder="Your Phone" />
                                                </div>
                                                {/* <!-- form-field end--> */}
                                            </div>
                                            <div className="col-lg-12 col-md-12 pl-0 pr-0">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message"
                                                        placeholder="Your Message"></textarea>
                                                </div>
                                                {/* <!-- form-field end--> */}
                                            </div>
                                            <div className="col-lg-12 col-md-12 pl-0">
                                                <button type="submit" className="btn btn-primary submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!--post-comment-sec end--> */}
                        </div>
                        <div className="col-xl-3">
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
                                                    <Link to={'#'}><i className="la la-user"></i> Admin</Link>
                                                    <Link to={'#'}><i className="la la-calendar"></i> 31 July, 2019</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media my-4">
                                            <img src={require('./../../images/blog/post_2.jpg')} className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                                <div className="meta-info">
                                                    <Link to={'#'}><i className="la la-user"></i> Admin</Link>
                                                    <Link to={'#'}><i className="la la-calendar"></i> 31 July, 2019</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img src={require('./../../images/blog/post_3.jpg')} className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                                <div className="meta-info">
                                                    <Link to={'#'}><i className="la la-user"></i> Admin</Link>
                                                    <Link to={'#'}><i className="la la-calendar"></i> 31 July, 2019</Link>
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
                                        <span className="badge badge-primary badge-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Dapibus ac facilisis in
                                        <span className="badge badge-primary badge-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Morbi leo risus
                                        <span className="badge badge-primary badge-pill">1</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget-tag">
                                    <h3 className="widget-title">Tags</h3>
                                    <div className="tag-group">
                                        <Link to={'#'}>Tradix</Link>
                                        <Link to={'#'}>Tradix</Link>
                                        <Link to={'#'}>Tradix</Link>
                                        <Link to={'#'}>Tradix</Link>
                                        <Link to={'#'}>Tradix</Link>
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

export default BlogSingle;