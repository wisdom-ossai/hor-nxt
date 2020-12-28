import Link from "next/link";

const Footer = () => (
    <footer className="main-footer">
        <div className="footer-upper">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row clearfix">
                        <div className="big-column col-md-5 col-sm-12 col-xs-12">
                            <div className="row clearfix">
                                <div className="footer-column col-md-7 col-sm-5 col-xs-12">
                                    <div className="footer-widget adress-widget">
                                        <h3>Address</h3>
                                        <div className="text">Michael I. Days 3756 <br />Preston Street Wichita, KS 67213 <br />- <a href="#">Nigeria</a></div>
                                            <ul>
                                            <li><a href="#"><span className="theme_color fa fa-phone"></span> &ensp; +234 816 830 5869</a></li>
                                            <li><a href="#"><span className="theme_color fa fa-fax"></span> &ensp; +234 806 279 1487</a></li>
                                            <li><a href="#"><span className="theme_color fa fa-envelope"></span> &ensp; info@houseofrestoration.com</a></li>
                                            </ul>
                                    </div>
                                        </div>

                                        <div className="footer-column col-md-5 col-sm-4 col-xs-12">
                                            <div className="footer-widget donation-widget">
                                                <h3>Donation</h3>
                                                <ul className="donation-links">
                                                    <li><a href="#">Food Donation</a></li>
                                                    <li><a href="#">Dress Donation</a></li>
                                                    <li><a href="#">Education Donation</a></li>
                                                    <li><a href="#">Mony Donation</a></li>
                                                    <li><a href="#">Water Supplay</a></li>
                                                    <li><a href="#">Toys Donation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="big-column col-md-7 col-sm-12 col-xs-12">
                                    <div className="row clearfix">
                                        <div className="footer-column col-md-6 col-sm-6 col-xs-12">

                                    <div className="footer-widget post-widget">
                                                <h3>Recent Posts </h3>
                                                <ul>
                                                    <li className="recent-post">
                                                        <span className="date">14 May 2020</span>
                                                        <div className="text"><a href="blog-single-1.html">Malnutrition is the major cause of infant mortality</a></div>
                                                    </li>

                                                    <li className="recent-post">
                                                        <span className="date">14 May 2020</span>
                                                        <div className="text"><a href="blog-single-1.html">Malnutrition is the major cause of infant mortality</a></div>
                                                    </li>

                                                    <li className="recent-post">
                                                        <span className="date">14 May 2020</span>
                                                        <div className="text"><a href="blog-single-1.html">Malnutrition is the major cause of infant mortality</a></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                            <div className="footer-widget tweet-widget">
                                                <h3>Tweets</h3>
                                                <div className="twitter-post">
                                                    <div className="name"><span className="fa fa-twitter"></span>@Company_text</div>
                                                    <div className="text">Iferei te compoen iusquam re,vid eperius aus <span>terravera</span> teri fauten it. Supienitui sente ad fac vesil tatiostrim <span>#escreissimiu</span></div>
                                                    <span className="date">15 May 2020</span>
                                                </div>

                                                <div className="twitter-post">
                                                    <div className="name"><span className="fa fa-twitter"></span>@Company_text</div>
                                                    <div className="text">Iferei te compoen iusquam re,vid eperius aus <span>terravera</span>. Supienitui sente ad fac vesil tatiostrim <span>#donate</span></div>
                                                    <span className="date">12 May 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="follow-us clearfix">
                            <h5>Follow us on</h5>
                            <ul className="social-icon-colored">
                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

        <div className="footer-bottom">
                    <div className="auto-container">
                <div className="copyright">Copyright <Link href="/about"><a>House Of Restoration</a></Link> &copy; {new Date().getFullYear()}. All Rights Reserved</div>
                    </div>
                </div>
    </footer>
);

export default Footer;